"use client"
// app/page.tsx (Homepage)
import Hero from '../components/Hero';  
import GoogleMapEmbed from '../components/GoogleMapEmbed';
import dynamic from 'next/dynamic';
import TextSection1 from '../components/TextSection1';

import ApprovalLogos from '../components/approvalLogos';
import Testimonials from '../components/Testimonials';
import Countdown from '../components/Countdown';
import OfferingsSlider from '../components/OfferingsSlider';
import StatsSection from '@/components/StatsSection';
import ComparisonSection from '@/components/ComparisonSection';
const StatsCounter = dynamic(() => import('../components/statscounter'), {
  ssr: false,
});
//import Services from '../components/Services';//<Services />

export default function Home() {
  return (
    <>
      <Hero />
      <TextSection1 />
      <ApprovalLogos />
      <ComparisonSection />
      <Countdown />
      <OfferingsSlider />
      <StatsCounter />
      <Testimonials />
      <StatsSection />
      <GoogleMapEmbed />
    </>
  );
}
