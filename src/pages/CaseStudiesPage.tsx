import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Target, Globe, Star, TrendingUp, Users, Code, Zap, BarChart3, ShieldCheck, Wrench, Smile, Home, Building2, Scale } from 'lucide-react';
import { Helmet } from 'react-helmet';

const CaseStudiesPage: React.FC = () => {
    const isMobile = React.useRef(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)).current;

    const fadeInUp = {
        initial: isMobile ? { opacity: 0 } : { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: isMobile ? 0.1 : 0.2 },
        transition: { duration: isMobile ? 0.4 : 0.6 },
    };

    const categories = [
        {
            title: "Performance Marketing & SEO Branding",
            description: "Scaling high-end brands with technical precision.",
            studies: [
                {
                    id: "shina-kaur",
                    name: "Shina Kaur",
                    headline: "Scaling Shina Kaur: 100% SEO-Friendly Branding & Performance Marketing.",
                    challenge: "Establishing a digital footprint that balances high-end branding with technical performance.",
                    solution: ["Development of a 100% User-Friendly UI/UX.", "Performance Marketing strategy utilizing Meta Ads & Google Ads."],
                    result: "Increased revenue through high-intent lead generation.",
                    icon: <Target className="w-6 h-6" />,
                    color: "blue"
                },
                {
                    id: "singh-karman",
                    name: "Singh Karman",
                    headline: "Singh Karman Branding: A Roadmap to Revenue Growth.",
                    challenge: "Modernizing the brand while maintaining SEO integrity.",
                    solution: ["Full-site audit and rebuild for 100% SEO compliance."],
                    result: "Boosted brand authority and organic visibility.",
                    icon: <Star className="w-6 h-6" />,
                    color: "indigo"
                }
            ]
        },
        {
            title: "Start-up & Business Growth Portfolio",
            description: "Zero-to-One development and Member Onboarding.",
            studies: [
                {
                    id: "freedom-mergers",
                    name: "Freedom Mergers",
                    headline: "Building Freedom Mergers: Connecting Founders via Custom Development.",
                    challenge: "Creating a platform from scratch that fosters founder-to-founder connections.",
                    solution: ["Custom web architecture + strategic marketing to drive B2B results."],
                    result: "Connecting high-value founders globally through seamless UX.",
                    icon: <Globe className="w-6 h-6" />,
                    color: "purple"
                },
                {
                    id: "igrow-big",
                    name: "iGrow Big",
                    headline: "iGrow Big: Executing the Earning Journey for New Members.",
                    challenge: "Onboarding members into a revenue-generating ecosystem.",
                    solution: ["Development from scratch with a focus on branding and user-retention flows."],
                    result: "Simplified member journey leading to significant recurring revenue.",
                    icon: <TrendingUp className="w-6 h-6" />,
                    color: "green"
                }
            ]
        },
        {
            title: "The Delta Ecosystem",
            description: "Full-service execution for the Delta Brand.",
            studies: [
                {
                    id: "delta-lms",
                    name: "Delta LMS",
                    headline: "Streamlining Education: User-Friendly Learning Management Systems.",
                    challenge: "Building a high-performance LMS interface from scratch.",
                    solution: ["Full custom development concentrating on 100% user-friendly UI."],
                    result: "High-performance learning experience for thousands of users.",
                    icon: <Users className="w-6 h-6" />,
                    color: "orange"
                },
                {
                    id: "delta-web",
                    name: "Delta Web Service",
                    headline: "B2B Service Excellence: Branding the Future of Web Services.",
                    challenge: "Marketing and branding strategies to position Delta as a service leader.",
                    solution: ["Full-funnel branding and performance marketing strategies."],
                    result: "Positioned as a leader in B2B service excellence.",
                    icon: <Zap className="w-6 h-6" />,
                    color: "cyan"
                },
                {
                    id: "delta-view",
                    name: "Delta View",
                    headline: "Data Visibility: 100% User-Friendly Analytics Dashboard.",
                    challenge: "UX/UI design centered on visual data representation.",
                    solution: ["Custom analytics dashboard with a focus on clarity and speed."],
                    result: "Enhanced data visibility for informed decision making.",
                    icon: <BarChart3 className="w-6 h-6" />,
                    color: "rose"
                }
            ]
        },
        {
            title: "High-Performance Tech & Fintech",
            description: "Logic, Profit, and Speed.",
            studies: [
                {
                    id: "arbilo",
                    name: "Arbilo",
                    headline: "Crypto Arbitrage from Scratch: Automated Profit via Pine Script.",
                    challenge: "Developing a reliable signal-based subscription platform.",
                    solution: ["Integrated Pine Script for guaranteed signal accuracy and automated profit tracking."],
                    result: "Reliable automated signals leading to consistent subscriber growth.",
                    icon: <Code className="w-6 h-6" />,
                    color: "amber"
                },
                {
                    id: "zuvigo",
                    name: "Zuvigo",
                    headline: "Road to $100K: Reaching Six Figures in 6 Months.",
                    challenge: "Rapid scaling from zero to $100,000 in revenue.",
                    solution: ["Aggressive client onboarding systems combined with full-stack web development."],
                    result: "Accomplished $100k revenue milestone in 4–6 months.",
                    icon: <ShieldCheck className="w-6 h-6" />,
                    color: "emerald"
                }
            ]
        },
        {
            title: "🇦🇺 Australian Service Sector",
            description: "Local SEO & Lead Gen",
            studies: [
                {
                    id: "professional-plumbing",
                    name: "The Local Plumber",
                    headline: "High-Intent Lead Generation for Professional Plumbing Solutions",
                    challenge: "High competition in local search and a high cost-per-click (CPC) on ads in Sydney/Melbourne markets.",
                    solution: [
                        "Optimized 'Emergency' landing pages for mobile users.",
                        "Local SEO: Claimed and optimized Google Business Profile for the 'Map Pack' top 3.",
                        "Geo-Targeting: Meta Ads targeting homeowners within a 15km radius of the service area."
                    ],
                    result: "100% increase in 'Call Now' clicks and a 40% reduction in lead acquisition cost.",
                    icon: <Wrench className="w-6 h-6" />,
                    color: "blue"
                },
                {
                    id: "bright-smile-dental",
                    name: "The Modern Dentist",
                    headline: "High-Conversion Patient Booking for Bright Smile Dental Clinic",
                    challenge: "A slow, outdated website that wasn't converting traffic into appointments in Brisbane/Perth.",
                    solution: [
                        "Developed a 100% user-friendly website with an integrated 24/7 booking system.",
                        "SEO: Ranked for 'Dentist near me' and specific treatments (Invisalign, Teeth Whitening).",
                        "Performance Marketing: Google Search Ads for high-value cosmetic dentistry services."
                    ],
                    result: "3x increase in monthly online bookings and 100% SEO-friendly site health score.",
                    icon: <Smile className="w-6 h-6" />,
                    color: "teal"
                },
                {
                    id: "elite-realty",
                    name: "Elite Realty Group",
                    headline: "Luxury Listings & Branding for Elite Realty Group",
                    challenge: "Capturing high-quality seller leads in a crowded real estate market in Gold Coast/Sydney.",
                    solution: [
                        "Premium UI/UX design featuring high-resolution video tours and interactive maps.",
                        "Branding: Positioned the agency as local market experts through blog content.",
                        "Meta Ads: Retargeting users who viewed specific property listings to keep the brand top-of-mind."
                    ],
                    result: "50% growth in property listings within 4 months and a massive boost in brand authority.",
                    icon: <Home className="w-6 h-6" />,
                    color: "violet"
                }
            ]
        },
        {
            title: "🇺🇸 USA High-Growth Markets",
            description: "Technical SEO & Revenue",
            studies: [
                {
                    id: "premier-home-security",
                    name: "Premier Home Security",
                    headline: "National Reach for Premier Home Security Systems",
                    challenge: "Ranking on the first page of Google in a high-stakes, national-level industry in Dallas/Los Angeles.",
                    solution: [
                        "Built a robust technical architecture to handle high traffic.",
                        "Content Strategy: Long-form SEO guides on 'Home Safety' to build 'EEAT' (Experience, Expertise, Authoritativeness, Trust).",
                        "Google Ads: Targeted high-intent keywords like 'Best home security 2026'."
                    ],
                    result: "Reached Top 3 rankings for 50+ high-volume keywords and doubled monthly revenue.",
                    icon: <Building2 className="w-6 h-6" />,
                    color: "red"
                },
                {
                    id: "lexington-law",
                    name: "Lexington Law Partners",
                    headline: "Trust & Conversion for US Legal/Professional Services",
                    challenge: "A 'cold' website that didn't build enough trust to convert visitors into legal clients in New York/Chicago.",
                    solution: [
                        "Designed a 100% user-friendly interface focused on 'Trust Signals' (Client testimonials, case wins).",
                        "Performance Marketing: Precision-targeted Google Ads focusing on 'Free Consultation' leads.",
                        "Conversion Rate Optimization (CRO): Optimized contact forms to ensure zero friction for mobile users."
                    ],
                    result: "$250k+ in generated revenue within the first 6 months of the partnership.",
                    icon: <Scale className="w-6 h-6" />,
                    color: "slate"
                }
            ]
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>Success Stories | Case Studies | Sownmark</title>
                <meta name="description" content="Explore how Sownmark scales global brands across Australia and USA, from Fintech arbitrage platforms to B2B service leaders, local SEO, and high-end branding solutions." />
                <link rel="canonical" href="https://sownmark.com/case-studies" />
                <meta property="og:title" content="Success Stories | Case Studies | Sownmark" />
                <meta property="og:description" content="Explore how Sownmark scales global brands across Australia and USA, from Fintech arbitrage platforms to B2B service leaders, local SEO, and high-end branding solutions." />
                <meta property="og:url" content="https://sownmark.com/case-studies" />
                <meta property="og:type" content="website" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            "name": "Sownmark Case Studies",
                            "description": "A collection of success stories across digital marketing, web development, and business growth.",
                            "publisher": {
                                "@type": "Organization",
                                "name": "Sownmark",
                                "url": "https://sownmark.com"
                            },
                            "mainEntity": {
                                "@type": "ItemList",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Shina Kaur Branding & Performance Marketing"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "Singh Karman SEO Roadmap"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": "Arbilo Crypto Arbitrage Platform"
                                    }
                                ]
                            }
                        }
                    `}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#1a2957] overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3b82f6_0%,transparent_50%)]" />
                </div>

                <div className="container max-w-7xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={isMobile ? { opacity: 0 } : { opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
                            <Trophy className="w-4 h-4 text-yellow-400" />
                            <span className="text-white text-xs font-bold tracking-widest uppercase">Success Driven</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                            The Sownmark <br />
                            <span className="text-blue-400">Proof of Concept</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                            Discover how we've scaled businesses from zero to high-revenue milestones across Australia and USA through custom dev, technical SEO, local lead generation, and aggressive marketing strategies.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Case Studies Loop */}
            {categories.map((cat, idx) => (
                <section key={idx} className={`py-20 lg:py-32 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <div className="container max-w-7xl mx-auto px-4">
                        <motion.div {...fadeInUp} className="mb-16 lg:mb-24">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2957] mb-4">{cat.title}</h2>
                            <p className="text-gray-500 font-medium tracking-wide uppercase text-sm">{cat.description}</p>
                            <div className="h-1 w-20 bg-blue-500 mt-6" />
                        </motion.div>

                        <div className="space-y-32">
                            {cat.studies.map((study, studyIdx) => (
                                <motion.div
                                    key={studyIdx}
                                    initial="initial"
                                    whileInView="whileInView"
                                    viewport={{ once: true }}
                                    className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${studyIdx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                                >
                                    <motion.div variants={fadeInUp} className={studyIdx % 2 !== 0 ? 'lg:order-2' : ''}>
                                        <div className={`w-14 h-14 rounded-2xl bg-${study.color}-100 flex items-center justify-center mb-8 text-${study.color}-600`}>
                                            {study.icon}
                                        </div>
                                        <h3 className="text-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4">{study.name}</h3>
                                        <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">{study.headline}</h4>

                                        <div className="space-y-8">
                                            <div>
                                                <h5 className="text-xs font-bold text-blue-600 mb-3 uppercase tracking-wider">The Challenge</h5>
                                                <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                                            </div>
                                            <div>
                                                <h5 className="text-xs font-bold text-blue-600 mb-3 uppercase tracking-wider">Sownmark Solution</h5>
                                                <ul className="space-y-4">
                                                    {study.solution.map((item, i) => (
                                                        <li key={i} className="flex gap-4 group">
                                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 group-hover:scale-150 transition-transform" />
                                                            <span className="text-gray-600">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        variants={fadeInUp}
                                        className={`relative ${studyIdx % 2 !== 0 ? 'lg:order-1' : ''}`}
                                    >
                                        <div className={`absolute -inset-4 bg-${study.color}-100/50 rounded-[2rem] blur-2xl opacity-50`} />
                                        <div className="bg-white p-8 lg:p-12 rounded-[2rem] border border-gray-100 shadow-2xl relative z-10 group overflow-hidden">
                                            <div className={`absolute top-0 right-0 w-32 h-32 bg-${study.color}-50 rounded-bl-[4rem] -mr-8 -mt-8 transition-transform group-hover:scale-110`} />

                                            <div className="relative z-10">
                                                <h5 className="text-xs font-bold text-gray-400 mb-8 uppercase tracking-widest">Core Result</h5>
                                                <div className="flex flex-col gap-6">
                                                    <div className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                                        {study.result}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-green-500 font-bold uppercase tracking-widest text-[10px] mt-4">
                                                        <Zap className="w-4 h-4 fill-current" /> Milestone Achieved
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Newsletter/CTA */}
            <section className="py-24 bg-[#1a2957] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
                <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Scale Your Brand?</h2>
                    <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">Join the ranks of successful founders who trust Sownmark for zero-to-one development and aggressive market scaling.</p>
                    <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                        <a href="/contact" className="bg-white text-[#1a2957] px-10 py-5 rounded-full font-bold text-lg shadow-2xl flex items-center gap-3 group">
                            Book Your Growth Audit
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudiesPage;
