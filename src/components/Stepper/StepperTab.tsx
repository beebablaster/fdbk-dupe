import React from 'react'

interface Props {
  isActive: boolean;
  children: React.ReactNode;
  onMount?: () => void;
}

export const StepperTab: React.FC<Props> = ({ isActive, onMount, children }) => {
  React.useEffect(() => {
    if (isActive && onMount) {
      onMount();
    }
  }, [isActive, onMount]);
  return (
    <>
      {children}
    </>
  )
}
