import { z } from "zod";
import { authSchema } from "../../authSchema";

export const changeEmailSchema = z.object({
  oldEmail: authSchema.email,
  newEmail: authSchema.emailCheck,
  password: authSchema.password,
}).refine(data => data.oldEmail !== data.newEmail, {
    message: "New email must be different from old email",
    path: ["newEmail"],
});