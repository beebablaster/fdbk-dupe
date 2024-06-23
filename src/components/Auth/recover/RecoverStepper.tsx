import React from 'react'
import { StepperProgressBar } from '@/components/Stepper/StepperProgressBar';
import { useStepperContext } from '@/components/Stepper/StepperProvider';
import { useLanguage } from '@/locales/useLanguage';
import { StepperContent } from '@/components/Stepper/StepperContent';

export const RecoverStepper = () => {
  const translate = useLanguage();
  const { steps, activeStep } = useStepperContext();

  return (
    <>
      <span className="font-bold text-xl">{translate("Recover password")}</span>
        <span className="mb-8">{translate(steps[activeStep].title)}</span>
        <StepperProgressBar className="mb-12" />
        <StepperContent />
    </>
  )
}
