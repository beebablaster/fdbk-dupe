import { MailIcon } from 'lucide-react'
import { MailOpenIcon } from 'lucide-react';
import React from 'react'

interface IProps {
  size?: 'sm' | 'default',
  className?: string,
  isOpen?: boolean,
}

const sizes = {
  sm: 'w-5 h-5',
  default: 'w-8 h-8',
} as const;

const paddings = {
  inner: {
    default: 'p-5',
    sm: 'p-3',
  },
  outer: {
    default: 'p-2',
    sm: 'p-1',
  }
} as const;

export const MailCirle: React.FC<IProps> = ({ size = 'default', isOpen = false, className }) => {
  return (
    <div className='bg-background'>
      <div className={`${paddings.outer[size]} w-fit flex items-center justify-center bg-primary/20 rounded-full ${className}`}>
        <div className={`${paddings.inner[size]} flex items-center justify-center bg-primary/30 rounded-full`}>
          {isOpen ? (
            <MailOpenIcon className={`${sizes[size]} fill-primary stroke-1 stroke-primary-foreground`} />
          ) : (
            <MailIcon className={`${sizes[size]} fill-primary stroke-1 stroke-primary-foreground`} />
          )}
        </div>
      </div>
    </div>
  )
}
