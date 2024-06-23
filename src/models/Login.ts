import { TResponse } from "./Status";
import { TRole } from "./User";

export type TLoginProps = {
  email: string;
  password: string;
}

export type TTokenResponse = {
  access_token: string;
  refresh_token: string;
  access_token_age: number;
  refresh_token_age: number;
}

export type TLoginResponse = TResponse & {
  data?: TTokenResponse & {
    role: TRole;
  }
}

export type TRefreshToken = Pick<TTokenResponse, "refresh_token">

export type TRefreshResponse = TResponse & {
  data: Pick<TTokenResponse, "access_token" | "access_token_age">;
}