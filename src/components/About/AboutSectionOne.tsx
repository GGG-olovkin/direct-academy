'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Image from "next/image";

const List = ({ text }: { text: string }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-body-color">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.225031 13.8917 0.225031 14.087 0.420561L15.7377 2.07127C15.933 2.26674 15.933 2.58332 15.7377 2.77879L5.8535 12.6631Z" />
      </svg>
    </span>
    {text}
  </p>
);

const AboutSectionOne = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative z-10 overflow-hidden bg-white pb-16 pt-20 dark:bg-gray-dark md:pb-20 lg:pb-28 lg:pt-[120px]">
      {/* Background Decorations */}
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[url('/images/about/grid-pattern.svg')] bg-cover bg-center bg-no-repeat opacity-5"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-1/2 w-full bg-gradient-to-t from-white/80 to-transparent dark:from-gray-dark/80"></div>

      <div className="container">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 max-w-[540px] lg:mb-0">
              <h2 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight">
                {t('sections.aboutOne.title')}
              </h2>
              <p className="mb-10 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {t('sections.aboutOne.description')}
              </p>

              <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <List text={t('sections.aboutOne.features.native')} />
                <List text={t('sections.aboutOne.features.small')} />
                <List text={t('sections.aboutOne.features.personal')} />
                <List text={t('sections.aboutOne.features.methods')} />
                <List text={t('sections.aboutOne.features.practice')} />
                <List text={t('sections.aboutOne.features.materials')} />
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
              <div className="absolute -right-10 -top-10 z-[-1] h-full w-full rounded-2xl bg-primary/5"></div>
              <Image
                src="/bg.jpg"
                alt={t('sections.aboutOne.imageAlt')}
                className="mx-auto rounded-2xl object-cover lg:mr-0"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
