import * as React from "react"
import { EyeIcon,EyeOffIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useLanguage } from "@/locales/useLanguage";
import { cn } from "@/utils/cn";


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", value, ...props }, ref) => {
    const [currentType, setCurrentType] = React.useState<React.HTMLInputTypeAttribute>(type);
    const onEyeClick = () => {
      setCurrentType(currentType === 'password' ? 'text' : 'password');
    }

    const translate = useLanguage();
    return (
      <>
        <input
          type={currentType}
          className={cn(
            type === 'password' && "pe-10",
            "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          value={value}
          {...props}
        />
        {type === 'password' && (
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button type="button" className="absolute top-1/2 -translate-y-1/2 right-1 cursor-pointer hover:bg-accent p-1.5 rounded-md no_highlights" tabIndex={0} onClick={onEyeClick}>
                  {currentType === 'password' ? <EyeIcon size={20} /> : <EyeOffIcon size={20} />}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                {translate(currentType === 'password' ? "Show" : "Hide")}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </>
    )
  }
)
Input.displayName = "Input"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, value, ...props }, ref) => {
    return (
      <div className="relative">
        <textarea
          className={cn(
            "flex h-20 w-full rounded-md border border-input bg-transparent px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          style={{
            minHeight: "4rem"
          }}
          ref={ref}
          value={value || ""}
          {...props}
        />
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Input, Textarea }
