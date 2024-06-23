import { z } from "zod";
import { authSchema } from "../../authSchema";

export const recoverNewPasswordSchema = z.object({
  password: authSchema.passwordCheck,
  confirm: authSchema.confirm
}).refine((values) => values.password === values.confirm, {
  message: "Passwords don't match",
  path: ["confirm"],
});