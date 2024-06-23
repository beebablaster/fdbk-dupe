import React from "react";
import { AlertCircleIcon } from "lucide-react";
import { useLanguage } from "@/locales/useLanguage";

interface IProps {
    message: string | undefined;
    strokeBg?: string;
}

export const ErrorMessage: React.FC<IProps> = ({ message, strokeBg = 'default' }) => {
    return (
        <p className={`text-destructive text-sm transition ease-in-out ${message ? "visible" : "invisible"}`}>
            <AlertCircleIcon 
                size={20} 
                className={`inline mb-1 transition ease-in-out fill-destructive 
                    ${strokeBg === 'default' && "stroke-background"}
                    ${strokeBg === 'white' && "stroke-white"}
                `}
            />
            {message}
        </p>
    )
}