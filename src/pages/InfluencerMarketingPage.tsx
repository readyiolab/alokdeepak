import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Megaphone, TrendingUp, Share2, Star, ArrowRight, Shield, Target, BarChart, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const InfluencerMarketingPage: React.FC = () => {
    const isMobile = React.useRef(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)).current;

    const fadeInUp = {
        initial: isMobile ? { opacity: 0 } : { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: isMobile ? 0.1 : 0.2 },
        transition: { duration: isMobile ? 0.4 : 0.6 },
    };

    const staggerContainer = {
        initial: {},
        whileInView: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        viewport: { once: true },
    };

    const services = [
        {
            id: 'talent-scouting',
            icon: <Users className="w-12 h-12 text-white" />,
            title: 'Talent Scouting',
            description: 'We identify and connect you with influencers who authentically align with your brand values and target audience.',
            benefits: ['Niche Alignment', 'Audience Vetting', 'Contract Negotiation', 'Relationship Building'],
        },
        {
            id: 'campaign-management',
            icon: <Megaphone className="w-12 h-12 text-white" />,
            title: 'Campaign Management',
            description: 'End-to-end execution of viral marketing sprints, from creative strategy to final reporting.',
            benefits: ['Strategy Development', 'Content Guidelines', 'Timeline Management', 'Performance Tracking'],
        },
        {
            id: 'influencer-growth',
            icon: <TrendingUp className="w-12 h-12 text-white" />,
            title: 'Influencer Growth',
            description: 'Helping creators scale their personal brands and monetize their audience effectively.',
            benefits: ['Brand Strategy', 'Monetization Models', 'Content Coaching', 'Audience Analytics'],
        },
        {
            id: 'content-distribution',
            icon: <Share2 className="w-12 h-12 text-white" />,
            title: 'Content Distribution',
            description: 'Making sure your brand is seen by the right eyes at the right time through strategic placement.',
            benefits: ['Multi-Platform Strategy', 'Viral Optimization', 'Social SEO', 'Cross-Promotion'],
        },
    ];

    const processSteps = [
        {
            id: 'discovery',
            step: '01',
            title: 'Discovery & Strategy',
            description: 'We analyze your brand goals and audience to craft a tailored influencer strategy.',
        },
        {
            id: 'selection',
            step: '02',
            title: 'Influencer Selection',
            description: ' rigorous vetting to find creators with high engagement and authentic voices.',
        },
        {
            id: 'execution',
            step: '03',
            title: 'Campaign Execution',
            description: 'Managing the workflow, content approval, and posting schedule for maximum impact.',
        },
        {
            id: 'analysis',
            step: '04',
            title: 'Analysis & Reporting',
            description: 'Detailed performance reports measuring reach, engagement, and ROI.',
        },
    ];

    return (
        <>
            <Helmet>
                <title>Influencer Marketing Agency in India – Scale Your Brand</title>
                <meta
                    name="description"
                    content="Looking for an influencer marketing agency in India? Sownmark Digital connects brands with top influencers to drive engagement and sales."
                />
                <meta
                    name="keywords"
                    content="influencer marketing agency India, social media influencers India, brand collaboration agency, digital influencer marketing, influencer outreach services"
                />
                <link rel="canonical" href="https://sownmark.com/influencer-marketing-agency" />
                <meta property="og:type" content="website" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Influencer Marketing",
                            "provider": {
                                "@type": "Organization",
                                "name": "Sownmark",
                                "url": "https://sownmark.com"
                            },
                            "areaServed": "Worldwide",
                            "description": "Premium influencer marketing services connecting brands with authentic voices to drive engagement.",
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Influencer Marketing Services",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Influencer Scouting"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Campaign Management"
                                        }
                                    }
                                ]
                            }
                        }
                    `}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section
                className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 sm:py-20 lg:py-24"
                style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2563eb 50%, #3b82f6 100%)' }}
            >
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_#60a5fa_0%,_transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#93c5fd_0%,_transparent_50%)]" />
                </div>

                <div className="container relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.div
                        initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: isMobile ? 0.5 : 0.8 }}
                        className="max-w-5xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-full mb-8 border border-white/20 shadow-lg"
                        >
                            <Star className="w-5 h-5 text-yellow-300 fill-current" />
                            <span className="text-sm font-medium tracking-wide">Social Authority</span>
                        </motion.div>

                        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                            Humanizing Your Brand Through
                            <span className="block bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mt-2">
                                Social Authority
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                            We connect brands with voices that matter, creating authentic connections that drive real results.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex group"
                        >
                            <Link
                                to="/contact#contact-form"
                                className="bg-white text-gray-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center shadow-xl"
                                aria-label="Start Influencer Campaign"
                            >
                                Start Your Campaign
                                <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Why Social Authority Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            The Power of
                            <span
                                className="block text-transparent bg-clip-text mt-2"
                                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
                            >
                                Authentic Connection
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            In a world of noise, trust is the currency. We help you leverage the trust influencers have built with their audience to instantly validate your brand.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Target className="w-8 h-8 text-blue-500" />, title: 'Precise Targeting', text: 'Reach the specific niches that matter to you.' },
                            { icon: <Shield className="w-8 h-8 text-blue-500" />, title: 'Brand Safety', text: 'Rigorous vetting to ensure brand alignment.' },
                            { icon: <BarChart className="w-8 h-8 text-blue-500" />, title: 'Measurable ROI', text: 'Track every click, impression, and conversion.' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                            >
                                <div className="mb-4 bg-blue-50 p-4 rounded-full">{item.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-16 lg:mb-20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Our Core
                            <span
                                className="block text-transparent bg-clip-text mt-2 pb-5"
                                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
                            >
                                Offerings
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive solutions to build your brand's social presence and authority.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
                    >
                        {services.map((service) => (
                            <motion.div key={service.id} variants={fadeInUp} className="group relative h-full">
                                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-blue-200 h-full flex flex-col">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative z-10 flex-1 flex flex-col">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                                            style={{ background: 'linear-gradient(135deg, #1a2957, #3b82f6, #60a5fa)' }}
                                        >
                                            {service.icon}
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 leading-tight">{service.title}</h3>
                                        <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed flex-1">{service.description}</p>
                                        <ul className="space-y-3">
                                            {service.benefits.map((benefit, benefitIndex) => (
                                                <li key={`${service.id}-benefit-${benefitIndex}`} className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                                                    <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex-shrink-0" />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 sm:py-20 lg:py-24" style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2563eb 100%)' }}>
                <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center mb-16 lg:mb-20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Our Campaign
                            <span className="block bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent mt-2">
                                Process
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            How we take your brand from unknown to unforgettable.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                    >
                        {processSteps.map((step) => (
                            <motion.div key={step.id} variants={fadeInUp} className="relative group h-full">
                                <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-white/10">
                                    <span className="absolute top-4 right-4 text-2xl sm:text-3xl font-bold text-blue-100/60 group-hover:text-blue-200 transition-colors">
                                        {step.step}
                                    </span>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 leading-tight pr-12">{step.title}</h3>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2563eb 50%, #3b82f6 100%)' }}
            >
                <div className="absolute inset-0 opacity-15">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_#60a5fa_0%,_transparent_50%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#93c5fd_0%,_transparent_50%)]"></div>
                </div>

                <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                            Ready to Amplify Your
                            <span className="block bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent mt-2">
                                Brand Voice?
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                            Partner with Sownmark to leverage the power of authentic influencer marketing.
                        </p>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                            <Link
                                to="/contact#contact-form"
                                className="bg-white text-gray-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 shadow-2xl"
                                aria-label="Schedule Influencer Consultation"
                            >
                                Let's Talk
                                <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default InfluencerMarketingPage;
