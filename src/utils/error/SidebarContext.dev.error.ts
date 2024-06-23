export class SidebarContextDevError extends Error {
  constructor(message: string = "useSidebarContext must be used within a SidebarProvider") {
    super(message)
    this.name = "SidebarContextDevError"
  }
}