'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";

export default function Home() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <ScrollUp />
      <Hero />
      <Features />
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </div>
  );
}
