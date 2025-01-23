"use client"
import React, { ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  text?: string; // Texto opcional para el botón
  color?: string; // Color de fondo del botón
  textColor?: string; // Color del texto
  padding?: string; // Espaciado interno (padding)
  fontSize?: string; // Tamaño de la fuente
  hoverColor?: string; // Color al pasar el mouse
  children?: ReactNode; // Para contenido adicional
  onClick?: () => void; // Evento opcional de clic
}

export const Button: React.FC<ButtonProps> = ({
  text,
  color = '#007BFF', // Color por defecto (azul)
  textColor = '#FFFFFF', // Color del texto por defecto (blanco)
  padding = '10px 22px', // Padding por defecto
  fontSize = '16px', // Tamaño de fuente por defecto
  hoverColor = '#ffffff', // Color de hover por defecto
  children,
  onClick,
}) => {
  return (
    <button
      className={styles.button}
      style={{
        backgroundColor: color,
        color: textColor,
        padding,
        fontSize,
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.backgroundColor = hoverColor)
      }
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = color)}
      onClick={onClick}
    >
      {children || text}
    </button>
  );
};
