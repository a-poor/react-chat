import React, { CSSProperties } from 'react';

export interface IMessageProps {
  children: React.ReactNode;
  w?: string | number;
  maxw?: string | number;
  minw?: string | number;
  h?: string | number;
  minh?: string | number;
  bgColor?: string;
  m?: string | number;
  p?: string | number;
  textColor?: string;
  fontSize: string | number;
  radius?: string | number;
  bottomLeftRadius?: string | number;
  bottomRightRadius?: string | number;
  style?: CSSProperties;
}

export function Message({
  children = "", 
  w = "fit-content", 
  minw = 14, 
  maxw, 
  h, 
  minh = 14, 
  bgColor = "rgb(84,168,255)", 
  m = "5px", 
  p = "5px 10px", 
  textColor = "white", 
  fontSize = 14, 
  radius = 15, 
  bottomLeftRadius = undefined,
  bottomRightRadius = 3,
  style, 
  ...props
}: IMessageProps) {
  return (
    <div 
      style={{
        fontFamily: "sans-serif",
        width: w,
        minWidth: minw,
        maxWidth: maxw,
        height: h,
        minHeight: minh,
        backgroundColor: bgColor,
        margin: m,
        padding: p,
        color: textColor,
        borderRadius: radius,
        borderBottomRightRadius: bottomRightRadius || radius,
        borderBottomLeftRadius: bottomLeftRadius || radius,
        boxShadow: "3px 1px 5px rgba(150,150,150,0.25)",
        ...style,
      }}
      {...props}
    >
      { children }
    </div>
  );
}
