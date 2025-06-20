import React from 'react';
import { BarChart3 } from 'lucide-react';

interface LogoProps {
  variant?: 'color' | 'white';
}

const Logo: React.FC<LogoProps> = ({ variant = 'color' }) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-primary-700';
  const iconColor = variant === 'white' ? 'text-secondary-400' : 'text-secondary-500';

  return (
    <div className="flex items-center">
      <BarChart3 className={`mr-2 ${iconColor}`} size={28} />
      <span className={`text-xl font-bold font-heading ${textColor}`}>Sownmark</span>
    </div>
  );
};

export default Logo;