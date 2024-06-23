import { TableDialogMode } from '@/models/Table';
import { TUser } from '@/models/User';
import { create } from 'zustand';
import { RoleType, Roles } from '../../constants/roles';

interface IUsersTableStore {
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
  dialogMode: TableDialogMode;
  selectedUser: TUser;
  setSelectedUser: (user: TUser) => void;
  alertOpen: boolean;
  setAlertOpen: (open: boolean) => void;
  openAlert: (user: TUser) => void;
  openDailog: (user: TUser, mode: TableDialogMode) => void;
  closeDialog: () => void;
  error: string;
  setError: (error: string) => void;
  password: string;
  setPassword: (password: string) => void;
  passwordConfirm: string;
  setPasswordConfirm: (password: string) => void;
  role: RoleType;
  setRole: (role: RoleType) => void;
}

export const useUsersTableStore = create<IUsersTableStore>((set) => ({
  dialogOpen: false,
  setDialogOpen: (open) => set({ 
    dialogOpen: open,
    password: "", 
    passwordConfirm: ""
  }),
  dialogMode: "add",
  selectedUser: {} as TUser,
  setSelectedUser: (user) => set({ selectedUser: user }),
  alertOpen: false,
  error: "",
  setError: (error) => set({ error: error }),
  setAlertOpen: (open) => set({ alertOpen: open }),
  openAlert: (user) => {
    set({ 
      selectedUser: user, 
      alertOpen: true 
    });
  },
  openDailog: (user, mode) => {
    set({ 
      dialogMode: mode,
      dialogOpen: true,
      selectedUser: user,
    })
  },
  closeDialog: () => {
    set({ 
      dialogOpen: false, 
      selectedUser: undefined,
      password: "", 
      passwordConfirm: ""
    });
  },
  password: "",
  setPassword: (password) => set({ password: password }),
  passwordConfirm: "",
  setPasswordConfirm: (password) => set({ passwordConfirm: password }),
  role: "manager",
  setRole: (role) => set({ role: role }),
}));