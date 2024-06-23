import { z } from "zod";

export const authSchema = {
  email: z.string().email({ message: "Enter correct email" }).min(1, {message: "Enter email"}),
  password: z.string().min(1, {message: "Enter password"}),
  nameCheck: z.string().superRefine((fullName, ctx) => {
    const [name, surname] = fullName.split(" ");
    const nameRegex = /^[A-Z]([a-z]+)/;
    const surnameRegex = /^[A-Z][a-z]+$/;
    const allRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    const latinLettersRegex = /^[A-Za-z\s]+$/;

    if (name && !latinLettersRegex.test(fullName)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Use only Latin letters" });
      return z.NEVER;
    }
    
    if (!name) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Enter name" });
      return z.NEVER;
    }
    
    if (!surname) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Enter surname" });
      return z.NEVER;
    }
    
    if(!nameRegex.test(name) || !surnameRegex.test(surname) || !allRegex.test(fullName)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Enter correct data" });
      return z.NEVER;  
    }

    return true;
  }),
  emailCheck: z.string()
        .regex(/^[A-Za-z]+_[A-Za-z]+@kbtu\.kz$/, {message: "Enter correct email"}),
  passwordCheck: z.string()
        .min(8, {message: "Password can't be shorter than 8 characters"})
        .max(20, {message: "Password can't be longer than 20 characters"})
        .regex(/^.*[A-Z].*/, {message: "Password should contain uppercase letter"})
        .regex(/^.*[a-z].*/, {message: "Password should contain lowercase letter"})
        .regex(/^.*[0-9].*/, {message: "Password should contain number"}),
  confirm: z.string(),
};