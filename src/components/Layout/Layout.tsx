import React, { ReactNode } from "react";
import { Toaster } from "../ui/toaster";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../error/Error.fallback";
import { useTheme } from "next-themes";
import { colors } from "../constants/colors";

interface IProps {
  children: ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  const { resolvedTheme } = useTheme();
  React.useEffect(() => {
    const metaTag = document.querySelector('meta[name="theme-color"]');
    if (metaTag) {
      metaTag.setAttribute(
        "content",
        resolvedTheme === "dark"
          ? colors.background.dark
          : colors.background.light,
      );
    }
  }, [resolvedTheme]);
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main vaul-drawer-wrapper="">
        <Toaster />
        {children}
      </main>
    </ErrorBoundary>
  );
};
