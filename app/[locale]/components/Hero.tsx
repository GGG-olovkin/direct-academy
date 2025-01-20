'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
    const t = useTranslations('hero');

    const stats = [
        { id: 1, value: '2500+', label: t('stats.students') },
        { id: 2, value: '15+', label: t('stats.courses') },
        { id: 3, value: '25+', label: t('stats.teachers') },
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
            {/* Overlay Pattern */}
            <div className="absolute inset-0  opacity-10"></div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <h2 className="text-blue-400 font-semibold text-lg">
                                {t('subtitle')}
                            </h2>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                {t('title')}
                            </h1>
                            <p className="text-gray-300 text-lg md:text-xl max-w-xl">
                                {t('description')}
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link
                                    href="/courses"
                                    className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/30"
                                >
                                    {t('cta.primary')}
                                </Link>
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-200"
                                >
                                    {t('cta.secondary')}
                                </Link>
                            </div>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="grid grid-cols-3 gap-8 mt-16"
                        >
                            {stats.map((stat) => (
                                <div key={stat.id} className="text-center">
                                    <div className="text-3xl font-bold text-blue-400">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-400 mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Content - Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative lg:block"
                    >
                        <div className="relative h-[600px] w-full">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl"></div>
                            <Image
                                src="/bg.jpg"
                                alt="Language Learning"
                                fill
                                className="object-cover rounded-3xl shadow-2xl"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        </div>
    );
};

export default Hero; 