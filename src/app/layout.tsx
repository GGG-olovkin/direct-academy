"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "./providers";
import "../styles/index.css";
import { Suspense } from 'react';
import Loading from './loading';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="overflow-x-hidden min-h-screen flex flex-col">
        <Providers>
          <Header />
          <Suspense fallback={<Loading />}>
            <main className="flex-grow overflow-x-hidden">
              {children}
            </main>
          </Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
