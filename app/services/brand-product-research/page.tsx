import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import PageHeader from '@/components/PageHeader';
// import { TrendingUp } from 'lucide-react';
import Getintouch from "@/components/Getintouch";
import Thirdbanner from './components/Thirdbanner';
import Serviceoverview from './components/Serviceoverview';

export const metadata = {
  title: 'Brand & Product Research | BMRB',
  description: 'Comprehensive brand positioning and product research services to understand market perception and consumer attitudes.',
};

export default function BrandResearchPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Thirdbanner />
      <Serviceoverview />
      <Getintouch />
      <Footer />
    </main>
  );
}
