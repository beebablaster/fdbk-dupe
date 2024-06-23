import React from 'react'
import { Sidebar } from './navigation/sidebar/Sidebar'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { mediaQueries } from '../constants/mediaQueries'
import { BottomNavigation } from './navigation/bottomNavigation/BottomNavigation'

interface IProps {
  children: React.ReactNode
}

export const ShellLayout: React.FC<IProps> = ({ children }) => {
  const isMobile = useMediaQuery(mediaQueries.isMobile);
  return (
    <div className={` ${isMobile ? "" : "flex"} items-start justify-start gap-1 p-1`}>
      {isMobile ? <BottomNavigation /> : <Sidebar />}
      <section className={`w-full ${isMobile ? "mb-14" : ""}`}>
        {children}
      </section>
    </div>
  )
}
