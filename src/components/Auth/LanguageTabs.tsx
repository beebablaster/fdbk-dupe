import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/router";
import { languages } from "@/locales/languages";

export const LanguageTabs = () => {
  const { replace, pathname, asPath, query, locale } = useRouter();
  const switchLanguage = (locale: string) => {
    replace({ pathname, query }, asPath, { locale: locale })
  }

  return (
    <Tabs defaultValue={locale} className="max-w-[400px]">
      <TabsList>
        {Object.keys(languages).map((key) => (
          <TabsTrigger 
            key={key} 
            value={key} 
            onClick={() => switchLanguage(key)}
            className="min-w-[100px]"
          >
            {languages[key].name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}