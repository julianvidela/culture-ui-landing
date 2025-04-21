
import clsx from 'clsx';

type BlurCircleProps = {
  className?: string;
  gradientClass: string;
  size?: string; 
  blur?: string; 
};

const BlurCircle: React.FC<BlurCircleProps> = ({
  className,
  gradientClass,
  size = "w-[400px] h-[400px]",
  blur = "blur-[100px]",
}) => {
  return (
    <div
      className={clsx(
        'absolute rounded-full',
        size,
        blur,
        gradientClass,
        className
      )}
    />
  );
};

export default BlurCircle;