import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
import { CheckCircle2Icon, AlertCircleIcon } from "lucide-react"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"

import { cn } from "@/utils/cn"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/locales/useLanguage"

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName,
  validation: boolean,
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  validation = false,
  ...props
}: ControllerProps<TFieldValues, TName> & { validation?: boolean }) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name, validation }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState, getValues } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)
  const value = getValues(fieldContext.name);
  const validation = fieldContext.validation;

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    value,
    validation,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn(className, "grid items-center")} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", "transition-all ease-in-out", className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ className, ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId, value, validation } = useFormField()

  return (
    <div className="relative">
      <Slot
        ref={ref}
        id={formItemId}
        className={cn(error && "border-destructive","transition ease-in-out bg-background", className)}
        aria-describedby={
          !error
            ? `${formDescriptionId}`
            : `${formDescriptionId} ${formMessageId}`
        }
        aria-invalid={!!error}
        {...props}
      />
      {validation && (
        <>
          <AlertCircleIcon 
            size="1.5rem"
            className={cn(error ? "top-1/2 opacity-1" : "invisible opacity-0 top-0",
            "absolute transition-all ease-in-out fill-destructive stroke-background -translate-x-1/2 -translate-y-1/2")} />
          <CheckCircle2Icon 
            size="1.5rem"
            className={cn(value && !error ? "top-1/2 opacity-1" : "invisible opacity-0 top-0", 
            "absolute transition-all ease-in-out fill-success stroke-background -translate-x-1/2 -translate-y-1/2")} />
        </>
        )}
    </div>
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground transition ease-in-out", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const translate = useLanguage();
  const { error, formMessageId } = useFormField()
  const body = String(error?.message)

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn(!error && "invisible","text-sm text-destructive transition ease-in-out", className)}
      {...props}
    >
      {translate(body)}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
