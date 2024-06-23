import { z } from "zod";
import { loginSchema } from "./login/loginSchema";
import { changeEmailSchema } from "./messageSent/form/changeEmailSchema";
import { recoverNewPasswordSchema } from "./recover/newPassword/recoverNewPasswordSchema";
import { recoverPasswordSchema } from "./recover/password/recoverPasswordSchema";
import { signupSchema } from "./signup/signupSchema";
import { InputHTMLAttributes } from "react";

export type TAuthForms = 
  z.infer<typeof loginSchema> &
  z.infer<typeof signupSchema> &
  z.infer<typeof recoverNewPasswordSchema> &
  z.infer<typeof recoverPasswordSchema> &
  z.infer<typeof changeEmailSchema>;

export type TAuthForm = 
  z.infer<typeof loginSchema> |
  z.infer<typeof signupSchema> |
  z.infer<typeof recoverNewPasswordSchema> |
  z.infer<typeof recoverPasswordSchema> |
  z.infer<typeof changeEmailSchema>;

export type TAuthFormsKeys = keyof TAuthForms;

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
  name: TAuthFormsKeys,
  label: string;
}

export interface IFields {
  [key: string]: IField
}