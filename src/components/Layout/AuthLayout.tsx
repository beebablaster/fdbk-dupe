import React, { ReactNode } from "react";
import { Logo } from "../common/Logo";
import Image from "next/image";

interface IProps {
  image: string;
  children: ReactNode;
}

export const AuthLayout: React.FC<IProps> = ({ image, children }) => {
  return (
    <div className="flex w-full justify-between">
      <aside className="bg-primary m-1 hidden w-1/3 flex-col items-center justify-center rounded lg:flex">
        <div className="mb-16">
          <Logo />
        </div>
        <div className="relative aspect-[1/1.2] w-full overflow-hidden">
          <Image
            className="object-contain"
            src={`/auth/${image}.png`}
            alt="some cool image"
            sizes="33vw"
            fill
            priority
          />
        </div>
      </aside>
      <div className="bg-background flex min-h-svh flex-1 flex-col items-center justify-center px-3 pb-2 pt-10">
        {children}
      </div>
    </div>
  );
};
