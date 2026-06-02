import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Award, Zap, Shield, Target } from 'lucide-react';
import Secondbanner from './components/Secondbanner';
import Team from './components/team';
import Getintouch from '@/components/Getintouch';

export default function AboutCompanyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Secondbanner />
      <Team />
      <Getintouch />
      <Footer />
    </main>
  );
}
