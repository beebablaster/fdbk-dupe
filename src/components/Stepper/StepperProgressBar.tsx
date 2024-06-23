import React from "react";
import { ProgressBarStep } from "./ProgressBarStep";
import { useStepperContext } from "./StepperProvider";

interface IProps {
  className?: string;
}

export const StepperProgressBar: React.FC<IProps> = ({ className }) => {
  const { activeStep, steps } = useStepperContext();

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      const element = document.querySelector('.stepper')! as HTMLElement;
      const part = (100 / (steps.length));
      if (activeStep > 0) {
        element.style.setProperty('--primary-gradient', `${part * activeStep}%`);
        element.style.setProperty('--accent-gradient', `${part * (activeStep) + part + 10}%`);
      } else {
        element.style.setProperty('--primary-gradient', `${0}%`);
        element.style.setProperty('--accent-gradient', `${part * (activeStep + 1) + 10}%`);
      }
    }
  }, [activeStep, steps]);
  return (
    <div className={`stepper flex justify-between items-center w-full relative max-w-sm ${className}`}>
      {steps.map((value, index) => (
        <ProgressBarStep 
          key={index} 
          CircleIcon={steps[activeStep].progressBarCircle} 
          isPassed={activeStep > index} 
          isActive={activeStep === index} 
          title={value.title} 
        />
      ))}
    </div>
  )
}