import React from "react";
import {StatCards} from "./StatCards";
import {Calendar} from "./Calendar";
import {BarChart} from "./BarChart";
import {ErrorFallback} from "../error/Error.fallback";
import {ErrorBoundary} from "react-error-boundary";
import useUserStore from "@/store/useUserStore";

//todo: remove all the bs code i wrote
export const HomePage: React.FC = () => {
  // const { user } = useAuth();
  const { user } = useUserStore();
  if(!user) return null;

  // switch(user.role) {
  //   case Roles.admin:
  //     return <div>ADMIN</div>
  //   case Roles.manager:
  //     return <div>MANAGER</div>
  // }
  //
  return(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <section className="flex flex-col-reverse justify-between flex-wrap-reverse md:flex-row max-w-[1050px] mx-auto mt-24">
        <div className="pt-1 flex-shrink">
          <div className="text-4xl font-bold">
            Привет, {user?.name}!
          </div>
          <div className="text-xl font-bold mt-10 mb-2">
            Статистика
          </div>
          <StatCards />
          <div className="text-xl font-bold mt-10 mb-4">
            Посещение занятий
          </div>
          <BarChart />
        </div>
        <div className="w-full lg:w-fit">
          <Calendar />
        </div>
      </section>
    </ErrorBoundary>
  )
}
