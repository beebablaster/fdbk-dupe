import { TResponse } from "./Status";

export type TOrganization = {
  id: string;
  name: string;
  rating: TRating;
  parent_id?: number;
  root_id?: number;
  parent?: TOrganization;
  root?: TOrganization;
  shortName: string;
  category: TCategory;
  category_id: number;
  level: number;
  email?: string;
  photo: string;
}

export type TRating = {
  Count: number;
  Rating: number;
  Sum: number;
}

export type TCategory = {
  ID?: number;
  name: string;
  field: string;
}

export type TCategoryInput = Omit<TCategory, "ID">;

export type TCategoryResponse = TResponse & {
  data?: TCategory,
}

export type TCategoriesResponse = TResponse & {
  data?: {
    localCategories: TCategory[],
    generalCategories: TCategory[],
  }
}

export type TOrganizationEditProps = Pick<
  TOrganization, 
  "name" | "shortName" | "category_id" | "email"
>

export type TOrganizationProps = TOrganizationEditProps & Pick<
  TOrganization, 
  "parent_id" | "photo"
>

export type TOrganizationResponse = TResponse & {
  data: TOrganization;
}

export type TOrganizationsResponse = TResponse & {
  data: TOrganization[];
}