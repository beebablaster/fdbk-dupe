import { Guide, guides } from "@/mock/guides"

export const searchGuides = (key: string) => {
  const filteredGuides = guides.filter(
    (guide) =>
      guide.title.toLowerCase().includes(key.toLowerCase()) ||
      guide.description.toLowerCase().includes(key.toLowerCase()) ||
      guide.content.some((step) =>
        step.title.toLowerCase().includes(key.toLowerCase())
      )
  )

  return filteredGuides;
}