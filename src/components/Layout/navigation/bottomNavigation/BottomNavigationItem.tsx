import React from 'react'
import { TItemProps } from '../itemProps.types';
import { useNavigationItem } from '../useNavigationItem.hook';

export const BottomNavigationItem: React.FC<TItemProps> = (props) => {
  const { children, isActive } = useNavigationItem(props);    
  return (
    <button className={`flex-1 flex justify-center items-center py-2 rounded-md ${isActive ? "bg-background text-primary" : ""}`}>
      {children}
    </button>
  )
}
