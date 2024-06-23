import { z } from "zod";
import { authSchema } from "../authSchema";

export const signupSchema = z.object({
  password: authSchema.passwordCheck,
  confirm: authSchema.confirm,
  name: authSchema.nameCheck,
  email: authSchema.emailCheck,
}).refine((values) => values.password === values.confirm, {
  message: "Passwords don't match",
  path: ["confirm"],
});