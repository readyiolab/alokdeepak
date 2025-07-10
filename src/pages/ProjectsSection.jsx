
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Search, Globe, CheckCircle, Clock, Users, TrendingUp, Award } from 'lucide-react';

const ProjectsSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Tool icons mapping
  const getToolIcon = (tool) => {
    const iconMap = {
      'Meta Ads Manager': { 
        icon: '🎯', 
        bg: 'linear-gradient(135deg, #1a2957, #90abff)',
        name: 'Meta Ads Manager'
      },
      'Meta Business Suite': { 
        icon: '📊', 
        bg: 'linear-gradient(135deg, #1a2957, #90abff)',
        name: 'Meta Business Suite'
      },
      'Facebook Pixel': { 
        icon: '📈', 
        bg: 'linear-gradient(135deg, #1a2957, #90abff)',
        name: 'Facebook Pixel'
      },
      'Canva': { 
        icon: '🎨', 
        bg: 'linear-gradient(135deg, #1a2957, #90abff)',
        name: 'Canva'
      },
      'Google Sheets': { 
        icon: '📋', 
        bg: 'linear-gradient(135deg, #1a2957, #90abff)',
        name: 'Google Sheets'
      },
      'Google Ads': { 
        icon: '🔍', 
        bg: 'linear-gradient(135deg, #1a2957, #90abff)',
        name: 'Google Ads'
      },
      'Google Ads Keyword Planner': { 
        icon: '🔑', 
        bg: 'linear-gradient(135deg, #1a2957, #90abff)',
        name: 'Keyword Planner'
      },
      'Google Analytics': { 
        icon: '📊', 
        bg: 'linear-gradient(135deg, #1a2957, #90abff)',
        name: 'Google Analytics'
      },
      'Google Tag Manager': { 
        icon: '🏷️', 
        bg: 'linear-gradient(135deg, #1a2957, #90abff)',
        name: 'Tag Manager'
      },
      'Google Ads Transparency Center': { 
        icon: '👁️', 
        bg: 'linear-gradient(135deg, #1a2957, #90abff)',
        name: 'Transparency Center'
      },
      'OpenAI': { 
        icon: '🤖', 
        bg: 'linear-gradient(135deg, #1a2957, #90abff)',
        name: 'OpenAI'
      },
      'Google Search Console': { 
        icon: '🔍', 
        bg: 'linear-gradient(135deg, #1a2957, #90abff)',
        name: 'Search Console'
      },
      'Ahrefs/Semrush': { 
        icon: '🔗', 
        bg: 'linear-gradient(135deg, #1a2957, #90abff)',
        name: 'Ahrefs/Semrush'
      },
      'WordPress': { 
        icon: '📝', 
        bg: 'linear-gradient(135deg, #1a2957, #90abff)',
        name: 'WordPress'
      },
      'Screaming Frog': { 
        icon: '🐸', 
        bg: 'linear-gradient(135deg, #1a2957, #90abff)',
        name: 'Screaming Frog'
      }
    };
    return iconMap[tool] || { icon: '⚙️', bg: 'linear-gradient(135deg, #1a2957, #90abff)', name: tool };
  };

  const projects = [
    {
      title: 'Meta Ads Campaign',
      duration: '15 Hours (Over 6 Days)',
      description:
        'Create and execute a live Facebook and Instagram campaign for Sownmark. Define business objectives, identify target audiences, build media plans, design ads, and optimize performance.',
      tools: ['Meta Ads Manager', 'Meta Business Suite', 'Facebook Pixel', 'Canva', 'Google Sheets'],
      features: [
        'Project Briefing',
        'Meeting with Industry Experts',
        'Campaign Setup & Launch with Budget',
        'Media Strategy Submission & Live Optimization',
        'Presentations and Mock Interviews',
      ],
      icon: <Target className="w-7 h-7" />,
      gradient: 'linear-gradient(135deg, #1a2957, #90abff)',
      stats: { students: '500+', success: '95%' }
    },
    {
      title: 'Google Ads Campaign',
      duration: '15 Hours (Over 6 Days)',
      description:
        'Plan and run a Google Search campaign for Sownmark. Define goals, select keywords, craft ad copies, and build an efficient bidding strategy, with active campaign optimization.',
      tools: [
        'Google Ads',
        'Google Ads Keyword Planner',
        'Google Analytics',
        'Google Tag Manager',
        'Google Ads Transparency Center',
        'OpenAI',
      ],
      features: [
        'Project Briefing',
        'Meeting with Industry Experts',
        'Real-time Campaign Setup & Launch with Budget',
        'Media Strategy Submission & Campaign Optimization',
        'Presentations and Mock Interviews',
      ],
      icon: <Search className="w-7 h-7" />,
      gradient: 'linear-gradient(135deg, #1a2957, #90abff)',
      stats: { students: '450+', success: '92%' }
    },
    {
      title: 'SEO Strategy Project',
      duration: '12 Hours (Over 6 Days)',
      description:
        "Build an SEO strategy for Sownmark's website. Conduct on-page and technical SEO audits, evaluate backlinks, craft a content strategy, and publish SEO-optimized blogs using WordPress.",
      tools: ['Google Search Console', 'Google Analytics', 'Ahrefs/Semrush', 'WordPress', 'Screaming Frog', 'Canva'],
      features: [
        'Project Briefing',
        'SEO Audit + Content Strategy Creation',
        'Blog Publishing Using WordPress',
        'Performance Tracking',
        'Presentations and Mock Interviews',
      ],
      icon: <Globe className="w-7 h-7" />,
      gradient: 'linear-gradient(135deg, #1a2957, #90abff)',
      stats: { students: '380+', success: '88%' }
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
          Apply your skills in hands-on projects designed to simulate real marketing challenges, 
          guided by industry experts with live campaign budgets.
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
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10"
                      style={{ background: project.gradient }}
                    >
                      <div className="text-white">{project.icon}</div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 text-base mb-4 leading-relaxed">{project.description}</p>
                    
                    {/* Stats */}
                    <div className="flex flex-col gap-2 mb-6">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {project.duration}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Users className="w-4 h-4" />
                        {project.stats.students}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4" />
                        {project.stats.success}
                      </div>
                    </div>

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
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
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
                        <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div 
                            className="w-8 h-8 rounded-md flex items-center justify-center text-sm"
                            style={{ background: toolInfo.bg }}
                          >
                            {toolInfo.icon}
                          </div>
                          <span className="text-gray-700 text-sm font-medium">{toolInfo.name}</span>
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