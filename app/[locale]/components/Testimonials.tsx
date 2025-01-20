'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

type Testimonial = {
    name: string;
    role: string;
    image: string;
    text: string;
}

const Testimonials = () => {
    const t = useTranslations('testimonials');
    const testimonials = t.raw('items');
    const [activeIndex, setActiveIndex] = useState(0);

    // Otomatik geçiş için
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 5000); // Her 5 saniyede bir değişir

        return () => clearInterval(timer);
    }, [testimonials.length]);

    const handlePrevious = () => {
        setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
    };

    return (
        <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        {t('title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-gray-300"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 md:p-12"
                            >
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                                        <Image
                                            src={testimonials[activeIndex].image}
                                            alt={testimonials[activeIndex].name}
                                            fill
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-lg md:text-xl mb-6 italic">
                                            &ldquo;{testimonials[activeIndex].text}&rdquo;
                                        </p>
                                        <div>
                                            <h4 className="text-white font-semibold text-lg">
                                                {testimonials[activeIndex].name}
                                            </h4>
                                            <p className="text-blue-400">
                                                {testimonials[activeIndex].role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:-mx-12">
                            <button
                                onClick={handlePrevious}
                                className="p-2 rounded-full bg-gray-800/50 text-white hover:bg-gray-700 transition-colors"
                                aria-label="Previous testimonial"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="p-2 rounded-full bg-gray-800/50 text-white hover:bg-gray-700 transition-colors"
                                aria-label="Next testimonial"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center space-x-2 mt-8">
                            {testimonials.map((_: Testimonial, index: number) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 
                                        ${activeIndex === index
                                            ? 'bg-blue-500 w-6'
                                            : 'bg-gray-600 hover:bg-gray-500'}`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 