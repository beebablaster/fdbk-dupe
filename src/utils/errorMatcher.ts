export const mathError = (matcher: {[key: string]: string}, text: string | undefined): string => {
  if(text) {
    const message = Object.keys(matcher).find((key) => text.startsWith(key));
    if (message && matcher[message]) return matcher[message];
  }
  return "Что-то пошло не так";
}