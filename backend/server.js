const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Resend } = require("resend");
const fs = require("fs");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

const dataDir = path.join(__dirname, "data");
const filePath = path.join(dataDir, "rsvps.json");
const frontendPath = path.join(__dirname, "..", "dist");

// Optional backend health route
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Backend is running" });
});

// RSVP submit route
app.post("/api/rsvp", async (req, res) => {
  try {
    console.log("RSVP route hit");
    console.log("Incoming body:", req.body);

    const { name, email, events, guests, attending, message } = req.body;

    if (!name || !email || !attending) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and attending are required.",
      });
    }

    let existingData = [];

    // Ensure data folder exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      existingData = fileContent ? JSON.parse(fileContent) : [];
    }

    const newRsvp = {
      id: Date.now(),
      name,
      email,
      events: events || [],
      guests: guests || "1",
      attending,
      message: message || "",
      submittedAt: new Date().toISOString(),
    };

    existingData.push(newRsvp);

    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    console.log("RSVP saved to JSON successfully");

    let emailStatus = "RSVP saved and emails sent successfully";

    try {
      console.log("Sending email to owner...");
      await resend.emails.send({
        from: "Wedding RSVP <onboarding@resend.dev>",
        to: "weddingshreyaandvivek@gmail.com",
        subject: `New Wedding RSVP from ${name}`,
        html: `
          <h2>New RSVP Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Selected Events:</strong> ${
            events && events.length ? events.join(", ") : "None selected"
          }</p>
          <p><strong>Guests:</strong> ${guests || "1"}</p>
          <p><strong>Attending:</strong> ${attending}</p>
          <p><strong>Message:</strong> ${message || "No message"}</p>
        `,
      });

      console.log("Sending confirmation email to guest...");
      await resend.emails.send({
        from: "Wedding RSVP <onboarding@resend.dev>",
        to: email,
        subject: "RSVP Confirmation",
        html: `
          <h2>Thank you for your RSVP, ${name}!</h2>
          <p>We have received your response.</p>
          <p><strong>Selected Events:</strong> ${
            events && events.length ? events.join(", ") : "None selected"
          }</p>
          <p><strong>Guests:</strong> ${guests || "1"}</p>
          <p><strong>Attending:</strong> ${attending}</p>
        `,
      });

      console.log("Both emails sent successfully");
    } catch (mailError) {
      console.error("Email sending failed:", mailError);
      emailStatus = "RSVP saved, but email could not be sent.";
    }

    res.status(200).json({
      success: true,
      message: emailStatus,
    });
  } catch (error) {
    console.error("Error saving RSVP:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong while submitting RSVP.",
    });
  }
});

// See all RSVPs
app.get("/api/rsvps", (req, res) => {
  try {
    if (!fs.existsSync(filePath)) {
      return res.json([]);
    }

    const data = fs.readFileSync(filePath, "utf-8");
    const rsvps = data ? JSON.parse(data) : [];
    res.json(rsvps);
  } catch (error) {
    console.error("Error reading RSVPs:", error);
    res.status(500).json({ message: "Error reading RSVP data" });
  }
});

// Serve frontend static files
app.use(express.static(frontendPath));

// React/Vite fallback for all non-API routes
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});