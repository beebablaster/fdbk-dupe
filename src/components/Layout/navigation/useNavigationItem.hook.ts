import { IWithChildrenProps, IWithItemProps, TItemProps } from "./itemProps.types";
import { TSidebarItemMatchProp, TSidebarItemVariantProp, hoverBgVariants } from "./items";
import { useIsItemActive } from "./useIsItemActive";

export const useNavigationItem = (props: TItemProps) => {
  const { asChild } = props;
  let href: string | undefined, 
      match: TSidebarItemMatchProp = "exact", 
      variant: TSidebarItemVariantProp | undefined, 
      _children: React.ReactNode, 
      title: React.ReactNode,
      componentProps: any = {};

  if(asChild) {
    const _props = props as IWithChildrenProps;
    href = _props.href;
    _children = props.children;
  } else {
    const _props = props as IWithItemProps;
    const { item, onClick } = _props;
    ({ href, match, variant, title } = item);
    _children = item.icon;
    componentProps = { onClick, ...item };
  }

  const isActive = useIsItemActive(href!, match);
  const hoverBg = hoverBgVariants[variant || "ghost"];

  return { isActive, hoverBg, href, children: _children, title, componentProps }
}