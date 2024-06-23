import {RoleTypeDemo} from "@/components/constants/roles";
import {sidebarMiddleItems, sidebarTopItems} from "../items"

export const getBottomNavigationItems = (role: RoleTypeDemo) => {
  const topItems = sidebarTopItems[role].filter(item => item.showOnMobile);
  const middleItems = sidebarMiddleItems.filter(item => item.showOnMobile);

  const items = [...topItems, ...middleItems] as const;
  return items;
}