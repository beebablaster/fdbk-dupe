export class StepperContextDevError extends Error {
  constructor(message: string = "useStepperContext must be used within a StepperProvider") {
    super(message)
    this.name = "StepperContextDevError"
  }
}