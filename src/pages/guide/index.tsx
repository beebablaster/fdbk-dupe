import { ShellLayout } from "@/components/Layout/ShellLayout"
import { Input } from "@/components/ui/input"
import { guides } from "@/mock/guides"
import { searchGuides } from "@/utils/searchGuides"
import Link from "next/link"
import React from "react"

export default function GuidePage() {
  const [searchValue, setSearchValue] = React.useState<string>("")
  const [filteredGuides, setFilteredGuides] = React.useState(guides)

  React.useEffect(() => {
    setFilteredGuides(searchGuides(searchValue))
  }, [searchValue])
  return (
    <ShellLayout>
      <div className="mx-auto w-2/3 my-8">
        <p className="text-2xl font-bold w-screen mb-2">Часто задаваемые вопросы</p>
        <div className="py-2 bg-background sticky top-0 left-0">
          <Input placeholder="Поиск" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </div>
        <div className="mt-10">
          <p className={`transition-opacity ${searchValue && filteredGuides.length > 0 ? "" : "invisible opacity-0"}`}>
            Найдено
            <span className="font-bold"> {filteredGuides.length} </span>
            результатов
          </p>
          <div className="flex flex-wrap gap-2">
            {filteredGuides.length === 0 ? (
              <>
                <p>
                  К сожалению, по вашему запросу
                  <span className="font-bold"> {searchValue} </span>
                  ничего не найдено
                </p>
              </>
            ) : (<>
              {filteredGuides.map((guide) => (
                <Link href={`/guide/${guide.id}`} className="border p-4 flex-1 min-w-72 rounded-md transition-colors hover:bg-accent" key={guide.id}>
                  <p className="text-lg text-link mb-2">
                    {guide.title}
                  </p>
                  <p className="text-muted">{guide.description}</p>
                </Link>
              ))}
            </>)}
          </div>
        </div>
      </div>
    </ShellLayout>
  )
}