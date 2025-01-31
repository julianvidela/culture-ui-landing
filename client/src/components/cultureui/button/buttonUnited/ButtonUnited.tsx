import React from 'react';

interface ButtonUI {
  text?: string;
  color?: string;
  textColor?: string;
  padding?: string;
  fontSize?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
}

const ButtonUI: React.FC<ButtonUI> = ({
  text = "Nuevo Texto Por Defecto",
  color,
  textColor,
  padding = '10px 20px',
  fontSize = '16px',
  children,
  onClick,
  variant = 'primary',
}) => {
  const variantClasses = {
    primary: 'bg-green-700 text-white hover:bg-green-800',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    success: 'bg-blue-600 text-white hover:bg-blue-700',
  };

  return (
    <button
      className={`border-none rounded-md cursor-pointer font-bold transition-all duration-300 ease-in-out inline-flex items-center justify-center hover:scale-105 hover:opacity-90 active:scale-95 active:opacity-100 ${variantClasses[variant]}`}
      style={{
        backgroundColor: color,
        color: textColor,
        padding,
        fontSize,
      }}
      onClick={onClick}
    >
      {children || text}
    </button>
  );
};

export default ButtonUI;
