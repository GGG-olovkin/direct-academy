import './globals.css'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from './components/Header';
import Footer from './components/Footer'

interface LayoutProps {
  children: React.ReactNode;
  params: {
    locale: "az" | "en" | "de";
  };
}

export default async function LocaleLayout({
  children,
  params
}: LayoutProps) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}