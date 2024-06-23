import React from 'react'

type Props = {
  className?: string;
}

export const LogoStrokeIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg className={className} width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 9.03858V1H6.1371C2.34355 1.75027 1.13172 4.52805 1 5.82315V46.0161C1.00103 50.3033 9.03494 51.3751 10.879 48.0257L19.9677 29.537H35.5107V21.6324H17.4651C12.8285 21.6324 11.8011 28.3312 9.03494 33.1543V9.03858H50Z" className='transition-all' strokeLinejoin="round"/>
    </svg>
  )
}
