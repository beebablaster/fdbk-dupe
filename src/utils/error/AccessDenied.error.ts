export class AccessDeniedError extends Error {
  constructor(message: string = "Access Denied", code: number = 403) {
    super(message, { cause: code })
    this.name = "AccessDeniedError"
  }
}