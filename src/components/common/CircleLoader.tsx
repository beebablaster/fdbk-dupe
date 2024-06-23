import React from "react";

interface IProps {
    size?: string;
    variant?: string;
    className?: string;
}

export const CircleLoader: React.FC<IProps> = ({ size = '1.5rem', variant = 'default', className }) => {
    const loaderStyle = {
        width: size,
        height: size,
    }
    return(
        <svg style={loaderStyle} className={`spinner ${className}`} viewBox="0 0 50 50">
            <circle 
                className={
                    `path 
                     ${variant === 'default' && "stroke-primary-foreground"}
                     ${variant === 'outline' && "stroke-primary group-hover:stroke-background"}
                     ${!variant && "stroke-primary"}
                    `
                } 
                cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
        </svg>
    )
}

