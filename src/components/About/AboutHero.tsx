'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const AboutHero = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative z-10 overflow-hidden bg-white pb-8 sm:pb-12 pt-[80px] sm:pt-[100px] dark:bg-gray-dark md:pb-[100px] md:pt-[120px] xl:pb-[120px] xl:pt-[150px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-4 sm:mb-5 text-2xl sm:text-3xl font-bold leading-tight text-black dark:text-white md:text-4xl lg:text-5xl">
                {t('sections.about.page.title')}
              </h1>
              <p className="mb-8 sm:mb-12 text-sm sm:text-base !leading-relaxed text-body-color dark:text-body-color-dark md:text-lg lg:text-xl">
                {t('sections.about.page.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute left-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <svg width="364" height="201" viewBox="0 0 364 201" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24" stroke="url(#paint0_linear_25:218)" />
          <defs>
            <linearGradient id="paint0_linear_25:218" x1="184.389" y1="69.2405" x2="184.389" y2="212.24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <svg width="364" height="201" viewBox="0 0 364 201" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24" stroke="url(#paint0_linear_25:218)" />
          <defs>
            <linearGradient id="paint0_linear_25:218" x1="184.389" y1="69.2405" x2="184.389" y2="212.24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default AboutHero; 