import React from "react";
import { Logo } from "../../../common/Logo";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TooltipProvider, TooltipTrigger, TooltipContent, Tooltip } from "@/components/ui/tooltip";
import { SidebarContent } from "./SidebarContent";
import { useSidebarStore } from "@/store/useSidebarStore";

export const Sidebar: React.FC = () => {
		const { isExpanded, toggle } = useSidebarStore();
    return(
			<aside className={`group z-20 bg-accent rounded-md sticky top-1 left-0 transition-all h-[calc(100dvh-0.5rem)] ${isExpanded ? "w-[14rem]" : "w-16"} max-xs:hidden`}>
				<div className={`relative flex flex-col h-full transition-all`}>
					<TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
								<Button 
									size="icon" 
									className="bg-transparent text-foreground opacity-0 absolute top-1/2 -translate-x-1/2 -right-2 hover:bg-background group-hover:opacity-100 transition-all cursor-pointer rounded-md z-[2]" 
									onClick={toggle}
								>
									{isExpanded ? (
										<ChevronLeftIcon />
									) : (
										<ChevronRightIcon />
									)}
								</Button>
              </TooltipTrigger>
              <TooltipContent side="right">
								{isExpanded ? "Collapse" : "Expand"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
					<div className="p-4 mt-5 block mx-auto overflow-hidden">
						<Logo color="primary" variant={isExpanded ? "default" : "short"} />
					</div>
					<SidebarContent />
				</div>
			</aside>
    )
}