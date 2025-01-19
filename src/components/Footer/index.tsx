"use client";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const footerLinks = {
    useful: [
      { href: '/blog', label: 'sections.footer.usefulLinks.blog' },
      { href: '/about', label: 'sections.footer.usefulLinks.about' },
      { href: '/contact', label: 'sections.footer.usefulLinks.contact' }
    ],
    legal: [
      { href: '/terms-of-service', label: 'sections.footer.terms.tos' },
      { href: '/privacy-policy', label: 'sections.footer.terms.privacyPolicy' },
      { href: '/refund-policy', label: 'sections.footer.terms.refundPolicy' }
    ],
    support: [
      { href: '/contact', label: 'sections.footer.support.ticket' },
      { href: '/terms-of-use', label: 'sections.footer.support.termsOfUse' },
      { href: '/about', label: 'sections.footer.support.about' }
    ]
  };

  return (
    <footer className="relative z-10 overflow-x-hidden bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8">
          {/* Social Media & Description */}
          <div className="mb-12 w-full lg:mb-0 lg:max-w-[400px]">
            <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
              Direct Academy
            </h2>
            <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
              {t('sections.footer.description')}
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://facebook.com/directacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary duration-300 hover:bg-primary hover:text-white dark:bg-primary/10"
              >
                <FaFacebookF className="h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/+994501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary duration-300 hover:bg-primary hover:text-white dark:bg-primary/10"
              >
                <FaWhatsapp className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/directacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary duration-300 hover:bg-primary hover:text-white dark:bg-primary/10"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Useful Links */}
            <div>
              <h2 className="mb-6 text-lg font-semibold text-black dark:text-white">
                {t('sections.footer.usefulLinks.title')}
              </h2>
              <ul className="space-y-3">
                {footerLinks.useful.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Terms */}
            <div>
              <h2 className="mb-6 text-lg font-semibold text-black dark:text-white">
                {t('sections.footer.terms.title')}
              </h2>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h2 className="mb-6 text-lg font-semibold text-black dark:text-white">
                {t('sections.footer.support.title')}
              </h2>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        <div className="py-8">
          <p className="text-center text-base text-body-color dark:text-body-color-dark">
            © {new Date().getFullYear()} Direct Academy. {t('sections.footer.credits.text')}
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-14 z-[-1]">
        <svg
          width="55"
          height="99"
          viewBox="0 0 55 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
          <mask
            id="mask0_94:899"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="99"
            height="99"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#4A6CF7" />
          </mask>
          <g mask="url(#mask0_94:899)">
            <circle
              opacity="0.8"
              cx="49.5"
              cy="49.5"
              r="49.5"
              fill="url(#paint0_radial_94:899)"
            />
            <g opacity="0.8" filter="url(#filter0_f_94:899)">
              <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_94:899"
              x="12.4852"
              y="-15.1763"
              width="82.7646"
              height="82.7646"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="10.5"
                result="effect1_foregroundBlur_94:899"
              />
            </filter>
            <radialGradient
              id="paint0_radial_94:899"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
            >
              <stop stopOpacity="0.47" />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
