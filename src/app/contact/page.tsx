'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Breadcrumb
        pageName={t('sections.contact.breadcrumb.title')}
        description={t('sections.contact.breadcrumb.description')}
      />
      <Contact />
    </>
  );
};

export default ContactPage;
