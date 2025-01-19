'use client';

import { useTranslation } from 'react-i18next';

export default function TermsOfService() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{t('pages.terms.title')}</h1>
      <div className="prose dark:prose-invert max-w-none">
        {t('pages.terms.content')}
      </div>
    </div>
  );
} 