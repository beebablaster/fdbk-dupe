import React from 'react'
import { LockIcon } from 'lucide-react';

interface IProps {
  size?: 'sm' | 'default',
  className?: string,
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

export const LockCircle: React.FC<IProps> = ({ size = 'default', className }) => {
  return (
    <div className='bg-background'>
      <div className={`${paddings.outer[size]} w-fit flex items-center justify-center bg-primary/20 rounded-full ${className}`}>
        <div className={`${paddings.inner[size]} flex items-center justify-center bg-primary/60 rounded-full`}>
          <LockIcon className={`${sizes[size]} stroke-2 stroke-primary-foreground`} />
        </div>
      </div>
    </div>
  )
}
