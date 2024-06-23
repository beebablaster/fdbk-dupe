import React from "react";
import { useRouter } from "next/router";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, IBreadcrumb } from "@/components/common/Breadcrumb";
import { useAuth } from "@/hooks/useAuth";
import { ShellLayout } from "@/components/Layout/ShellLayout";
import { Routes } from "@/components/constants/routes";
import { Skeleton } from "@/components/ui/skeleton";
import { ImageLoader } from "@/components/common/ImageLoader";
import { OrganizationPageSkeleton } from "@/components/Organizations/organization/OrganizationPageSkeleton";
import { RateStar } from "@/components/Rating/RateStar";
import { TOrganization } from "@/models/Organization";
import { makeBreadcrumb } from "@/components/Organizations/organization/makeBreadcrumb.util";
import { BarChart } from "@/components/Home/BarChart";
import BarChart2 from "@/components/Home/BarChart2";
import { Button } from "@/components/ui/button";
import { RefreshCwIcon } from "lucide-react";
import { BarChatt3 } from "@/components/Home/BarChatt3";

export const organization: TOrganization = {
  name: "КБТУ",
  shortName: "КБТУ",
  photo: "img2.jpg",
  id: "",
  rating: {
    Count: 0,
    Rating: 0,
    Sum: 0
  },
  category: {
    ID: undefined,
    name: "Университет",
    field: "Университет"
  },
  category_id: 0,
  level: 0
}

export const UserDemo: React.FC = () => {
  const router = useRouter();
  const { user } = useAuth();
  const id = router.query.id! as string;
  const [rating, setRating] = React.useState<number>(3.4);
  
  let breadcrumbs: IBreadcrumb[] = [
    {
      link: Routes.org.organizations,
      title: "Пользователи",
    },
    {
      link: Routes.org.organizations,
      title: "Азамат Муратов",
    },
  ]
  

  const [isRefreshing, setIsRefreshing] = React.useState<boolean>(false);
  const onClick = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setRating(4.7);
    }, 2000);
  }
  
  return (
    <ShellLayout>
      <div className="w-full h-40 relative">
        <ImageLoader 
          src={
            `/organizations/${organization?.photo ?? "img7.jpg"}`
          } 
          fallback={
            <Skeleton className="w-full h-full rounded-md" />
          }
          alt={organization.shortName} 
          priority
        />
      </div>
      <div className="mt-2 mb-4">
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>
      <h1 className="text-4xl mb-4">Азамат Муратов</h1>
      <span className="text-lg mb-1 mr-2">
        @Almavalley, CEO & Founder
      </span>
      <div className="flex items-center gap-2 text-xl">
        <RateStar filled index={0} setRating={() => {}} size={20} />
        {rating}
        <Button onClick={onClick} size="icon" variant="outlineAccent">
          <RefreshCwIcon size={14} className={isRefreshing ? "animate-spin" : ""} />
        </Button>
      </div>

      <Separator className="mt-4" />
      <div className="py-4" />
      <div className="text-xl mb-6">Рейтинг пользователя</div>
      <div className="py-4" />
      <div className="flex" >
        <div className="flex-1">
          <BarChart />
        </div>
        <div className="flex-1">
          <BarChatt3 />
        </div>
      </div>
      {/* <h1 className="text-2xl mb-4 mt-8">Учителя</h1>
      <UserTable role={roles.receiver} org={organization?.ID} /> */}
    </ShellLayout>
  )
}
