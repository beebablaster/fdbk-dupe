import { TTranslations } from "@/models/Utils";
import { kz } from "./translations/kz";
import { ru } from "./translations/ru";

interface ILanguage {
  [key: string]: {
    name: string;
    dict?: TTranslations,
  }
}

export const languages: ILanguage = {
  kz: {
    name: "Қазақша",
    dict: kz,
  },
  ru: {
    name: "Русский",
    dict: ru,
  },
  en: {
    name: "English",
  }
};