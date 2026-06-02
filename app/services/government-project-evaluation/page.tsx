import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { FileCheck } from 'lucide-react';
import Seventhbanner from './components/Seventhbanner';
import Getintouch from '@/components/Getintouch';
import Govtproject from './components/Govtproject';


export const metadata = {
  title: 'Government Project Evaluation | BMRB',
  description: 'Comprehensive evaluation services for government programs including impact assessment and policy research.',
};

export default function ElectionSurveyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Seventhbanner />
      <Govtproject />
      <Getintouch /> 
      <Footer />
    </main>
  );
}

