import React from "react";
import { useLanguage } from "@/locales/useLanguage";
import { Button } from "../ui/button";
import { useRouter } from "next/router";
import { Routes } from "@/components/constants/routes";
import Image from "next/image";
import Link from "next/link";

type Props = {
  error: Error;
  resetErrorBoundary: () => void;
}

export const ErrorFallback: React.FC<Props> = ({ error, resetErrorBoundary }) => {
  const translate = useLanguage();
  const { route, reload, events } = useRouter();

  React.useEffect(() => {
    events.on("routeChangeComplete", resetErrorBoundary);

    return () => {
      events.off("routeChangeComplete", resetErrorBoundary);
    };
  }, [events, resetErrorBoundary]);

  const errorMessage = translate(error.message || "Something went wrong");
  const status = error.cause as keyof typeof descriptions || 400 as keyof typeof descriptions;

  const isAuthError = status === 401;
  const isAccessError = status === 403;
  const isServerError = status === 503;

  const descriptions = {
    400: "Please, refresh page",
    401: "Please, log in to your account",
    403: "You don't have access to this page",
    503: "Server is down, try again after some time",
  } as const;

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      {!isAuthError && !isAccessError && !isServerError && 
        <Image src="/error/fall-down-light.png" width={270} height={270} alt={errorMessage} />
      }
      {isAuthError && 
        <Image src="/error/rocket-down-light.png" width={270} height={270} alt={errorMessage} />
      }
      {isAccessError && 
        <Image src="/error/cat-error-light.png" width={270} height={270} alt={errorMessage} />
      }
      {isServerError && 
        <Image src="/error/server-down-light.png" width={270} height={270} alt={errorMessage} />
      }
      <div className="text-4xl font-bold">
        {errorMessage}
      </div>
      <div className="text-2xl mt-4">
        {translate(descriptions[status])}
      </div>
      <div className="flex gap-3 items-center mt-10">
        {isAuthError ? (
          <LogInButton />
        ) : isAccessError ? (
          <GoToHomeButton />
        ) : (
          <Button>
            {translate("Try again")}
          </Button>
        )}
        {isAccessError && route !== Routes.base ? (
          <GoToHomeButton isSecondary={false} onClick={resetErrorBoundary} />
        ) : (
          <Button variant="secondary" onClick={() => reload()}>
            {translate("Refresh page")}
          </Button>
        )}
      </div>
    </div>
  )
}

const GoToHomeButton: React.FC<React.HTMLProps<HTMLAnchorElement> & { isSecondary?: boolean }> = ({ isSecondary = false, onClick }) => {
  const translate = useLanguage();

  return (
    <Link href={Routes.base} onClick={onClick}>
      <Button variant={isSecondary ? "secondary" : "default"}>
        {translate("Go to home")}
      </Button>
    </Link>
  )
}

const LogInButton: React.FC<React.HTMLProps<HTMLAnchorElement>> = ({ onClick }) => {
  const translate = useLanguage();

  return (
    <Link href={Routes.auth.login} onClick={onClick}>
      <Button variant="default">
        {translate("Log in")}
      </Button>
    </Link>
  )
}