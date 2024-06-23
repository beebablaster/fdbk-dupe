import { generateRandomNumber } from "./randomNumber";

export const generatePassword = (length: number) => {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "0123456789";
  const charsets = [lower, upper, number];
  let password = "";
  for (let i = 0; i < length; i++) {
    const charsetIndex = generateRandomNumber(0, charsets.length - 1);
    const charset = charsets[charsetIndex];
    password += charset.charAt(generateRandomNumber(0, charset.length - 1));
  }
  return password;
}