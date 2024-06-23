export class ServiceUnavailableError extends Error {
  constructor(message: string = "Service is unavailable", code: number = 503) {
    super(message, { cause: code })
    this.name = "ServiceUnavailableError"
  }
}