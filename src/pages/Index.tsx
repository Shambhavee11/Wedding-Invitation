import HeroSection from "@/components/wedding/HeroSection";
import EventsSection from "@/components/wedding/EventsSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import GallerySection from "@/components/wedding/GallerySection";
import FooterSection from "@/components/wedding/FooterSection";
import VideoSection from "@/components/wedding/VideoSection";
import AttendanceSection from "@/components/wedding/AttendanceSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <EventsSection />
      <CountdownSection />
      <GallerySection />
      <VideoSection />
      <AttendanceSection />
      <FooterSection />
    </main>
  );
};

export default Index;
