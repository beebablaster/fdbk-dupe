import { Breadcrumb, IBreadcrumb } from "@/components/common/Breadcrumb";
import { Routes } from "@/components/constants/routes";
import { TOrganization } from "@/models/Organization";

export const makeBreadcrumb = (organization: TOrganization, breadcrumbs: IBreadcrumb[], isRootAdded: boolean = false) => {
  if(!organization) return;

  if(!isRootAdded && organization.root) {
    if(organization.root.id !== organization.parent?.id) {
      breadcrumbs.push({
        title: organization.root.name,
        link: `${Routes.org._organization}/${organization.root.id}`,
      });
    }
    makeBreadcrumb(organization.parent!, breadcrumbs, true);
  } else {
    makeBreadcrumb(organization.parent!, breadcrumbs);
  }
  breadcrumbs.push({
    title: organization.name,
    link: `${Routes.org._organization}/${organization.id}`,
  });
}