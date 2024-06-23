import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useLanguage } from "@/locales/useLanguage"
import { ChangeEmailForm } from "./form/ChangeEmailForm"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { mediaQueries } from "@/components/constants/mediaQueries"
import { colors } from "@/components/constants/colors"

export const ChangeEmailDialog = () => {
  const translate = useLanguage();
  const [open, setOpen] = React.useState(false)
  const closeDialog = () => setOpen(false)
  const isDesktop = useMediaQuery(mediaQueries.isDesktop);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary">{translate("Change email")}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{translate("Change email")}</DialogTitle>
            <DialogDescription>
              {translate("Change your email address.")}
              {" "}
              {translate("We sill send you a verification link to your new address.")}
            </DialogDescription>
          </DialogHeader>
          <ChangeEmailForm closeDialog={closeDialog} />
        </DialogContent>
      </Dialog>
    )
  }
  
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="secondary">{translate("Change email")}</Button>
      </DrawerTrigger>
      <DrawerContent className="h-dvh max-h-[96dvh]">
        <DrawerHeader className="text-left">
          <DrawerTitle>{translate("Change email")}</DrawerTitle>
          <DrawerDescription>
            {translate("Change your email address.")}
            {" "}
            {translate("We sill send you a verification link to your new address.")}
          </DrawerDescription>
        </DrawerHeader>
        <ChangeEmailForm className="px-4 flex-1 flex flex-col" closeDialog={closeDialog} />
        <DrawerFooter className="pt-2 mt-auto">
          <DrawerClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
