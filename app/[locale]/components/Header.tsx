'use client';
import { useState } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
    const t = useTranslations('header');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const languages = [
        { code: 'az', name: 'Azərbaycan', flag: '🇦🇿' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
    ];

    const getCurrentLanguage = () => {
        const currentLocale = pathname.split('/')[1];
        return languages.find(lang => lang.code === currentLocale) || languages[0];
    };

    const handleLanguageChange = (locale: string) => {
        const segments = pathname.split('/');
        segments[1] = locale;
        router.push(segments.join('/'));
        setIsLangMenuOpen(false);
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed w-full top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image src="/logo.svg" alt="Direct Academy" width={80} height={48} priority className="brightness-0 invert" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {[
                            { href: '/', label: t('home') },
                            { href: '/courses', label: t('courses') },
                            { href: '/about', label: t('about') },
                            { href: '/contact', label: t('contact') },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200
                                    ${pathname === link.href ? 'bg-white/10 text-white' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Language Selector */}
                        <div className="relative ml-2">
                            <button
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                            >
                                <span className="text-xl">{getCurrentLanguage().flag}</span>
                                <span>{getCurrentLanguage().name}</span>
                                <svg
                                    className={`w-4 h-4 ml-1 transform transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isLangMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-xl border border-gray-800 shadow-xl">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => handleLanguageChange(lang.code)}
                                            className={`flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-white/10 transition-all duration-200
                                                ${getCurrentLanguage().code === lang.code ? 'bg-white/10 text-white' : 'text-gray-300'}`}
                                        >
                                            <span className="text-xl">{lang.flag}</span>
                                            <span>{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-800">
                        <div className="flex flex-col space-y-2">
                            {[
                                { href: '/', label: t('home') },
                                { href: '/courses', label: t('courses') },
                                { href: '/about', label: t('about') },
                                { href: '/contact', label: t('contact') },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200
                                        ${pathname === link.href ? 'bg-white/10 text-white' : ''}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            {/* Mobile Language Options */}
                            <div className="pt-2 border-t border-gray-800 mt-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => handleLanguageChange(lang.code)}
                                        className={`flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-white/10 transition-all duration-200
                                            ${getCurrentLanguage().code === lang.code ? 'bg-white/10 text-white' : 'text-gray-300'}`}
                                    >
                                        <span className="text-xl">{lang.flag}</span>
                                        <span>{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header; 