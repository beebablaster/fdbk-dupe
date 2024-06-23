import { TCategoriesResponse, TCategory, TCategoryInput, TCategoryResponse, TOrganization, TOrganizationEditProps, TOrganizationProps, TOrganizationResponse, TOrganizationsResponse } from "@/models/Organization";
import { axiosInstance } from "./api";
import { TResponse } from "@/models/Status";
import { links } from "@/components/constants/links";

class OrganizationAPI {
  private axios = axiosInstance(links.organization_service);

  getOrganizations = async() => {
    const response = await this.axios.get<TOrganizationsResponse>('/');
    return response.data;
  }

  getOrganization = async(id: TOrganization["id"]) => {
    const response = await this.axios.get<TOrganizationResponse>(`/${id}`);
    return response.data;
  }

  getSubOrganizations = async(props: {id: TOrganization["id"], level?: TOrganization["level"]}) => {
    if(props.level) {
      const response = await this.axios.get<TOrganizationsResponse>(`/${props.id}/sub`, {
        params: {
          level: props.level
        }
      });
      return response.data;
    } else {
      const response = await this.axios.get<TOrganizationsResponse>(`/${props.id}/sub`);
      return response.data;
    }
  }

  addOrganization = async(params: TOrganizationProps) => {
    const response = await this.axios.post<TOrganizationsResponse>(`/`, params);
    return response.data;
  }

  editOrganization = async(props: {id: TOrganization["id"], params: TOrganizationEditProps}) => {
    const response = await this.axios.put<TOrganizationsResponse>(`/${props.id}`, props.params);
    return response.data;
  }

  deleteOrganization = async(id: TOrganization["id"]) => {
    const response = await this.axios.delete<TResponse>(`/${id}`);
    return response.data;
  }
  
  getCategories = async() => {
    const response = await this.axios.get<TCategoriesResponse>('/category/');
    return response.data;
  }

  getCategory = async(id: TCategory["ID"]) => {
    const response = await this.axios.get<TCategoryResponse>(`/category/${id}`);
    return response.data;
  }

  addCategory = async(params: TCategoryInput) => {
    const response = await this.axios.post<TCategoryResponse>(`/category/`, params);
    return response.data;
  }

  editCategory = async(props: {id: TCategory["ID"], params: TCategoryInput}) => {
    const response = await this.axios.put<TCategoryResponse>(`/category/${props.id}`, props.params);
    return response.data;
  }

  deleteCategory = async(id: TCategory["ID"]) => {
    const response = await this.axios.delete<TResponse>(`/category/${id}`);
    return response.data;
  }
}

export const orgAPI = new OrganizationAPI();