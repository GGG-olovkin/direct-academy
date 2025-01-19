'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import dynamic from 'next/dynamic';
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from '@/components/Hero';

// Lazy load edilecek bileşenler
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div>Loading...</div>,
  ssr: false
});

const Blog = dynamic(() => import('@/components/Blog'), {
  loading: () => <div>Loading...</div>
});

const Features = dynamic(() => import('@/components/Features'), {
  loading: () => <div>Loading...</div>
});

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
      <Blog />
      <Contact />
    </div>
  );
}
