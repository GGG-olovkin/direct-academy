'use client';

import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

interface Review {
  id: string;
  name: string;
  image: string;
  content: string;
  designation: string;
  star: number;
}

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ review }: { review: Review }) => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const { star, name, image, content, designation } = review;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="w-full">
      <div className="rounded-lg bg-white p-8 shadow-testimonial dark:bg-dark lg:px-5 xl:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative mr-4 h-[50px] w-[50px] overflow-hidden rounded-full">
              <Image src={image} alt="author" fill />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dark dark:text-white">
                {name}
              </h3>
              <p className="text-sm text-body-color">{designation}</p>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            {ratingIcons}
          </div>
        </div>

        <p className="mt-4 text-base text-body-color dark:text-dark-6">
          &ldquo;{content}&rdquo;
        </p>
      </div>
    </div>
  );
};

export default SingleTestimonial;
