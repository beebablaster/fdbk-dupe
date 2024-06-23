import React from 'react';
import { LogoIcon } from '../svg/LogoIcon';

interface IProps {
  variant?: "default" | "short";
  color?: "primary" | "white";
}

export const Logo: React.FC<IProps> = ({ variant = "default", color = "white" }) => {
  const sizes = {
    text: {
      "default": "md:text-xl text-lg font-medium",
      "short": "",
    }
  } as const;

  const colors = {
    logo: {
      "primary": "fill-primary",
      "white": "fill-white",
    },
    text: {
      "primary": "text-primary",
      "white": "text-white",
    }
  } as const;

  if(variant === "short") return <LogoIcon className={`h-6 ${colors.logo[color]}`} />;

  return(
    <div className="relative pl-[0.4rem] w-fit">
      <div className={`uppercase ${colors.text[color]} ${sizes.text[variant]}`}>
        <span className='opacity-0'>
          F
        </span>
        <span>
          eedback
        </span>
      </div>
      <LogoIcon className={`${colors.logo[color]} pointer-events-none absolute top-1/2 -translate-y-1/2 left-0 h-3/5`} />
    </div>
  )
}