import React from 'react'
import { LogoStrokeIcon } from '@/components/svg/LogoStrokeIcon';
import { useVerify } from './useVerify.hook';
import { useLanguage } from '@/locales/useLanguage';

export const VerifyPage = () => {
  const translate = useLanguage();
  const { status, error } = useVerify();

  const textVariants = { 
    success: translate('Verified'),
    error: `${translate(error?.message || 'Something went wrong.', { capitalize: true })}`,
    pending: `${translate('Verifying')} ...`,
  } as const;

  const classNameVariants = {
    success: 'fill-primary',
    error: 'fill-destructive error_bounce',
    pending: 'stroke-primary svgStrokeAnimation',
  } as const;
  
  return (
    <div className="h-screen w-full flex flex-col gap-3 justify-center items-center">
      <LogoStrokeIcon className={classNameVariants[status]} />
      <div className="text-2xl text-center px-2">
        {textVariants[status]}
      </div>
    </div>
  )
}
