import { useState, useEffect } from 'react';

const tools = [
  { name: 'Google Keyword Planner', icon: '/icons/Google Keyword Planner.webp' },
  { name: 'Google Search Console', icon: '/icons/Google Search Console.webp' },
  { name: 'Google Ads', icon: '/icons/Google-Ads.webp' },
  { name: 'Performance Max', icon: '/icons/performance-max.webp' },
  { name: 'Open AI', icon: '/icons/Open Ai.webp' },
  { name: 'Google Trends', icon: '/icons/google-trends.webp' },
  { name: 'Amazon Ads', icon: '/icons/amazon-ads.webp' },
  { name: 'Semrush', icon: '/icons/semrush.webp' },
  { name: 'Moz', icon: '/icons/MOZ.webp' },
  { name: 'Ubersuggest', icon: '/icons/ubersuggest.webp' },
  { name: 'Ahrefs', icon: '/icons/AHREFS.webp' },
  { name: 'Canva', icon: '/icons/Canva.webp' },
  { name: 'Screaming Frog', icon: '/icons/Screaming Frog.webp' },
  { name: 'Meta Ads Manager', icon: '/icons/Meta Ads MAnager.webp' },
  { name: 'YouTube Advertising', icon: '/icons/youtubeads.png' },
];

// Split tools into three rows
const row1Tools = tools.slice(0, 5);
const row2Tools = tools.slice(5, 10);
const row3Tools = tools.slice(10);

const ToolCard = ({ tool, index, direction = 'left' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`transform transition-all duration-700 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : direction === 'left' 
            ? '-translate-x-8 opacity-0' 
            : 'translate-x-8 opacity-0'
      }`}
    >
      <div className="group flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 w-36 h-36 mx-3 transform hover:scale-105 hover:-translate-y-2">
        <img
          src={tool.icon}
          alt={`${tool.name} icon`}
          className="w-16 h-16 mb-2 object-contain group-hover:scale-110 transition-transform duration-300"
        />
        <h3 className="text-sm font-semibold text-gray-800 text-center leading-tight group-hover:text-blue-600 transition-colors duration-300">
          {tool.name}
        </h3>
      </div>
    </div>
  );
};

const ScrollingRow = ({ tools, direction = 'left', speed = 20 }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => {
        const newOffset = direction === 'left' ? prev - 1 : prev + 1;
        return Math.abs(newOffset) >= 200 ? 0 : newOffset;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [direction, speed]);

  return (
    <div className="relative overflow-hidden py-4">
      <div
        className={`flex ${direction === 'right' ? 'justify-end' : 'justify-start'} gap-4`}
        style={{
          transform: `translateX(${offset}px)`,
          transition: 'transform 0.1s linear',
        }}
      >
        {[...tools, ...tools].map((tool, index) => (
          <ToolCard 
            key={`${tool.name}-${index}`} 
            tool={tool} 
            index={index % tools.length}
            direction={direction}
          />
        ))}
      </div>
    </div>
  );
};

const DigitalMarketingToolsSection = () => {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitleVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0"></div>
      <div className="absolute top-0 left-0 w-full h-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Master Industry-Leading
            <span className="block text-transparent bg-clip-text mt-2" style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #90abff)' }}>
              Digital Marketing Tools
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Gain hands-on experience with top tools trusted by marketing professionals worldwide. 
            Our focus is on teaching core strategies and mindsets that drive results, ensuring 
            you're ready for any tool evolution.
          </p>
        </div>

        {/* Tools Grid with Scrolling Animation */}
        <div className="space-y-8">
          {/* Row 1: Scrolling Left */}
          <div className="relative">
            <ScrollingRow tools={row1Tools} direction="left" speed={30} />
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="relative">
            <ScrollingRow tools={row2Tools} direction="right" speed={25} />
          </div>

          {/* Row 3: Scrolling Left */}
          <div className="relative">
            <ScrollingRow tools={row3Tools} direction="left" speed={35}  />
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default DigitalMarketingToolsSection;