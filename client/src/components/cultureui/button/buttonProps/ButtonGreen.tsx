// En ButtonProps.tsx
import React, { ReactNode } from 'react';

// Definir la interfaz de los props
interface ButtonGreenProps {
  text?: string; // Texto opcional
  color?: string; // Color de fondo opcional
  textColor?: string; // Color del texto opcional
  padding?: string; // Padding opcional
  fontSize?: string; // Tamaño de fuente opcional
  children?: ReactNode; // Tipo explícito para `children`
  onClick?: () => void; // Evento onClick opcional
}

const ButtonGreen: React.FC<ButtonGreenProps> = ({
  text = "Nuevo Texto Por Defecto", // Cambia aquí el valor por defecto
  color = '#00674F',
  textColor = '#FFFFFF',
  padding = '10px 20px',
  fontSize = '16px',
  children,
  onClick,
}) => {
  return (
    <button
      className={`border-none rounded-md cursor-pointer font-bold transition-all duration-300 ease-in-out inline-flex items-center justify-center
                hover:scale-105 hover:opacity-90 active:scale-95 active:opacity-100`}
      style={{
        backgroundColor: color,
        color: textColor,
        padding,
        fontSize,
      }}
      onClick={onClick}
    >
      {children || text} {/* Utiliza text o children */}
    </button>
  );
};

export default ButtonGreen; // Exportación por defecto
