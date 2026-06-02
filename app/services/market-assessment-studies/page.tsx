import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { BarChart3 } from 'lucide-react';
import Eightbanner from './components/Eightbanner';
import Getintouch from '@/components/Getintouch';
import MarketAssessment from './components/MarketAssessment';

export const metadata = {
  title: 'Market Assessment Studies | BMRB',
  description: 'Research-based market analysis services including market sizing, growth analysis, and startup market research.',
};

export default function MarketAssessmentPage() {
  return (
    <main className="min-h-screen bg-background">
          <Header />
          <Eightbanner />
          <MarketAssessment />
          <Getintouch /> 
          <Footer />
        </main>
  );
}
