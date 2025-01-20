'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Schedule {
    day: string;
    times: string[];
    levels: string[];
    course: string;
    description: string;
    instructor: string;
}

const CourseSchedule = () => {
    const t = useTranslations('schedule');
    const [selectedDay, setSelectedDay] = useState('monday');

    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    // Günlük programı al ve kontrol et
    const dailySchedule = t.raw(`schedule.${selectedDay}`) || [];

    return (
        <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

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

                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
                    {days.map((day) => (
                        <motion.button
                            key={day}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedDay(day)}
                            className={`p-4 rounded-xl ${selectedDay === day
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                                } transition-all duration-300`}
                        >
                            {t(`days.${day}`)}
                        </motion.button>
                    ))}
                </div>

                <motion.div
                    key={selectedDay}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {dailySchedule.map((session: Schedule) => (
                        <motion.div
                            key={`${session.course}-${session.times[0]}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-blue-400 font-semibold">
                                    {session.times?.[0] || ''}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-sm ${session.levels?.[0] === 'available'
                                        ? 'bg-green-500/20 text-green-400'
                                        : 'bg-red-500/20 text-red-400'
                                    }`}>
                                    {t(`availability.${session.levels?.[0] || 'unavailable'}`)}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {session.course || ''}
                            </h3>
                            <p className="text-gray-400 mb-4">
                                {session.description || ''}
                            </p>
                            <div className="flex items-center text-gray-300">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                {session.instructor || ''}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CourseSchedule; 