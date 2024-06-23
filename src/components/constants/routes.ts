const authRoutes = {
  login: "/auth/login",
  messageSent: "/auth/messageSent",
  recover: "/auth/recover",
  signup: "/auth/signup",
  verify: "/auth/verify"
}

const organizationRoutes = {
  organizations: "/organization",
  _organization: "/organization",
}

const userRoutes = {
  user: "/user",
  _user: "/user",
}

export const Routes = {
  base: "/",
  auth: authRoutes,
  org: organizationRoutes,
  user: userRoutes,
  profile: '/profile'
} as const;


