import {create} from 'zustand';
import {TUserDemo} from "@/models/User";
import {persist} from "zustand/middleware";

interface UserState {
    user: TUserDemo | null;
    setUser: (user: TUserDemo) => void;
    clearUser: () => void;
}

const useUserStore = create<UserState>()(persist(
    (set) => ({
        user: null,

        setUser: (user) => set({user}),

        clearUser: () => set({user: null})
    }),
    {
        name: 'user-storage',
        getStorage: () => localStorage
    }
));

export default useUserStore;