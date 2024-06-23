import { TEditUserProps } from "./User";

export type TRegisterProps = TEditUserProps & {
    password: string,
    password_confirm: string,
    email: string,
}

export type TResendVerificationProps = {
    email: string,
}

export type TChangeEmailProps = {
    old_email: string,
    new_email: string,
    password: string,
}

export type TForgotPasswordProps = {
    email: string,
}

export type TResetPasswordProps = {
    token: string, 
    password: string,
    password_confirm: string,
}