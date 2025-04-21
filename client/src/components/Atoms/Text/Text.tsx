import React from 'react';
import clsx from 'clsx';

type TextVariant = 'default' | 'muted' | 'danger' | 'success' | 'subtle';

type TextProps = {
  as?: React.ElementType;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  align?: 'left' | 'center' | 'right' | 'justify';
  color?: string; 
  variant?: TextVariant;
  truncate?: boolean;
  italic?: boolean;
  uppercase?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const variantClasses: Record<TextVariant, string> = {
  default: 'text-foreground',
  muted: 'text-muted-foreground',
  danger: 'text-red-500 dark:text-red-400',
  success: 'text-green-500 dark:text-green-400',
  subtle: 'text-zinc-400 dark:text-zinc-500',
};

export const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  size = 'base',
  weight = 'normal',
  align,
  variant = 'default',
  color,
  truncate,
  italic,
  uppercase,
  className,
  children,
  ...props
}) => {
  const baseClasses = clsx(
    `text-${size}`,
    `font-${weight}`,
    align && `text-${align}`,
    truncate && 'truncate',
    italic && 'italic',
    uppercase && 'uppercase',
    variantClasses[variant] || color,
    className
  );

  return (
    <Component className={baseClasses} {...props}>
      {children}
    </Component>
  );
};
