import {create} from 'zustand';
import {persist} from "zustand/middleware";
import {TTodo} from "@/models/Todo";

interface TodosState {
    todos: any[] | [];
    setTodos: (todos: any[]) => void;
    createTodo: (todo: any) => void;
    deleteTodo: (todo: any) => void;
    editTodo: (params: any) => void;
    vote: (todo: any) => void;
}

const useTodosStore = create<any>()(persist(
    (set) => ({
        todos: [],

        setTodos: (todos: any) => set(todos),

        createTodo: (todo: any) => set({todo}),

        deleteTodo: (todo: any) => set({todo: null}),

        editTodo: (params: any) => set({}),

        vote: (todo: any) => set({})
    }),
    {
        name: 'todos-storage',
        getStorage: () => localStorage
    }
));

export default useTodosStore;