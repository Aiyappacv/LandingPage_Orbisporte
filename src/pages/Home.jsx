import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Features from '../components/Features';
import Workflow from '../components/Workflow';
import TransportModes from '../components/TransportModes';
import Statistics from '../components/Statistics';
import Modules from '../components/Modules';
import AICapabilities from '../components/AICapabilities';
import WhyChoose from '../components/WhyChoose';
import Industries from '../components/Industries';
import Security from '../components/Security';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <Workflow />
      <TransportModes />
      <Statistics />
      <Modules />
      <AICapabilities />
      <WhyChoose />
      <Industries />
      <Security />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
