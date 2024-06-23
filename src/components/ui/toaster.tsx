import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  ToastDuration,
  ToastAction
} from "@/components/ui/toast"
import { useToast } from "@/hooks/useToast"

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider swipeDirection="up">
      {toasts.map(function ({ id, title, description, action, actionText, onActionClick, altText, className, ...props }) {
        return (
          <Toast key={id} className={`flex flex-col md:flex-row items-start md:items-end justify-between gap-3 ${className}`} {...props}>
            <div className="grid gap-2">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            <ToastClose />
            {actionText && <ToastAction onClick={onActionClick} altText={altText!}>{actionText}</ToastAction>}
            <ToastDuration duration={props.duration}></ToastDuration>
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
