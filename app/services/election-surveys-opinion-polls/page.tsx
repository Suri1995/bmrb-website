import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Getintouch from "@/components/Getintouch";
import Sixthbanner from './components/Sixthbanner';
import Election from './components/Election';

export const metadata = {
  title: 'Election Surveys & Opinion Polls | BMRB',
  description: 'Accurate and reliable election surveys, exit polls, and opinion polling services for political campaigns and policy research.',
};

export default function ElectionSurveyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Sixthbanner />
      <Election />
      <Getintouch /> 
      <Footer />
    </main>
  );
}


