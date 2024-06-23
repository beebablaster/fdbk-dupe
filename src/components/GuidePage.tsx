import { Guide } from "@/mock/guides"
import Image from "next/image"
import { ClockIcon, EyeIcon, CalendarIcon, ArrowLeftIcon } from "lucide-react"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShellLayout } from "@/components/Layout/ShellLayout";

type GuidePageComponentProps = {
  guide: Guide;
}

export const GuidePageComponent: React.FC<GuidePageComponentProps> = ({ guide }) => {
  return (
    <ShellLayout>
      <div key={guide.id} className="w-2/3 mx-auto flex flex-col gap-2 my-8">
          <Link href="/guide">
            <Button variant="secondary">
              <ArrowLeftIcon size={18} />
                Назад
            </Button>
          </Link>
          <div className="text-2xl font-semibold py-2 bg-background sticky top-0 left-0 z-10">
              {guide.title}
          </div>
          <span className="text-lg">{guide.description}</span>
          <div className="flex items-center gap-6">
            <div className="flex gap-1 items-center">
              <ClockIcon size={18} />
              <span>{guide.time_to_read} мин.</span>
            </div>
            <div className="flex gap-1 items-center">
              <EyeIcon size={18} />
              <span>{guide.views} </span>
            </div>
            <div className="flex gap-1 items-center">
              <CalendarIcon size={18} />
              <span>{guide.date}</span>
            </div>
          </div>
          <div className="w-full h-px bg-gray-300 my-2" />
          <div className="flex flex-col gap-6">
            {guide.content.map((step, index) => (
              <div key={index} className="w-full flex flex-col gap-1">
                <p className="text-lg font-bold">{step.title}</p>
                <p className="text-lg font-medium">{step.text}</p>
                <p>{step.summary}</p>
                {step.mediaSrc && (
                  <div className="w-full min-w-80 aspect-video relative">
                    <Image fill src={step.mediaSrc} alt={step.title} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
    </ShellLayout>
  )
}