import { ISteps, StepperContext } from '@/context/StepperContext';
import { StepperContextDevError } from '@/utils/error/StepperContext.dev.error';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

interface StepperProviderProps {
  children: React.ReactNode;
  steps: ISteps[];
}

export const StepperProvider: React.FC<StepperProviderProps> = ({ children, steps }) => {
  const { query, push } = useRouter();
  const activeStep = Number(query.step) || 0;
  const setActiveStep = (step: number, params?: {}) => {
    let queryParams = { ...query } as ParsedUrlQuery;
    if(params) queryParams = { ...queryParams, ...params } as ParsedUrlQuery
    queryParams.step = String(step);
    push({
      query: queryParams
    });
  }
  const [currentHeight, setCurrentHeight] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  const nextStep = (params?: {}) => {
    if(activeStep < steps.length - 1) setActiveStep(activeStep + 1, params);
  }

  const prevStep = (params?: {}) => {
    if(activeStep > 0) setActiveStep(activeStep - 1, params);
  }

  const resetStep = () => {
    setActiveStep(0);
  }

  React.useEffect(() => {
    if(ref.current) setCurrentHeight(ref.current.clientHeight);
  }, [activeStep])

  return (
    <StepperContext.Provider 
      value={{ activeStep, setActiveStep, nextStep, prevStep, resetStep, currentHeight, ref, steps }}
    >
      {children}
    </StepperContext.Provider>
  );
}

export const useStepperContext = () => {
  const context = React.useContext(StepperContext);
  if (context === undefined) {
    throw new StepperContextDevError;
  }

  return context;
}
