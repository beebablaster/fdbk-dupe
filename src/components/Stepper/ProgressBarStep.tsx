import React, { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CheckIcon } from "lucide-react";

interface IProps {
  isActive: boolean;
  isPassed?: boolean;
  title: string;
  CircleIcon?: ReactNode;
}

export const ProgressBarStep: React.FC<IProps> = ({ isPassed, isActive, CircleIcon, title }) => {
  return (
    <div className="relative">
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
          <div
            className={`step relative rounded-full flex justify-center items-center w-4 h-4 transition-all ${isPassed ? "bg-primary" : "bg-accent"} ${isActive && "border-primary border-2 bg-background"}`}
          >
            {isPassed && <CheckIcon size={10} className="fill-none stroke-white" />}
            {isActive && CircleIcon && (
              <div className="absolute top-1/2 left-1/2 translate -translate-x-1/2 -translate-y-1/2">
                {CircleIcon}
              </div>
            )}
          </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}