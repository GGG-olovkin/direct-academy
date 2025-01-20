import './globals.css'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Header from './components/Header';
import Footer from './components/Footer'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { createTranslator } from 'next-intl';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

type Locale = 'en' | 'de' | 'az';

const isValidLocale = (locale: string): locale is Locale => {
  return ['en', 'de', 'az'].includes(locale);
};

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  if (!isValidLocale(locale)) {
    notFound();
  }

  try {
    const messages = (await import(`../../messages/${locale}.json`)).default;
    const t = createTranslator({ locale, messages });

    return {
      title: {
        template: '%s | Direct Academy',
        default: 'Direct Academy - Professional Language School',
      },
      description: t('hero.description'),
      keywords: ['language school', 'english courses', 'german courses', 'french courses', 'baku', 'azerbaijan'],
      metadataBase: new URL('https://directacademy.az'),
      alternates: {
        canonical: '/',
        languages: {
          'en': '/en',
          'de': '/de',
          'az': '/az',
        },
      },
    };
  } catch {
    return {
      title: 'Direct Academy',
      description: 'Professional Language School in Baku',
    };
  }
}

async function loadMessages(locale: Locale) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = await loadMessages(locale);

  return (
    <html lang={locale} className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}