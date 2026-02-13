import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AfishaSection from "@/components/AfishaSection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AfishaSection />
      <GallerySection />
      <BookingSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
