import { TOrganization } from "@/models/Organization";

type InputType = {
  label: string;
  id: keyof Pick<TOrganization, "name" | "shortName" | "email">;
}

export const organizationsTableDialogInputs: InputType[] = [
  {
    label: "Название",
    id: "name"
  },
  {
    label: "Короткое название",
    id: "shortName"
  },
  {
    label: "Шаблон почты",
    id: "email"
  }
]