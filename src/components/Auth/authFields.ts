import { IField, TAuthFormsKeys } from "./authForms";

export const authFields: { [key in TAuthFormsKeys | "passwordNew"]: IField } = {
  name: {
    name: 'name',
    label: 'Name and surname',
    placeholder: 'Assylniyet Zhetpisbayev',
    type: 'text',
  },
  email: {
    name: 'email',
    label: "Email address",
    placeholder: "Email",
    type: 'email',
    autoComplete: "email",
  },
  password: {
    name: 'password',
    label: "Password",
    placeholder: "Enter password",
    type: 'password',
    autoComplete: "current-password",
  },
  oldEmail: {
    name: 'oldEmail',
    label: "Old email",
    type: 'email',
    autoComplete: "off",
  },
  newEmail: {
    name: 'newEmail',
    label: "New email",
    placeholder: "Enter new email",
    type: 'email',
    autoComplete: "email",
  },
  passwordNew: {
    name: 'password',
    label: 'Пароль',
    placeholder: 'Come up with password',
    type: 'password',
    autoComplete: "new-password",
  },
  confirm: {
    name: 'confirm',
    label: 'Repeat password',
    placeholder: 'Repeat invented password',
    type: 'password',
    autoComplete: "off",
  }
} as const;