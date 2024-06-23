import {TResponse} from "./Status";
import {TUser} from "./User";

export type TTodoState = "todo" | "planning" | "doing" | "done";

export type TTodoResult = {
  todo: TTodo,
  user_voted: boolean,
  vote_count: number,
}

export type TTodo = {
  ID: string;
  name: string;
  description: string;
  state: TTodoState;
  sender: TUser;
  sender_id: string;
  CreatedAt: string;
  organization_id: number;
}

export type TBoardColumn = {
  id: TTodoState;
  name: string;
  tasks: TTodoResult[];
}

export type TTodoResponse = TResponse & {
  data?: {
    todos: TBoardColumn[];
  }
}

export type TTodoEditProps = Pick<TTodo, "name" | "description" | "state">

export type TTodoInputProps = TTodoEditProps & Pick<TTodo, "organization_id">

export type TVoteInput = {
  todo_id: string;
}