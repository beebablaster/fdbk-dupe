"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/utils/cn"
import { generateGradient } from "@/utils/randomGradient"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full mb-8 border-white border-4",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => {
  return (<AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full",
      className
    )}
    {...props}
  />)
})
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

interface ICircleAvatarProps {
  firstName?: string; 
  lastName?: string;
  className?: string;
}

const CircleAvatar: React.FC<ICircleAvatarProps> = ({ firstName, lastName, className }) => {
  return(
    <Avatar className={cn(className)}>
      <AvatarFallback style={{
          background: generateGradient(firstName, lastName)
      }}>
        {firstName && firstName[0].toUpperCase()}
        {lastName && lastName[0].toUpperCase()}
      </AvatarFallback>
    </Avatar>
  )
}

export { Avatar, AvatarImage, AvatarFallback, CircleAvatar }
