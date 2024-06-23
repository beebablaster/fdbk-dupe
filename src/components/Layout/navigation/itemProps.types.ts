import { TSidebarItemProps } from "./items";

export type TItemProps = IWithChildrenProps | IWithItemProps;

export interface IWithChildrenProps {
  asChild: true;
  children: React.ReactNode;
  href: string;
}

export interface IWithItemProps {
  asChild?: false;
  item: TSidebarItemProps;
  onClick?: () => void;
}