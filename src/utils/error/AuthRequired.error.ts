export class AuthRequiredError extends Error {
  constructor(message: string = "Authentication is required", code: number = 401) {
    super(message, { cause: code })
    this.name = "AuthRequiredError"
  }
}