import { ReactNode } from "react";
import { BoxIcon, CalendarDaysIcon, SearchIcon, ScrollTextIcon, LogOutIcon, Building2Icon, User2Icon, LayoutPanelTopIcon, QrCodeIcon } from "lucide-react";
import { Routes } from "@/components/constants/routes";

//todo: remove all the bs code i wrote
export type TSidebarItems = {
  admin: readonly TSidebarItemProps[];
  teacher: readonly TSidebarItemProps[];
  student: readonly TSidebarItemProps[];
  manager: readonly TSidebarItemProps[];
}

export const hoverBgVariants = {
  "ghost": "hover:bg-background",
  "destructive": "hover:bg-destructive/30",
}

export type TSidebarItemMatchProp = "startsWith" | "exact" | undefined;
export type TSidebarItemVariantProp = keyof typeof hoverBgVariants;

export type TSidebarItemProps = {
  title: ReactNode;
  icon: ReactNode;
  href?: string;
  variant?: TSidebarItemVariantProp;
  match?: TSidebarItemMatchProp;
  showOnMobile?: boolean;
  onClick?: () => void;
}

export const sidebarTopItems: TSidebarItems = {
  admin: [
    {
      title: "Организации",
      href: Routes.org.organizations,
      match: "startsWith",
      icon: <Building2Icon className="group-[.active]:stroke-primary" width="1.5rem" />,
      showOnMobile: true,
    },
    {
      title: "Пользователи",
      href: "/admin/user",
      match: "startsWith",
      icon: <User2Icon className="group-[.active]:stroke-primary" width="1.5rem" />,
      showOnMobile: true,
    },
  ],
  student: [
    {
      title: "Главная",
      href: Routes.base,
      match: 'exact',
      icon: <BoxIcon className="group-[.active]:stroke-primary" width="1.5rem" />,
      showOnMobile: true,
    },
    {
      title: "Доска",
      href: "/dashboard",
      icon: <LayoutPanelTopIcon className="group-[.active]:stroke-primary" width="1.5rem" />,
      showOnMobile: true,
    },
    {
      title: "Расписание",
      href: "/schedule",
      icon: <CalendarDaysIcon className="group-[.active]:stroke-primary" width="1.5rem" />,
      showOnMobile: true,
    },
    {
      title: "Поиск",
      href: "/search",
      icon: <SearchIcon className="group-[.active]:stroke-primary" width="1.5rem" />,
      showOnMobile: true,
    },
  ],
  manager: [
    {
      title: "Главная",
      href: "/",
      match: "exact",
      icon: <BoxIcon className="group-[.active]:stroke-primary" width="1.5rem" />,
      showOnMobile: true,
    },
    {
      title: "Доска",
      href: "/dashboard",
      icon: <LayoutPanelTopIcon className="group-[.active]:stroke-primary" width="1.5rem" />,
      showOnMobile: true,
    },
    {
      title: "QR код",
      href: "/manager/qr",
      icon: <QrCodeIcon className="group-[.active]:stroke-primary" width="1.5rem" />,
      showOnMobile: true,
    },
  ],
  teacher: [
    {
      title: "Главная",
      href: "/",
      match: "exact",
      icon: <BoxIcon className="group-[.active]:stroke-primary" width="1.5rem" />,
      showOnMobile: true,
    },
    {
      title: "Доска",
      href: "/manager/dashboard",
      icon: <LayoutPanelTopIcon className="group-[.active]:stroke-primary" width="1.5rem" />,
      showOnMobile: true,
    },
    {
      title: "QR код",
      href: "/manager/qr",
      icon: <QrCodeIcon className="group-[.active]:stroke-primary" width="1.5rem" />,
      showOnMobile: true,
    },
  ],
} as const;

export const sidebarMiddleItems: readonly TSidebarItemProps[] = [
  {
    title: "Гайд",
    href: "/guide",
    icon: <ScrollTextIcon className="group-[.active]:stroke-primary" width="1.5rem" />,
    showOnMobile: true,
  },
] as const;

export const sidebarBottomItems: readonly TSidebarItemProps[] = [
  // {
  //     title: "Настройки",
  //     href: "/settings",
  //     icon: <CogIcon className="group-[.active]:stroke-primary" width="1.5rem" />,
  //     variant: "destructive",
  // },
  {
    title: "Выйти",
    href: Routes.auth.login,
    icon: <LogOutIcon className="group-[.active]:stroke-primary" width="1.5rem" />,
    variant: "destructive",
  },
] as const;