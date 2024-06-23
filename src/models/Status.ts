export type Status = "idle" | "error" | "success" | "pending";

export enum StatusEnum {
    IDLE = "idle",
    ERROR = "error",
    SUCCESS = "success",
    PENDING = "pending",
}

export type TResponse = {
    status: number,
    message?: string;
    feedPoints?: number;
}
