import { z } from "zod";
import { authSchema } from "../authSchema";

export const loginSchema = z.object({
  email: authSchema.email,
  password: authSchema.password,
});