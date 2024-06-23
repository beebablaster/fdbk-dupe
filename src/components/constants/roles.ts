export const Roles = {
  admin: 1,
  manager: 2,
  sender: 3,
  receiver: 4,
} as const;

export const RolesDemo = {
  admin: 1,
  manager: 2,
  student: 3,
  teacher: 4,
} as const;

export type RoleType = keyof typeof Roles;
export type RoleTypeDemo = keyof typeof RolesDemo;
