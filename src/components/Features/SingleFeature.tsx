'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const { icon, title, paragraph } = feature;
  return (
    <div className="group relative rounded-lg bg-white p-8 shadow-one duration-300 hover:shadow-two dark:bg-dark dark:shadow-card dark:hover:shadow-gray-dark">
      <div className="absolute right-0 top-0 h-[120px] w-[120px] rounded-tr-lg bg-primary/5 transition-all duration-300 group-hover:bg-primary/10"></div>
      <div className="relative z-10">
        <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-lg bg-primary/5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
          {t(title)}
        </h3>
        <p className="text-body-color dark:text-body-color-dark pr-[10px]">
          {t(paragraph)}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
