import React from 'react';
import clsx from 'clsx';

type BlurCircleProps = {
  className?: string;
  gradientClass: string;
  style?: React.CSSProperties;
};

const BlurCircle: React.FC<BlurCircleProps> = ({
  className,
  gradientClass,
  style,
}) => {
  return (
    <div
      className={clsx(
        'absolute w-[400px] h-[400px] blur-[100px] rounded-full',
        gradientClass,
        className
      )}
      style={style}
    />
  );
};

export default BlurCircle;
