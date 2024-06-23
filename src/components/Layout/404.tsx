import Link from "next/link"
import { Button } from "../ui/button"
import { Routes } from "../constants/routes"

export const NotFoundPage = () => {
  return(
    <section className="w-full min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-8xl font-bold text-background notfound">404</h1>
      <h1 className="text-2xl mb-4">Страница не найдена</h1>
      <Button asChild>
        <Link href={Routes.base}>
          На главную страницу
        </Link>
      </Button>
    </section>
  )
}