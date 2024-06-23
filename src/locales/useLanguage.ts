import React from "react";
import { useRouter } from "next/router";
import { languages } from "./languages";

type TMatchingType = "exact" | "startsWith" | "endsWith";

interface TranslateOptions {
  matchingType?: TMatchingType;
  isError?: boolean;
  capitalize?: boolean;
}

// Mainly done because of the default language (English) not having a dictionary.
// This way, even if we don't have a translation for a given key, we can still return a capitalized version of it.
const capitalize = (str: string, capitalize: boolean) => {
  if(!capitalize) return str;
  return str[0].toUpperCase() + str.slice(1);
}

/**
 * Returns a translation function based on the current locale.
 * @returns The translation function.
 */
export const useLanguage = () => {
  const { locale } = useRouter();

  /**
   * Translates a given key based on the current locale.
   * @param key - The key to be translated.
   * @param translateOptions - Optional translation options.
   * @param translateOptions.matchingType - The type of matching to be used for translation. Can be "startsWith", "endsWith", or undefined.
   * @param translateOptions.capitalize - Whether to capitalize the translated result. Defaults to false.
   * @returns The translated string.
   */
  const translate = React.useCallback((key: string, translateOptions?: TranslateOptions): string => {
    if(!key) return "";
    
    const language = languages[locale!];
    if(!language) return capitalize(key, translateOptions?.capitalize!);

    const dict = language.dict;
    if(!dict) return capitalize(key, translateOptions?.capitalize!);

    let translation: string | undefined;
    switch (translateOptions?.matchingType) {
      case "startsWith":
        translation = Object.keys(dict).find((dict_key) => key.toLowerCase().startsWith(dict_key.toLowerCase()));
        break
      case "endsWith":
        translation = Object.keys(dict).find((dict_key) => key.toLowerCase().endsWith(dict_key.toLowerCase()));
        break;
      default:
        translation = dict[key.toLowerCase()];
        break;
    }

    if(!translation) {
      if(translateOptions?.isError) return "Ooops, " + translate("Something went wrong");
      return capitalize(key, translateOptions?.capitalize!)
    }

    if(translateOptions?.capitalize || key[0].toUpperCase() === key[0]) {
      translation = capitalize(translation, true);
    }
    
    return translation;
  }, [locale]);
  
  return translate;
}