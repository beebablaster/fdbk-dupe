import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/utils/cn"
import { CircleLoader } from "../common/CircleLoader"
import { Status, StatusEnum } from "@/models/Status"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center rounded-md text-sm font-medium transition ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none ring-offset-background group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary text-primary hover:bg-primary hover:text-primary-foreground disabled:border-muted disabled:text-muted",
        outlineAccent: 
          "border border-accent text-accent-foreground hover:bg-accent",
        secondary:
          "bg-accent text-accent-foreground hover:bg-accent/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-link h-auto",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        xsm: "h-7 px-2 rounded-md",
        icon: "h-10 w-10",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean,
  state?: Status,
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, state = StatusEnum.IDLE, ...props }, ref) => {
    const [buttonState, setButtonState] = React.useState<Status>(state);

    const isPending = buttonState === StatusEnum.PENDING;
    React.useEffect(() => {
      setButtonState(state);
      if(state === StatusEnum.IDLE) {
        setTimeout(() => {
          setButtonState(StatusEnum.IDLE);
        }, 500);
      }
    }, [state])
    const Comp = asChild ? Slot : "button"
    return (
        <Comp
          className={cn(
            isPending && "opacity-50 pointer-events-none",
            buttonState === StatusEnum.ERROR && "error_bounce",
            buttonVariants({ variant, size, className })
          )}
          ref={ref}
          {...props}
        >
          <>
            <div className={`flex items-center justify-center gap-1 ${isPending ? 'opacity-0 invisible' : ''}`}>
              {props.children}
            </div>
            {isPending && (
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <CircleLoader variant={variant!} />
              </div>
            )}
          </>
        </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
