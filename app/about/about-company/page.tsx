import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Initialbanner from './components/Initialbanner';
import Profile from './components/Profile';
import Partner from './components/Partner';
import Experience from './components/Experience';
import Getintouch from '@/components/Getintouch';


export default function AboutCompanyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="bg-[url('/home-bg.webp')] fill bg-cover bg-center">
        <Initialbanner />
      </div>
      <Profile />
      <div className="bg-[url('/home-clients-2.webp')] fill bg-cover bg-center">
        <Partner />
      </div>
      <Experience />
      <Getintouch />
      <Footer />
    </main>
  );
}
