import React from 'react';

interface GrainProps {
  opacity?: number;
  zIndex?: number;
  className?: string;
  color?: string;
  blendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'soft-light' | 'hard-light';
  filter?: string;
}

const Grain: React.FC<GrainProps> = ({ 
  opacity = 0.15, 
  zIndex = 300,
  className = '',
  color,
  blendMode = 'normal',
  filter
}) => {
  const grainStyle: React.CSSProperties = {
    zIndex,
    '--grain-opacity': opacity,
    '--grain-color': color,
    '--grain-blend-mode': blendMode,
    '--grain-filter': filter,
  } as React.CSSProperties & { [key: string]: any };

  return (
    <div 
      className={`grain ${className}`}
      style={grainStyle}
      aria-hidden="true"
    />
  );
};

export default Grain; 