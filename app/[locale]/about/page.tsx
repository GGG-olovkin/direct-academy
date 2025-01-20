'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Tip tanımlamaları
interface TeamMember {
    name: string;
    role: string;
    description: string;
    image: string;
}

interface ValueItem {
    title: string;
    description: string;
    icon: string;
}

const AboutPage = () => {
    const t = useTranslations('about');

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
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

            {/* Story Section */}
            <section className="container mx-auto px-4 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">
                            {t('story.title')}
                        </h2>
                        <div className="space-y-4 text-gray-300">
                            {t.raw('story.paragraphs').map((paragraph: string, index: number) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden"
                    >
                        <Image
                            src="/about.jpg"
                            alt="Our Story"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="container mx-auto px-4 mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        {t('values.title')}
                    </h2>
                    <p className="text-gray-300">
                        {t('values.subtitle')}
                    </p>
                </div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {t.raw('values.items').map((value: ValueItem) => (
                        <motion.div
                            key={value.title}
                            variants={itemVariants}
                            className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6"
                        >
                            <div className="text-blue-400 mb-4">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={value.icon} />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {value.title}
                            </h3>
                            <p className="text-gray-400">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Team Section */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        {t('team.title')}
                    </h2>
                    <p className="text-gray-300">
                        {t('team.subtitle')}
                    </p>
                </div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {t.raw('team.members').map((member: TeamMember) => (
                        <motion.div
                            key={member.name}
                            variants={itemVariants}
                            className="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden"
                        >
                            <div className="relative h-64">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-blue-400 mb-3">
                                    {member.role}
                                </p>
                                <p className="text-gray-400">
                                    {member.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </main>
    );
};

export default AboutPage; 