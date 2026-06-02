import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Fourthbanner from './components/Fourthbanner';
import Customeroverview from './components/Customeroverview';
import Getintouch from '@/components/Getintouch';

export const metadata = {
  title: 'Customer Satisfaction Research | BMRB',
  description: 'Measure and improve customer satisfaction through NPS studies, surveys, and loyalty program evaluation.',
};

export default function CustomerSatisfactionPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Fourthbanner />
      <Customeroverview />
      <Getintouch />
      <Footer />
    </main>
  );
}
