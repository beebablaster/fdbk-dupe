import React from 'react'
import {CircleAvatar} from '@/components/ui/avatar'
import {renderName} from '@/utils/renderName'
import {Separator} from '@/components/ui/separator'
import {SidebarItem} from './SidebarItem'
import {sidebarBottomItems, sidebarMiddleItems, sidebarTopItems} from '../items'
import {useAuth} from '@/hooks/useAuth'
import {SidebarContentSkeleton} from './SidebarContentSkeleton'
import {ScrollArea} from '@/components/ui/scroll-area'
import {useSidebarStore} from '@/store/useSidebarStore'
import useUserStore from "@/store/useUserStore";

//todo: remove all the bs code i wrote
export const SidebarContent = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const {logout} = useAuth();

    const {user} = useUserStore();

    const {isExpanded} = useSidebarStore();

    if (!user) return <SidebarContentSkeleton/>;
    return (
        <>
            <ScrollArea className="flex flex-col justify-between px-2">
                {user?.role && sidebarTopItems[user?.role.name]!.map((item, index) => (
                    <SidebarItem key={index} item={item}/>
                ))}
                <div className="m-4 block">
                    <Separator/>
                </div>
                {sidebarMiddleItems.map((item, index) => (
                    <SidebarItem key={index} item={item}/>
                ))}
                <div style={{marginBottom: 10 + ref.current?.clientHeight! || 0}}/>
            </ScrollArea>
            <div
                className="bg-accent/40 backdrop-blur px-2 pb-2 flex flex-col absolute bottom-0 left-0 right-0 translate-y-px rounded-md"
                ref={ref}>
                {sidebarBottomItems.map((item, index) => (
                    <SidebarItem key={index} item={item} onClick={logout}/>
                ))}
                <SidebarItem asChild href='/profile'>
                    <div className="w-full flex items-center px-2 gap-1">
                        <CircleAvatar className='text-sm lg:text-xs' firstName={user?.name!} lastName={user?.surname!}/>
                        {isExpanded && (
                            <div className="overflow-ellipsis block">
                                {renderName(user?.name!, user?.surname!)}
                                <div className="text-xs">
                                    {user?.email}
                                </div>
                            </div>
                        )}
                    </div>
                </SidebarItem>
            </div>
        </>
    )
}

