'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES, LANGUAGE_LABELS } from '../constants/languages';
import i18n from '../i18n/config';
import '../styles/LanguageSwitcher.css';

export const LanguageSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLanguage = LANGUAGE_LABELS[i18n.language as keyof typeof LANGUAGE_LABELS];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!mounted) {
    return null;
  }

  const changeLanguage = (language: string) => {
    void i18n.changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center space-x-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md hover:bg-gray-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm sm:text-base">{currentLanguage}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 sm:w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {Object.entries(LANGUAGE_LABELS).map(([code, label]) => (
              <button
                key={code}
                className={`block w-full text-left px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm ${code === i18n.language
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-50'
                  }`}
                onClick={() => changeLanguage(code)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 