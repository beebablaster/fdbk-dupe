import { useWarningStore } from "@/store/useWarningsStore";
import { AlertTriangleIcon } from "lucide-react";
import React from "react";

interface IProps {
  keyword: string;
  message?: string;
  strokeBg?: string;
}

export const WarningMessage: React.FC<IProps> = ({ keyword, message, strokeBg = 'default' }) => {
  const warnings = useWarningStore((state) => state.warnings);
  const text = message || warnings[keyword];
  return (
    <p className={`text-star text-sm transition ease-in-out ${text ? "visible" : "invisible"}`}>
        <AlertTriangleIcon 
            size={20} 
            className={`inline mb-1 transition ease-in-out fill-star 
                ${strokeBg === 'default' && "stroke-background"}
                ${strokeBg === 'white' && "stroke-white"}
            `}
        />
        {text}
    </p>
  )
}