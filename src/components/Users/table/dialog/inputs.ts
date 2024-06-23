import { TUser } from "@/models/User"

type InputType = {
  label: string;
  id: keyof Pick<TUser, "name" | "surname" | "email">;
}

export const usersTableDialogInputs: InputType[] = [
  {
    label: "Имя и фамилия",
    id: "name"
  },
  {
    label: "Почта",
    id: "email"
  }
]