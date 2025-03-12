"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Scroll işleyicisini optimize ettik
    let lastScroll = 0;
    const handleStickyNavbar = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 80) {
        setSticky(true);
      } else if (currentScroll < lastScroll && currentScroll <= 80) {
        setSticky(false);
      }
      lastScroll = currentScroll;
    };

    // Passive true ekleyerek scroll performansını artırdık
    window.addEventListener("scroll", handleStickyNavbar, { passive: true });
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  if (!mounted) return null;

  const menuItems = [
    { href: '/', label: t('menu.home') },
    { href: '/about', label: t('menu.about') },
    { href: '/blog', label: t('menu.blog') },
    { href: '/contact', label: t('menu.contact') },
  ];

  return (
    <>
      {/* Sayfa kaymasını önlemek için sabit yükseklikte bir placeholder */}
      <div className="h-16" />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 z-50 w-full bg-white transition-all duration-300 ${sticky
          ? "shadow-md backdrop-blur-sm bg-white/90 dark:bg-gray-900/90"
          : "bg-white dark:bg-gray-900"
          }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Direct Academy"
                  width={60}
                  height={60}
                  className="w-auto h-8 sm:h-10"
                />
              </Link>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <div className="hidden md:block w-px h-5 bg-gray-300 dark:bg-gray-700" />
              <ThemeToggler />

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <HiX className="block h-6 w-6" />
                ) : (
                  <HiMenu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${mobileMenuOpen ? 'block' : 'hidden'
              } md:hidden transition-all duration-300 ease-in-out`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 rounded-b-lg shadow-lg">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
