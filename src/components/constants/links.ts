export const links = {
  origin:  process.env.NEXT_PUBLIC_ORIGIN || "http://localhost",
  auth_service: process.env.NEXT_PUBLIC_AUTH_SERVICE || "http://localhost",
  mail_service: process.env.NEXT_PUBLIC_MAIL_SERVICE || "http://localhost",
  user_service: process.env.NEXT_PUBLIC_USER_SERVICE || "http://localhost",
  organization_service: process.env.NEXT_PUBLIC_ORGANIZATION_SERVICE || "http://localhost",
  bonus_service: process.env.NEXT_PUBLIC_BONUS_SERVICE || "http://localhost",
  event_service: process.env.NEXT_PUBLIC_EVENT_SERVICE || "http://localhost",
  todo_service: process.env.NEXT_PUBLIC_TODO_SERVICE || "http://localhost",
}