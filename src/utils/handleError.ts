import { TResponse } from "@/models/Status";
import { AxiosError } from "axios";
import { mathError } from "./errorMatcher";

export const handleError = (err: any, errorMatcher: {[key: string]: string}) => {
  const error: AxiosError<TResponse> = err as AxiosError<TResponse>;
    if (!error.response) {
    throw err
  }

  const { status, message } = error.response.data;
  
  return {
    status: status,
    message: mathError(errorMatcher, message),
  }
}
