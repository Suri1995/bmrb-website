import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import HeroCarousel from '@/components/Images';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import QualitySection from '@/components/QualitySection';
import Project from '@/components/Project';
import Consultation from '@/components/Consultation';
import Clients from '@/components/Clients';
import Getintouch from '@/components/Getintouch';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero  />
      <Expertise />
      <HeroCarousel />
      <Services />
      <QualitySection />
      <Project />
      <div className="bg-[url('/bg-placeholder.webp')] fill bg-cover bg-center">      
        <Consultation />
      </div>
      <Clients />
      <Getintouch />
      <Footer />
    </main>
  );
}
