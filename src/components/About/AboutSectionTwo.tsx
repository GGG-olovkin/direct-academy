'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Image from "next/image";

const AboutSectionTwo = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0">
              <Image
                src="/bg2.jpg"
                alt={t('sections.aboutTwo.imageAlt')}
                className="rounded-xl object-cover"
                fill
              />
              {/* Decorative Elements */}
              <div className="absolute -left-6 -top-6 -z-10 h-full w-full rounded-xl bg-primary/10"></div>
              <div className="absolute -right-6 -bottom-6 -z-10 h-full w-full rounded-xl bg-primary/10"></div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {t('sections.aboutTwo.features.online.title')}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                  {t('sections.aboutTwo.features.online.description')}
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {t('sections.aboutTwo.features.hybrid.title')}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                  {t('sections.aboutTwo.features.hybrid.description')}
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {t('sections.aboutTwo.features.practice.title')}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg sm:leading-relaxed">
                  {t('sections.aboutTwo.features.practice.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
