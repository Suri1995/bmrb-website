import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import PageHeader from '@/components/PageHeader';
import { Building2 } from 'lucide-react';
import Getintouch from "@/components/Getintouch";
import Fifthbanner from './components/Fifthbanner';
import Btobsevices from './components/Btobsevices';



export const metadata = {
  title: 'B2B & Industrial Research | BMRB',
  description: 'Data-driven insights for B2B sectors including decision-maker profiling, industry benchmarking, and market assessment.',
};

export default function B2BResearchPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Fifthbanner />
      <Btobsevices />
      <Getintouch /> 
      <Footer />
    </main>
  );
}
