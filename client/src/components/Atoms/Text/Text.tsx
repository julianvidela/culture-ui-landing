import React, { FC } from "react";
import clsx from "clsx";
import styles from "./text.module.css";
import {
  LabelStyle,
  ColorStyle,
  SizeStyle,
  FontWeightStyle,
  FamilyStyle,
} from "@/interfaces/IStyle";

type Variant =
  | "title"
  | "sub-title"
  | "sub-title-off"
  | "text-italic"
  | "text-bold"
  | ""; // extendí si querés

interface TextProps {
  as?: LabelStyle;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  onClick?: () => void;
  color?: ColorStyle;
  size?: SizeStyle;
  fontWeight?: FontWeightStyle;
  family?: FamilyStyle;
  cursor?: React.CSSProperties["cursor"];
  padding?: string;
  variant?: Variant;
}

export const Text: FC<TextProps> = ({
  as = "span",
  children,
  className,
  style = {},
  title,
  onClick,
  color = "base",
  size = "normal",
  family = "",
  fontWeight,
  cursor,
  padding = "0",
  variant = "",
}) => {
  const composedClassName = clsx(
    styles.default,
    styles[`color-${color}`],
    styles[`size-${size}`],
    styles[`family-${family}`],
    variant && styles[variant],
    className
  );

  return React.createElement(
    as,
    {
      className: composedClassName,
      style: {
        ...style,
        fontWeight,
        cursor,
        padding,
        
      },
      title,
      onClick,
    },
    children
  );
};
