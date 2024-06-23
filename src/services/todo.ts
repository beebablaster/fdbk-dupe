import { TTodoEditProps, TTodoInputProps, TTodoResponse, TVoteInput } from "@/models/Todo";
import { axiosInstance } from "./api";
import { links } from "@/components/constants/links";

class TodoAPI {
  private axios = axiosInstance(links.todo_service);

  getTodos = async(orgId: number) => {
    const response = await this.axios.get<TTodoResponse>(`/${orgId}`);
    return response;
  }

  createTodo = async(params: TTodoInputProps) => {
    const response = await this.axios.post<TTodoResponse>(`/`, params);
    return response;
  }

  vote = async(params: TVoteInput) => {
    const response = await this.axios.post<TTodoResponse>(`/vote`, params);
    return response;
  }

  editTodo = async(id: string, params: TTodoEditProps) => {
    const response = await this.axios.put<TTodoResponse>(`/${id}`, params);
    return response;
  }

  deleteTodo = async(id: string) => {
    const response = await this.axios.delete<TTodoResponse>(`/${id}`);
    return response;
  }

  getTodosDemo = async() => {
    const response = await this.axios.get<TTodoResponse>(`https://my-json-server.typicode.com/beebablaster/demo/kanban/`);
    console.log(response)
    return response;
  }

  createTodoDemo = async(todo: any) => {
    const response = await this.axios.post(`https://my-json-server.typicode.com/beebablaster/demo/kanban/`, todo);
    return response;
  }
}

export const todoAPI = new TodoAPI();