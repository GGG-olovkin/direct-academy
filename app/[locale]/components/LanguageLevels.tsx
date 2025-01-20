'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';

const LanguageLevels = () => {
    const t = useTranslations('languageLevels');
    const [activeLevel, setActiveLevel] = useState('B2');

    const levels = [
        { id: 'A1', color: 'from-blue-400 to-blue-500' },
        { id: 'A2', color: 'from-green-400 to-green-500' },
        { id: 'B1', color: 'from-yellow-400 to-yellow-500' },
        { id: 'B2', color: 'from-orange-400 to-orange-500' },
        { id: 'C1', color: 'from-red-400 to-red-500' },
        { id: 'C2', color: 'from-purple-400 to-purple-500' },
    ];

    return (
        <section className="py-24 bg-gray-900 relative overflow-hidden">
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
                        className="text-xl text-gray-400 max-w-3xl mx-auto"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
                    {levels.map((level) => (
                        <motion.button
                            key={level.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveLevel(level.id)}
                            className={`relative p-6 rounded-xl bg-gradient-to-br ${level.color} 
                                ${activeLevel === level.id ? 'ring-2 ring-white' : 'opacity-70'}
                                transition-all duration-300`}
                        >
                            <span className="text-2xl font-bold text-white">{level.id}</span>
                        </motion.button>
                    ))}
                </div>

                <motion.div
                    key={activeLevel}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">
                        {t(`levels.${activeLevel}.title`)}
                    </h3>
                    <p className="text-gray-300 mb-6">
                        {t(`levels.${activeLevel}.description`)}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {['speaking', 'writing', 'listening'].map((skill) => (
                            <div key={skill} className="bg-gray-700/50 rounded-xl p-6">
                                <h4 className="text-lg font-semibold text-white mb-2">
                                    {t(`skills.${skill}`)}
                                </h4>
                                <p className="text-gray-400">
                                    {t(`levels.${activeLevel}.${skill}`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LanguageLevels; 