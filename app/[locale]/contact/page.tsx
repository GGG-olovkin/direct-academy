'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactPage = () => {
    const t = useTranslations('contact');
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('sending');

        // Burada form gönderme işlemi simüle edilmiştir
        setTimeout(() => {
            setFormStatus('success');
            (e.target as HTMLFormElement).reset();
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1000);
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

            {/* Contact Form & Info Section */}
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">
                            {t('form.title')}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-300 mb-2">
                                    {t('form.name')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder={t('form.namePlaceholder')}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-300 mb-2">
                                    {t('form.email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder={t('form.emailPlaceholder')}
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-gray-300 mb-2">
                                    {t('form.subject')}
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder={t('form.subjectPlaceholder')}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-300 mb-2">
                                    {t('form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder={t('form.messagePlaceholder')}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={formStatus === 'sending'}
                                className={`w-full px-6 py-3 rounded-lg text-white font-semibold transition-all duration-200
                                    ${formStatus === 'sending'
                                        ? 'bg-gray-600 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-700'}`}
                            >
                                {formStatus === 'sending' ? t('form.sending') : t('form.submit')}
                            </button>
                            {formStatus === 'success' && (
                                <div className="text-green-400 text-center">
                                    {t('form.success')}
                                </div>
                            )}
                            {formStatus === 'error' && (
                                <div className="text-red-400 text-center">
                                    {t('form.error')}
                                </div>
                            )}
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        {/* Address */}
                        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6">
                            <div className="flex items-start">
                                <div className="text-blue-400 mr-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{t('info.address.title')}</h3>
                                    <p className="text-gray-300">{t('info.address.value')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6">
                            <div className="flex items-start">
                                <div className="text-blue-400 mr-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{t('info.phone.title')}</h3>
                                    <p className="text-gray-300">{t('info.phone.value')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6">
                            <div className="flex items-start">
                                <div className="text-blue-400 mr-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{t('info.email.title')}</h3>
                                    <p className="text-gray-300">{t('info.email.value')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6">
                            <div className="flex items-start">
                                <div className="text-blue-400 mr-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{t('info.hours.title')}</h3>
                                    <p className="text-gray-300">{t('info.hours.value')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default ContactPage; 