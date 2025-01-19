'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Image from "next/image";

const Contact = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"></div>

      {/* Floating shapes */}
      <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute right-0 top-20 h-48 w-48 rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-900/30"></div>

      <div className="container relative">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            {t('sections.contact.title')}
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark md:text-lg">
            {t('sections.contact.subtitle')}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-gray-dark sm:p-12">
              {/* Decorative elements */}
              <div className="absolute -right-6 -top-6 h-32 w-32 rotate-45 bg-primary/5"></div>
              <div className="absolute -left-6 -bottom-6 h-32 w-32 rotate-45 bg-primary/5"></div>

              <form>
                <div className="mb-8 flex flex-wrap gap-4">
                  <div className="w-full md:w-[calc(50%-8px)]">
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      {t('sections.contact.form.name')}
                    </label>
                    <input
                      type="text"
                      placeholder={t('sections.contact.form.name')}
                      className="w-full rounded-lg border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary focus:shadow-input dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="w-full md:w-[calc(50%-8px)]">
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                      {t('sections.contact.form.email')}
                    </label>
                    <input
                      type="email"
                      placeholder={t('sections.contact.form.email')}
                      className="w-full rounded-lg border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary focus:shadow-input dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                    {t('sections.contact.form.message')}
                  </label>
                  <textarea
                    rows={6}
                    placeholder={t('sections.contact.form.message')}
                    className="w-full rounded-lg border border-transparent bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary focus:shadow-input dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button className="rounded-lg bg-primary px-9 py-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90 hover:shadow-submit dark:shadow-submit-dark">
                    {t('sections.contact.form.submit')}
                  </button>
                </div>
              </form>

              {/* Contact info cards */}
              <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-800">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">Phone</h3>
                  <p className="text-body-color dark:text-body-color-dark">+1 (555) 000-0000</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-800">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">Email</h3>
                  <p className="text-body-color dark:text-body-color-dark">info@example.com</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-800 sm:col-span-2 lg:col-span-1">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">Location</h3>
                  <p className="text-body-color dark:text-body-color-dark">123 Business Street, New York, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
