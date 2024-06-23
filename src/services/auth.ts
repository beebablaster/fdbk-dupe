import { TResponse } from "@/models/Status";
import { TChangeEmailProps, TForgotPasswordProps, TRegisterProps, TResendVerificationProps, TResetPasswordProps } from "@/models/Register";
import { TLoginProps, TLoginResponse } from "@/models/Login";
import { axiosInstance } from "./api";
import { links } from "@/components/constants/links";
import {TUserDemo} from "@/models/User";

//todo: remove all the bs code i wrote
class AuthAPI {
    private axios = axiosInstance(links.auth_service, false);
    private axiosWithAuth = axiosInstance(links.auth_service, true);

    register = async(params: TRegisterProps) => {
        const response = await this.axios.post<TResponse>('register', params);
        return response.data;
    }

    createReceiver = async(params: TRegisterProps) => {
        const response = await this.axiosWithAuth.post<TResponse>('createReceiver', params);
        return response.data;
    }

    createManager = async(params: TRegisterProps) => {
        const response = await this.axiosWithAuth.post<TResponse>('createManager', params);
        return response.data;
    }

    createAdmin = async(params: TRegisterProps) => {
        const response = await this.axiosWithAuth.post<TResponse>('createAdmin', params);
        return response.data;
    }

    verifyUser = async(code: string) => {
        const response = await this.axios.get<TLoginResponse>(`verifyEmail/${code}`);
        return response.data;
    }

    resendVerificationCode = async(params: TResendVerificationProps) => {
        const response = await this.axios.post<TResponse>('resendVerification', params);
        return response.data;
    }

    changeEmail = async(params: TChangeEmailProps) => {
        const response = await this.axios.post<TResponse>('changeEmail', params);
        return response.data;
    }

    forgotPassword = async(params: TForgotPasswordProps) => {
        const response = await this.axios.post<TResponse>('forgotPassword', params);
        return response.data;
    }

    resetPassword = async(params: TResetPasswordProps) => {
        const { token, ...props } = params;
        const response = await this.axios.post<TResponse>(`resetPassword/${token}`, props);
        return response.data;
    }

    login = async(params: TLoginProps) => {
        const response = await this.axios.post<TLoginResponse>('login', params);
        return response.data;
    }

    mockLogin = async(email: string): Promise<TUserDemo> => {
        const response = await this.axios.get(`https://my-json-server.typicode.com/beebablaster/demo/users/${email}`);
        return response.data;
    }
}

export const authAPI = new AuthAPI();