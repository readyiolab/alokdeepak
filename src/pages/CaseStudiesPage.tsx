import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Smartphone, MapPin, Globe, Star, TrendingUp, Users } from 'lucide-react';
import { Helmet } from 'react-helmet';

const CaseStudiesPage: React.FC = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6 },
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

    return (
        <>
            <Helmet>
                <title>Case Studies | Web Development & SEO Results | Sownmark</title>
                <meta
                    name="description"
                    content="See how Sownmark helps brands in India, USA, Canada, and Dubai scale. From LB Interiors to global service brands, we deliver guaranteed SEO and high-performance websites."
                />
                <meta
                    name="keywords"
                    content="Sownmark case studies, local SEO results, real estate marketing success, global digital agency results, web development portfolio"
                />
                <link rel="canonical" href="https://sownmark.com/case-studies" />
                <meta property="og:title" content="Case Studies | Web Development & SEO Results | Sownmark" />
                <meta property="og:description" content="See how Sownmark helps brands in India, USA, Canada, and Dubai scale. From LB Interiors to global service brands, we deliver guaranteed SEO and high-performance websites." />
                <meta property="og:url" content="https://sownmark.com/case-studies" />
                <meta property="og:type" content="website" />
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
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-full mb-8 border border-white/20 shadow-lg"
                        >
                            <Trophy className="w-5 h-5 text-yellow-300 fill-current" />
                            <span className="text-sm font-medium tracking-wide">Proven Results</span>
                        </motion.div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                            How Sownmark
                            <span className="block bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent mt-2">
                                Scales Global Brands
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                            From struggling startups to market leaders—discover how our Web Development and Digital Marketing strategies drive real revenue.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Case Study 1: LB Interiors */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                    >
                        <motion.div variants={fadeInUp}>
                            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full font-semibold text-sm mb-6"> Case Study 1</div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Luxury Transformation for LB Interiors
                            </h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-red-500 mb-3 flex items-center gap-2">
                                        <TrendingUp className="w-5 h-5 rotate-180" /> The Challenge
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        LB Interiors came to us with a "broken" digital presence. Their website was outdated, visually unappealing, and completely invisible on search engines. With zero SEO and zero customer interaction, they were losing high-end design projects to competitors every day.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-600 mb-3 flex items-center gap-2">
                                        <Star className="w-5 h-5" /> The Sownmark Solution
                                    </h3>
                                    <ul className="space-y-4 text-gray-600">
                                        <li className="flex gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" />
                                            <span><strong>High-End Web Redesign:</strong> We built a premium, portfolio-centric website that reflects the quality of their interior work.</span>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" />
                                            <span><strong>SEO Groundwork:</strong> Implemented a "Local Luxury" SEO strategy to target high-budget homeowners.</span>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" />
                                            <span><strong>Performance Marketing:</strong> Launched targeted Meta and Google Ads campaigns to capture immediate leads for large-scale renovation projects.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="bg-gray-50 p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 relative z-10">The Result</h3>
                            <div className="grid gap-6 relative z-10">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">#1</div>
                                    <div className="text-gray-600 font-medium">Dominates local search results</div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                                    <div className="text-4xl font-bold text-green-500 mb-2">100%</div>
                                    <div className="text-gray-600 font-medium">Shift from zero inquiries to consistent organic leads</div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                                    <div className="text-4xl font-bold text-indigo-600 mb-2">High Ticket</div>
                                    <div className="text-gray-600 font-medium">Consistent high-value projects through paid funnels</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Case Study 2: Dominating Local Service Market */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="order-2 lg:order-1 bg-white p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-64 h-64 bg-green-100/50 rounded-full blur-3xl -ml-32 -mt-32"></div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-8 relative z-10">The Result</h3>
                            <div className="grid gap-6 relative z-10">
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 transform hover:scale-105 transition-transform duration-300">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">#1 Rank</div>
                                    <div className="text-gray-600 font-medium">In Google Map Pack & Organic Search</div>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 transform hover:scale-105 transition-transform duration-300">
                                    <div className="text-4xl font-bold text-green-500 mb-2">Daily</div>
                                    <div className="text-gray-600 font-medium">Converted leads every single day</div>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 transform hover:scale-105 transition-transform duration-300">
                                    <div className="text-4xl font-bold text-indigo-600 mb-2">Growth</div>
                                    <div className="text-gray-600 font-medium">Consistent revenue growth & long-term partnership</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="order-1 lg:order-2">
                            <div className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full font-semibold text-sm mb-6">Case Study 2</div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Dominating the Local Service Market (Urban Company Model)
                            </h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-red-500 mb-3 flex items-center gap-2">
                                        <TrendingUp className="w-5 h-5 rotate-180" /> The Challenge
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        A referral-based client in the home services sector needed to compete with giants like Urban Company. They had the service quality but lacked the digital infrastructure to capture the massive demand for on-demand home care.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-600 mb-3 flex items-center gap-2">
                                        <Star className="w-5 h-5" /> The Sownmark Solution
                                    </h3>
                                    <ul className="space-y-4 text-gray-600">
                                        <li className="flex gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" />
                                            <span><strong>Conversion-First Development:</strong> Built a fast, mobile-friendly booking platform.</span>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" />
                                            <span><strong>GMB & Search Dominance:</strong> Optimized their Google My Business (GMB) profile and local citations.</span>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 flex-shrink-0" />
                                            <span><strong>The Lead Machine:</strong> Integrated Google Local Service Ads with our SEO strategy.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Local Impact */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
                    <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 font-medium text-sm mb-6">
                            <MapPin className="w-4 h-4" /> Local Heroes
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Local Impact: Salon, Automotive, and Retail
                        </h2>
                        <p className="text-lg text-gray-600">
                            We don’t just work with big agencies; we help local heroes win.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-lg"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Automotive (Cars & Bikes)</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We helped local showrooms digitize their inventory, leading to a <span className="font-bold text-blue-600">40% increase</span> in test-drive bookings.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-lg"
                        >
                            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                                <Star className="w-6 h-6 text-pink-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Beauty & Wellness</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our Salon clients have seen their chairs filled through targeted "Near Me" SEO and Instagram growth strategies.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Global Growth */}
            <section className="py-16 sm:py-20 lg:py-24 bg-[#1a2957] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')]"></div>
                <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                    >
                        <motion.div variants={fadeInUp}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-blue-200 font-medium text-sm mb-6 border border-white/20">
                                <Globe className="w-4 h-4" /> Global Reach
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Sownmark Without Borders: <br />
                                <span className="text-blue-400">Global Growth</span>
                            </h2>
                            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                                Our expertise isn't limited by geography. Sownmark operates as a "Zero to Hero" partner for businesses across the USA, Canada, Australia, and Dubai.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    { title: "Market Entry", desc: "Building high-performance brands from scratch for international markets." },
                                    { title: "Global SEO", desc: "Ranking businesses in highly competitive cities like New York, Toronto, Sydney, and Dubai." },
                                    { title: "Scalable Ads", desc: "Managing cross-border digital marketing campaigns that respect local culture while driving global sales." }
                                ].map((item, index) => (
                                    <li key={index} className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-400/30">
                                            <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                            <p className="text-blue-200 text-sm">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="relative">
                            <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-[100px]"></div>
                            <img
                                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2072&auto=format&fit=crop"
                                alt="Global Growth"
                                className="rounded-3xl shadow-2xl border border-white/10 relative z-10 opacity-90"
                            />
                        </motion.div>
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
                            Ready to be our
                            <span className="block bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent mt-2">
                                next success story?

                            </span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                            Stop settling for a website that just sits there. Let Sownmark build you a revenue-generating machine.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group h-full">
                                <Link
                                    to="/contact#contact-form"
                                    className="bg-white text-gray-900 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 min-w-[250px] justify-center w-full sm:w-auto shadow-2xl"
                                    aria-label="Schedule a Free Website Consultation with Sownmark"
                                >
                                    Get Your Free Growth Audit
                                    <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group h-full">
                                <Link
                                    to="/about"
                                    className="bg-transparent border-2 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold text-base sm:text-lg border-white hover:bg-white hover:text-gray-600 transition-all duration-300 min-w-[250px] flex items-center w-full sm:w-auto justify-center"
                                    aria-label="Learn More About Sownmark's Web Development Services"
                                >
                                    Learn More
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default CaseStudiesPage;
