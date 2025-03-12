'use client';

import { useTranslation } from 'react-i18next';
import Link from "next/link";
import { useState, useEffect } from 'react';
import Image from "next/image";

const Hero = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section style={{ backgroundImage: 'url(/bg-3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} className="relative overflow-x-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-40 sm:h-80 w-40 sm:w-80 rounded-full bg-primary/10 blur-[100px]"></div>
        <div className="absolute right-0 top-0 h-48 sm:h-96 w-48 sm:w-96 rounded-full bg-blue-100/50 blur-[100px] dark:bg-blue-900/30"></div>
        <div className="absolute bottom-0 left-1/2 h-32 sm:h-64 w-32 sm:w-64 -translate-x-1/2 rounded-full bg-purple-100/50 blur-[80px] dark:bg-purple-900/30"></div>
      </div>

      <div style={{ backdropFilter: 'blur(10px) brightness(0.8)' }} className="container mx-auto px-4 relative z-10 pt-[70px] pb-16 md:pt-[100px] md:pb-[100px] xl:pt-[100px] xl:pb-[160px] 2xl:pt-[140px] 2xl:pb-[200px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold !leading-tight text-black  text-white">
                {t('sections.hero.title')}
                <span className="relative inline-block text-primary">
                  Direct Academy
                </span>
              </h1>

              <p className="mb-8 sm:mb-12 text-base sm:text-lg md:text-xl !leading-relaxed text-body-color dark:text-body-color-dark">
                {t('sections.hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 hover:shadow-signUp"
                >
                  {t('sections.hero.getStarted')}
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-lg border border-primary bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary/5"
                >
                  {t('sections.hero.learnMore')}
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8">
                <div className="text-center">
                  <h4 className="mb-2 text-2xl sm:text-3xl font-bold text-white">500+</h4>
                  <p className="text-xs sm:text-sm text-body-color dark:text-body-color-dark">Öğrenci</p>
                </div>
                <div className="text-center">
                  <h4 className="mb-2 text-2xl sm:text-3xl font-bold text-white">15+</h4>
                  <p className="text-xs sm:text-sm text-body-color dark:text-body-color-dark">Öğretmen</p>
                </div>
                <div className="text-center">
                  <h4 className="mb-2 text-2xl sm:text-3xl font-bold text-white">98%</h4>
                  <p className="text-xs sm:text-sm text-body-color dark:text-body-color-dark">Başarı</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto max-w-[500px] lg:mr-0">
              <div className="relative aspect-square">
                <Image
                  src="/side.png"
                  alt="hero"
                  fill
                  priority
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -right-3 sm:-right-6 -top-3 sm:-top-6 z-[-1] h-16 sm:h-32 w-16 sm:w-32 rotate-45 bg-gradient-to-r from-primary/5 to-primary/30 blur-2xl"></div>
              <div className="absolute -left-3 sm:-left-6 -bottom-3 sm:-bottom-6 z-[-1] h-16 sm:h-32 w-16 sm:w-32 rotate-45 bg-gradient-to-r from-primary/5 to-primary/30 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Shape */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg className="w-full text-white dark:text-gray-800" viewBox="0 0 1440 120" fill="currentColor">
          <path d="M0,0 C240,40 480,80 720,80 C960,80 1200,40 1440,0 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
