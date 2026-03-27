import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import RenaissanceWorkshop from '@/components/RenaissanceWorkshop';
import ProductGrid from '@/components/ProductGrid';
import HowItWorks from '@/components/HowItWorks';
import SocialProof from '@/components/SocialProof';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <RenaissanceWorkshop />
      <ProductGrid />
      <HowItWorks />
      <SocialProof />
      <FinalCTA />
    </>
  );
}
