import React, { CSSProperties } from 'react';

export interface IMessageProps {
  children: React.ReactNode;
  w?: string | number;
  h?: string | number;
  bgColor?: string;
  m?: string | number;
  p?: string | number;
  textColor?: string;
  radius?: string | number;
  fromSide?: "left" | "right";
  style?: CSSProperties;
}

export function Message({children, w, h, bgColor, m, p, textColor, radius, fromSide, style, ...props}: IMessageProps) {
  return (
    <div 
      style={{
        fontFamily: "sans-serif",
        width: w,
        height: h,
        backgroundColor: bgColor,
        margin: m,
        padding: p,
        color: textColor,
        borderRadius: radius,
        borderBottomRightRadius: fromSide === "right" ? "3px" : radius,
        borderBottomLeftRadius: fromSide === "left" ? "3px" : radius,
        ...style,
      }}
      {...props}
    >
      { children }
    </div>
  );
}
