export class ThemeContextDevError extends Error {
  constructor(message: string = "useThemeContext must be used within a ThemeProvider") {
    super(message)
    this.name = "ThemeContextDevError"
  }
}