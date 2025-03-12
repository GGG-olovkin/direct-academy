'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import SingleTestimonial from "./SingleTestimonial";

const Testimonials = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative z-10 bg-gray-50 py-16 dark:bg-gray-dark/30 md:py-20 lg:py-28">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-[-1] bg-[url('/images/testimonials/pattern.svg')] bg-cover bg-center bg-no-repeat opacity-5"></div>
      <div className="absolute bottom-0 left-0 right-0 top-1/2 bg-white/50 dark:bg-gray-dark/50"></div>

      <div className="container relative">
        <div className="mx-auto mb-16 max-w-[690px] text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
            {t('sections.testimonials.title')}
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark md:text-lg">
            {t('sections.testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {(t('sections.testimonials.items', { returnObjects: true }) as any[]).map((testimonial) => (
            <SingleTestimonial
              key={testimonial.id}
              review={testimonial}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 top-5 z-[-1]">
          <span className="absolute left-0 top-0 h-40 w-40 rotate-45 rounded-full bg-primary/5"></span>
          <span className="absolute bottom-0 right-0 h-40 w-40 rotate-45 rounded-full bg-primary/5"></span>
        </div>
        <div className="absolute bottom-5 right-0 z-[-1]">
          <span className="absolute left-0 top-0 h-40 w-40 rotate-45 rounded-full bg-primary/5"></span>
          <span className="absolute bottom-0 right-0 h-40 w-40 rotate-45 rounded-full bg-primary/5"></span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
