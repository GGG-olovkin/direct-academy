'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

interface Language {
    id: string;
    name: string;
    description: string;
    image: string;
    levels: string[];
}

interface Feature {
    title: string;
    description: string;
    icon: string;
}

interface TranslationFunction {
    (key: string): string;
    raw: (key: string) => Array<Language | Feature>;
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

// Optimize edilmiş bileşenler
const LanguageCard = memo(({ language, t }: { language: Language, t: TranslationFunction }) => (
    <motion.div
        key={language.id}
        variants={itemVariants}
        className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
    >
        <div className="relative h-48">
            <Image
                src={language.image}
                alt={language.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                loading="eager"
                priority={true}
            />
        </div>
        <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-3">
                {language.name}
            </h3>
            <p className="text-gray-300 mb-4">
                {language.description}
            </p>
            <div className="space-y-2">
                {language.levels.map((level: string) => (
                    <div
                        key={level}
                        className="bg-gray-700/50 px-3 py-2 rounded-lg text-gray-300"
                    >
                        {t(`levels.${level}`)}
                    </div>
                ))}
            </div>
            <Link
                href={`/courses/${language.id}`}
                className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
                {t('viewDetails')}
            </Link>
        </div>
    </motion.div>
));
LanguageCard.displayName = 'LanguageCard';

const FeatureCard = memo(({ feature }: { feature: Feature }) => (
    <motion.div
        key={feature.title}
        variants={itemVariants}
        className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6"
    >
        <div className="text-blue-400 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
            </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
            {feature.title}
        </h3>
        <p className="text-gray-400">
            {feature.description}
        </p>
    </motion.div>
));
FeatureCard.displayName = 'FeatureCard';

// Ana bileşen
const CoursesPage = () => {
    const t = useTranslations('courses');

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <main className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-16">
                <div className="text-center max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        {t('hero.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300"
                    >
                        {t('hero.description')}
                    </motion.p>
                </div>
            </section>

            {/* Language Categories */}
            <section className="container mx-auto px-4 mb-16">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {t.raw('languages').map((language: Language) => (
                        <LanguageCard key={language.id} language={language} t={t} />
                    ))}
                </motion.div>
            </section>

            {/* Features */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        {t('features.title')}
                    </h2>
                    <p className="text-gray-300">
                        {t('features.subtitle')}
                    </p>
                </div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {t.raw('features.items').map((feature: Feature) => (
                        <FeatureCard key={feature.title} feature={feature} />
                    ))}
                </motion.div>
            </section>
        </main>
    );
};

export default memo(CoursesPage); 