import { TTranslations } from "@/models/Utils";

const auth = {
  "password": "пароль",
  "sign in": "вход",
  "login": "вход",
  "use corporate email": "используйте корпоративный адрес",
  "forgot password": "забыли пароль",
  "email address": "адрес эл. почты",
  "enter password": "введите пароль",
  "repeat password": "повторите пароль",
  "come up with password": "придумайте пароль",
  "repeat invented password": "повторите придуманный пароль",
  "email": "почта",
  "don't have account": "нет аккаунта",
  "already have account": "у вас уже есть аккаунт",
  "create it": "создайте его",
  "registration": "регистрация",
  "name and surname": "имя и фамилия",
  "assylniyet zhetpisbayev": "асылниет жетписбаев",

  "password can't be shorter than 8 characters": "пароль должен быть не менее 8 символов",
  "password can't be longer than 20 characters": "пароль не может превышать 20 символов",
  "password should contain uppercase letter": "пароль должен содержать заглавную букву",
  "password should contain lowercase letter": "пароль должен содержать строчную букву",
  "password should contain number": "пароль должен содержать цифру",
  "passwords don't match": "пароли не совпадают",
  "enter correct data": "введите валидные данные",
  "enter correct email": "введите правильную почту",
  "use only latin letters": "используйте только латинские буквы",
  "enter name": "введите имя",
  "enter surname": "введите фамилию",
  "mail should be": "неправильный формат почты",
  "user with that email already exists": "пользователь с такой почтой уже существует",
  "invalid verification code": "неправильный код подтверждения",
  "user already verified": "верификация уже пройдена",
  "account not verified": "верификация не пройдена",
  "invalid email or password": "Неверный логин или пароль",
  "invalid password": "неверный пароль",
  "new password cannot be the same as the old one": "новый пароль не может быть таким же, как старый",

  // MessegeSentInfo
  "please, verify your email": "пожалуйста, подтвердите свой адрес электронной почты",
  "you're almost there": "ты почти у цели",
  "we sent verification email": "мы отправили электронное письмо с подтверждением",
  "just click on the link in the email to complete your registration": "просто нажмите на ссылку в электронном письме, чтобы завершить регистрацию",
  "if you don't see the email": "если вы не видите электронное письмо",
  "check your spam or junk": "проверьте свой спам или нежелательную почту",
  "didn't receive the email": "не получили электронное письмо",
  "resend email": "повторно отправить электронное письмо",
  "resend email in": "повторно отправить электронное письмо через",

  // useMessageSent
  "email not found": "адрес электронной почты не найден",
  "you will be redirected to the login page": "вы будете перенаправлены на страницу входа в систему",

  // components/auth/messageSent/form/useChangeEmailMutation
  "email changed": "адрес электронной почты изменен",
  "we have sent verification email to": "мы отправили электронное письмо с подтверждением по адресу",

  // recover/messageSent/MessageSentInfo
  "we sent an email to": "мы отправили электронное письмо по адресу",
  "just click on the link in the email to reset the password": "просто нажмите на ссылку в электронном письме, чтобы сбросить пароль",
  "change email": "изменить адрес электронной почты",

  // recover/newPassword/useRecoverNewPasswordFormMutation
  "password changed": "пароль изменен",
  "please, log back in": "пожалуйста, войдите снова в систему",

  // components/verify/useVerify
  "you will be redirected to the authorization page": "вы будете перенаправлены на страницу авторизации",
  "registration has been completed successfully": "регистрация успешно завершена",

  // components/verify/VerifyPage
  "verified": "проверено",
  "something went wrong": "что-то пошло не так",
  "verifying": "идет подтверждение",

};

const common = {
  // common/table/DataTable
  "columns": "столбцы",
  // DataTableContent
  "no results": "никаких результатов",
}

const organization = {
  // components/Organizations/category/table/columns
  "title": "название",
  "sphere": "сфера",
  "short name": "сокращение",
  "base": "база",
  "category": "категория",
  "role": "роль",

  // components/Organizations/organizations/table/OrganizationsTable
  "delete an organization?": "удалить организацию?",
  "this action will delete this organization and": "это действие приведет к удалению этой организации и",
  "all its sub-organizations": "все его подорганизации",

  "organizations": "организации",
  "categories": "категории",

  // component/Organizations/api
  "organization updated": "организация обновлена",
  "organization added": "организация добавлена",
  "organization deleted": "организация удалена",
}

const hook = {
  // hooks/useAuth
  "you need to login first": "сначала вам нужно войти в систему",
}

const base = {
  "continue": "продолжить",
  "is on": "включен",
  "show": "показать",
  "hide": "скрыть",
  "network error": "ошибка сети",
  "service is unavailable": "сервер недоступен",
  "record not found": "данные не найдены",
  "something went wrong": "что-то пошло не так",
  "unable to send email": "не получилось отправить письмо",
}

export const ru: TTranslations = {
  ...auth,
  ...common,
  ...organization,
  ...hook,
  ...base,
}