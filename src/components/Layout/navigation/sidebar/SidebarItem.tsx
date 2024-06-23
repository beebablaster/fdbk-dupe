import React from "react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TItemProps } from "../itemProps.types";
import { useNavigationItem } from "../useNavigationItem.hook";
import { useSidebarStore } from "@/store/useSidebarStore";

export const SidebarItem: React.FC<TItemProps> = (props) => {
  const { isExpanded } = useSidebarStore();
  const { isActive, title, href, hoverBg, children, componentProps } = useNavigationItem(props);
  const Component = href ? Link : "button";
  delete componentProps.showOnMobile

  if(props.asChild) return (
    <Component
      {...componentProps} 
      href={href || ""}
      className={`overflow-hidden flex items-center gap-2 my-1 py-2 rounded-md ${hoverBg} ${isActive ? "bg-background" : ""} transition-all active:scale-95`}
    >
      {children}
    </Component>
  )

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip open={isExpanded ? false : undefined}>
        <TooltipTrigger disabled={!isExpanded} asChild>
          <Component
            {...componentProps} 
            href={href || ""}
            className={`overflow-hidden flex items-center gap-2 my-1 py-2 px-3 rounded-md ${hoverBg} ${isActive ? "bg-background" : ""} transition-all active:scale-95`}
          >
            <div className={`group ${isActive ? "active" : ""}`}>
              {children}
            </div>
            {isExpanded && (
              <div className={`block text-lg transition-opacity ${isActive ? "text-primary" : ""}`}>
                {title}
              </div>
            )}
          </Component>
        </TooltipTrigger>
        <TooltipContent side="right">
          {title}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}