import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      <img
        src="/reference.png"
        className="fixed top-0 left-0 w-full opacity-30 pointer-events-none z-[9999] hidden md:block"
      />

      <HeroSection />
      <ServicesSection />
    </main>
  );
}