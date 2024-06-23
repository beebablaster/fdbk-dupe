import {
  TEditUserProps,
  TGetUserReviewsDemoResponse,
  TGetUsersProps,
  TGetUsersResponse,
  TUser,
  TUserDemo,
  TUserResponse
} from "@/models/User";
import { axiosInstance } from "./api";
import { links } from "@/components/constants/links";

//todo: remove all the bs code i wrote
class UserAPI {
  private axios = axiosInstance(links.user_service);
  private axiosDemo = axiosInstance(links.user_service, false);
  me = async() => {
    const response = await this.axios.get<TUserResponse>('me');
    return response.data;
  }

  getUsers = async(params: TGetUsersProps) => {
    const response = await this.axios.get<TGetUsersResponse>('/', {
      params
    });
    return response.data;
  }

  getUser = async(id: TUser["id"]) => {
    const response = await this.axios.get<TGetUsersResponse>(`/${id}`);
    return response.data;
  }

  editUser = async(props: { id: TUser["id"], params: TEditUserProps }) => {
    const response = await this.axios.put<TGetUsersResponse>(`/${props.id}`, props.params);
    return response.data;
  }

  deleteUser = async(id: TUser["id"]) => {
    const response = await this.axios.delete<TGetUsersResponse>(`/${id}`);
    return response.data;
  }

  schedule = async() => {
    const response = await this.axios.get("mySchedule");
    return response.data;
  }

  getUserDemo = async(id: TUserDemo["id"]) => {
    const response = await this.axiosDemo.get(`http://localhost:8080/users/${id}`);
    return <TUserDemo>response.data;
  }

  getUserReviewsDemo = async(): Promise<TGetUserReviewsDemoResponse> => {
    const response = await this.axiosDemo.get(`https://demo-api.fdbk.kz/api/v1/feedback/get`);
    return response.data;
  }

  createUserReviewDemo = async(review: any) => {
    const response = await this.axiosDemo.post(`https://demo-api.fdbk.kz/api/v1/feedback/create`, review);
    return response.data;
  }
}

export const userAPI = new UserAPI();