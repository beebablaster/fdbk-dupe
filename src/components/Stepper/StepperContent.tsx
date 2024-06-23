import React from 'react'
import { useStepperContext } from './StepperProvider';
import { StepperTab } from './StepperTab';

export const StepperContent = () => {
  const { steps, activeStep, ref, currentHeight } = useStepperContext();
  return (
    <div 
      className="w-full max-w-[25rem] overflow-hidden relative transition-all"
      style={{ height: `${currentHeight}px`, minHeight: '200px' }}
    >
      {steps.map((step, index) => (
        <div 
          key={index} 
          className={`absolute w-full transition-all ${index !== activeStep && "invisible"}`} 
          style={{ right: `calc(${(index - activeStep) * -100}%)`, top: "0" }}
          ref={index === activeStep ? ref : null}
        >
          <StepperTab isActive={index === activeStep} onMount={step.onMount}>
            {step.component}
          </StepperTab>
        </div>
      ))}
    </div>
  )
}
