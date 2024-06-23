import React, { ReactNode } from "react";

interface IStepperContext {
  activeStep: number;
  setActiveStep: (step: number, params?: {}) => void;
  resetStep: () => void;
  nextStep: (params?: {})=> void;
  prevStep: (params?: {})=> void;
  currentHeight: number,
  ref: React.RefObject<HTMLDivElement>,
  steps: ISteps[],
}

export interface ISteps {
  component: React.ReactNode;
  title: string;
  progressBarCircle?: ReactNode;
  onMount?: () => void;
}

export const StepperContext = React.createContext<IStepperContext | undefined>(undefined);