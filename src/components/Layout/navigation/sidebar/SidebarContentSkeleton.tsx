import React from "react";
import { Separator } from "../../../ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export const SidebarContentSkeleton = () => {
	return(
		<>
			<div className="px-2 pt-1">
				{Array(3).fill(0).map((_, index) => (
					<Skeleton key={index} className="h-10 w-full bg-background mb-2" />
				))}
				<div className="m-4 block">
					<Separator />
				</div>
				{Array(2).fill(0).map((_, index) => (
					<Skeleton key={index} className="h-10 w-full bg-background mb-2" />
				))}
			</div>
			<div className="w-full flex flex-col gap-2 px-2 fixed bottom-2 left-0">
				{Array(1).fill(0).map((_, index) => (
					<Skeleton key={index} className="h-10 w-full bg-background" />
				))}
				<div className="flex items-center gap-2 my-3 rounded-md">
					<Skeleton className="h-8 w-8 rounded-full bg-background" />
					<Skeleton className="h-8 flex-1 bg-background" />
				</div>
			</div>
		</>
	)
}