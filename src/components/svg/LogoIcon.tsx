import React from "react"

interface IProps {
  className?: string;
  animated?: boolean;
}

export const LogoIcon: React.FC<IProps> = ({ className, animated = false }) => {
    return (
      <svg viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${animated && "svgStrokeAnimation"} ${className}`}>
        <path d="M49 8.03858V0H5.1371C1.34355 0.750268 0.13172 3.52805 0 4.82315V45.0161C0.00102907 49.3033 8.03494 50.3751 9.87903 47.0257L18.9677 28.537H34.5107V20.6324H16.4651C11.8285 20.6324 10.8011 27.3312 8.03494 32.1543V8.03858H49Z" />
      </svg>      
    )
}