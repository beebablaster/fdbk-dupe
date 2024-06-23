import { TCategory } from "@/models/Organization";

type InputType = {
  label: string;
  id: keyof Pick<TCategory, "name" | "field">;
}

export const categoryTableDialogInputs: InputType[] = [
  {
    label: "Название",
    id: "name"
  },
  {
    label: "Сфера",
    id: "field"
  },
]