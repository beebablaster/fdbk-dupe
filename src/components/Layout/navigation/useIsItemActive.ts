import { useRouter } from "next/router";

export const useIsItemActive = (itemURL: string, match?: "exact" | "startsWith") => {
  const { pathname } = useRouter();
  const isActive = match === "exact" ? pathname === itemURL : pathname.startsWith(itemURL);
  return isActive;
}