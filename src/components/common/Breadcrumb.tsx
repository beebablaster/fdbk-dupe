import Link from "next/link";
import React from "react";

export interface IBreadcrumb {
  link: string;
  title: string;
}

interface IProps {
  breadcrumbs: IBreadcrumb[];
}

export const Breadcrumb: React.FC<IProps> = ({ breadcrumbs }) => {
  return (
    <div className="text-sm">
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index}>
          {index !== breadcrumbs.length - 1 ? (
            <>
              <Link href={breadcrumb.link} className="hover:underline">
                {breadcrumb.title}
              </Link>
              <span className="px-1">
                /
              </span>
            </>
          ) : (
            <span className="text-muted">
              {breadcrumb.title}
            </span>
          )}
        </span>
      ))}
    </div>
  )
}