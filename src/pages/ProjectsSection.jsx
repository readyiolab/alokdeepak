import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Search,
  Globe,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";

const ProjectsSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Tool icons mapping
  const getToolIcon = (tool) => {
    const iconMap = {
      "Meta Ads Manager": {
        icon: "/icons/Meta Ads MAnager.webp",

        name: "Meta Ads Manager",
      },
      "Meta ADS": {
        icon: "/icons/Meta ADS.webp",

        name: "Meta ADS",
      },
      "Meta Business Suite": {
        icon: "/images/meta-bussiness-suite.jpeg",

        name: "Meta Business Suite",
      },
      "Facebook Pixel": {
        icon: "/images/facebook-pixel.png",

        name: "Facebook Pixel",
      },
      Canva: {
        icon: "/icons/Canva.webp",

        name: "Canva",
      },
      "Google Sheets": {
        icon: "/images/google-sheet.png",

        name: "Google Sheets",
      },
      "Google Ads": {
        icon: "/icons/Google-Ads.webp",

        name: "Google Ads",
      },
      "Google Ads Keyword Planner": {
        icon: "/icons/Google Keyword Planner.webp",

        name: "Keyword Planner",
      },
      "Google Analytics": {
        icon: "/images/google-analytics.png",

        name: "Google Analytics",
      },
      "Google Tag Manager": {
        icon: "/images/tag-manager.jpeg",

        name: "Tag Manager",
      },
      "Google Ads Transparency Center": {
        icon: "/images/Google-Ads-Transparency-Center.png",

        name: "Transparency Center",
      },
      OpenAI: {
        icon: "/icons/Open Ai.webp",

        name: "OpenAI",
      },
      "Google Search Console": {
        icon: "/icons/Google Search Console.webp",

        name: "Search Console",
      },
      Ahrefs: {
        icon: "/icons/AHREFS.webp",

        name: "Ahrefs",
      },
      Semrush: {
        icon: "/icons/semrush.webp",

        name: "Semrush",
      },
      WordPress: {
        icon: "/images/wordpress.png",

        name: "WordPress",
      },
      "Screaming Frog": {
        icon: "/icons/Screaming Frog.webp",

        name: "Screaming Frog",
      },
      "Amazon Ads": {
        icon: "/icons/amazon-ads.webp",

        name: "Amazon Ads",
      },
      "Google Trends": {
        icon: "/icons/google-trends.webp",

        name: "Google Trends",
      },
      MOZ: {
        icon: "/icons/MOZ.webp",

        name: "MOZ",
      },
      "Performance Max": {
        icon: "/icons/performance-max.webp",

        name: "Performance Max",
      },
      Ubersuggest: {
        icon: "/icons/ubersuggest.webp",

        name: "Ubersuggest",
      },
    };
    return (
      iconMap[tool] || {
        icon: "⚙️",

        name: tool,
      }
    );
  };

  const projects = [
    {
      title: "Meta Ads Campaign",

      description:
        "Create and execute a live Facebook and Instagram campaign for Sownmark. Define business objectives, identify target audiences, build media plans, design ads, and optimize performance.",
      tools: [
        "Meta Ads Manager",
        "Meta Business Suite",
        "Facebook Pixel",
        "Canva",
        "Google Sheets",
      ],
      features: [
        "Project Briefing",
        "Meeting with Industry Experts",
        "Campaign Setup & Launch with Budget",
        "Media Strategy Submission & Live Optimization",
        "Presentations and Mock Interviews",
      ],
      icon: "/icons/Meta ADS.webp",
      gradient: "linear-gradient(135deg, #1a2957, #90abff)",
      stats: { students: "500+", success: "95%" },
    },
    {
      title: "Google Ads Campaign",

      description:
        "Plan and run a Google Search campaign for Sownmark. Define goals, select keywords, craft ad copies, and build an efficient bidding strategy, with active campaign optimization.",
      tools: [
        "Google Ads",
        "Google Ads Keyword Planner",
        "Google Analytics",
        "Google Tag Manager",
        "Google Ads Transparency Center",
        "OpenAI",
      ],
      features: [
        "Project Briefing",
        "Meeting with Industry Experts",
        "Real-time Campaign Setup & Launch with Budget",
        "Media Strategy Submission & Campaign Optimization",
        "Presentations and Mock Interviews",
      ],
      icon: "/icons/Google-Ads.webp",
      gradient: "linear-gradient(135deg, #1a2957, #90abff)",
      stats: { students: "450+", success: "92%" },
    },
    {
      title: "SEO Strategy Project",

      description:
        "Build an SEO strategy for Sownmark's website. Conduct on-page and technical SEO audits, evaluate backlinks, craft a content strategy, and publish SEO-optimized blogs using WordPress.",
      tools: [
        "Google Search Console",
        "Google Analytics",
        "Ahrefs",
        "WordPress",
        "Screaming Frog",
        "Canva",
      ],
      features: [
        "Project Briefing",
        "SEO Audit + Content Strategy Creation",
        "Blog Publishing Using WordPress",
        "Performance Tracking",
        "Presentations and Mock Interviews",
      ],
      icon: "/icons/seo.png",
      gradient: "linear-gradient(135deg, #1a2957, #90abff)",
      stats: { students: "380+", success: "88%" },
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <motion.div {...fadeInUp} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Award className="w-4 h-4" />
          Industry-Standard Projects
        </div>
        <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Real-World Projects
        </h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Apply your skills in hands-on projects designed to simulate real
          marketing challenges, guided by industry experts with live campaign
          budgets.
        </p>
      </motion.div>

      {/* Projects List */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="space-y-8 max-w-7xl mx-auto px-6"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={fadeInUp} className="group">
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1 border border-gray-100 group-hover:border-gray-200 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

              <div className="flex flex-col gap-8">
                {/* Top Section: Project Info and Features */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Left Column - Project Info */}
                  <div>
                    {/* Project Icon */}
                    <div className="w-32 h-32 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                      <img src={project.icon} alt={project.title} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-base mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* CTA Button */}
                    {/* <button
                      className="w-full py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group"
                      style={{
                        background: project.gradient,
                        color: 'white',
                      }}
                    >
                      <span className="relative z-10">Join Project</span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </button> */}
                  </div>

                  {/* Right Column - Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                      What You'll Do
                    </h4>
                    <div className="space-y-3">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Section - Tools */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    Professional Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => {
                      const toolInfo = getToolIcon(tool);
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div
                            className="w-16 h-16 rounded-md flex items-center justify-center"
                            style={{ background: toolInfo.bg }}
                          >
                            <img
                              src={toolInfo.icon}
                              alt={`${toolInfo.name} icon`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-gray-700 text-sm font-medium">
                            {toolInfo.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
