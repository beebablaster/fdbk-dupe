import { z } from "zod";
import { authSchema } from "../../authSchema";

export const recoverPasswordSchema = z.object({
  email: authSchema.email
})