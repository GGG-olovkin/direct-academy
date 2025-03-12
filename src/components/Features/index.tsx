'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/20 to-purple-100/30 blur-[100px] dark:from-primary/10 dark:to-purple-900/20"></div>
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/20 to-purple-100/30 blur-[100px] dark:from-primary/10 dark:to-purple-900/20"></div>
      </div>

      <div className="container">
        <div className="mx-auto mb-16 max-w-[690px] text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
            {t('sections.features.title')}
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark md:text-lg">
            {t('sections.features.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
