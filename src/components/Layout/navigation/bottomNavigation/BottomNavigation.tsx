import { useAuth } from '@/hooks/useAuth';
import React from 'react'
import { getBottomNavigationItems } from './getBottomNavigationItems';
import { CircleAvatar } from '@/components/ui/avatar';
import { BottomNavigationItem } from './BottomNavigationItem';
import useUserStore from "@/store/useUserStore";

export const BottomNavigation = () => {
  const { user } = useUserStore();
  if(!user) return null;
  
  const items = getBottomNavigationItems(user.role.name);

  return (
    <header className='fixed left-0 right-0 bottom-0 bg-accent/90 backdrop-blur z-10'>
      <div className="flex justify-around items-center py-1 px-1 gap-1">
        {items.map((item, index) => (
          <BottomNavigationItem key={index} item={item} asChild={false} />
        ))}
        <BottomNavigationItem asChild href='/test'>
          <CircleAvatar className='h-7 w-7 text-xs text-black' firstName={user.name} lastName={user.surname} />
        </BottomNavigationItem>
      </div>
    </header>
  )
}
