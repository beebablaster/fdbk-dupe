import { TTranslations } from "@/models/Utils";

// !

const auth = {
  "password": "құпиясөз",
  "sign in": "кіру",
  "login": "кіру",
  "use corporate email": "корпоративті поштаңызды қолданыңыз",
  "forgot password": "құпиясөзді ұмыттыңыз ба",
  "email address": "электронды пошта",
  "enter password": "құпиясөзді еңгізіңіз",
  "email": "пошта",
  "don't have account": "аккаунтыңыз жоқ па",
  "create it": "жаңасын ашыңыз",
  "repeat password": "құпиясөзді қайталаңыз",
  "come up with password": "құпиясөзді ойлап табыңыз",
  "repeat invented password": "ойлап тапқан құпиясөзді қайталаңыз",
  "already have account": "cізде аккаунт бар ма",
  "registration": "тіркелу",
  "name and surname": "аты - жөні",
  "assylniyet zhetpisbayev": "асылниет жетпісбаев",

  "password can't be shorter than 8 characters": "құпиясөз кем дегенде 8 таңбадан тұруы керек",
  "password can't be longer than 20 characters": "құпиясөз 20 таңбадан аспауы керек",
  "password should contain uppercase letter": "құпиясөзде бас әріп болуы керек",
  "password should contain lowercase letter": "құпиясөзде кіші әріп болуы керек",
  "password should contain number": "құпиясөзде сан болуы керек",
  "passwords don't match": "құпиясөздер бірдей емес",
  "enter correct data": "жарамды деректерді енгізіңіз",
  "enter correct email": "дұрыс поштаны енгізіңіз",
  "use only latin letters": "тек латын әріптерін қолданыңыз",
  "enter name": "атынызды енгізіңіз",
  "enter surname": "фамилияны енгізіңіз",
  "mail should be": "пошта болуы керек",
  "user with that email already exists": "мұндай поштасы бар пайдаланушы тіркелген",
  "invalid verification code": "растау коды қате",
  "user already verified": "тексеруден өтті",
  "account not verified": "тексеруден өткен жоқ",
  "invalid email or password": "Қате пошта немесе құпияөз",
  "invalid password": "құпиясөз дұрыс емес",

  // MessegeSentInfo
  "please, verify your email": "электрондық поштаңызды растаңыз",
  "you're almost there": "сіз мақсатсыңызға жетіп қалдыңыз",
  "we sent verification email": "біз растау электрондық поштасын жібердік",
  "just click on the link in the email to complete your registration": "тіркеуді аяқтау үшін электрондық поштадағы сілтемені басыңыз",
  "if you don't see the email": "егер сіз электрондық поштаны көрмесеңіз",
  "check your spam or junk": "спамды немесе қалаусыз поштаны тексеріңіз",
  "didn't receive the email": "электрондық поштаны алмадыңыз ба",
  "resend email": "электрондық поштаны қайта жіберіңіз",
  "resend email in": "электрондық поштаны қайта жіберіңіз",

  // useMessageSent
  "email not found": "электрондық пошта табылмады",
  "you will be redirected to the login page": "сіз кіру бетіне қайта бағытталасыз",

  // components/auth/messageSent/form/useChangeEmailMutation
  "email changed": "электрондық пошта өзгертілді",
  "we have sent verification email to": "біз растау электрондық поштасын жібердік",

  // recover/messageSent/MessageSentInfo
  "we sent an email to": "біз электрондық поштаны жібердік",
  "just click on the link in the email to reset the password": "құпиясөзді қалпына келтіру үшін электрондық поштадағы сілтемені басыңыз",
  "change email": "электрондық поштаны өзгерту",

  // recover/newPassword/useRecoverNewPasswordFormMutation
  "password changed": "құпиясөз өзгертілді",
  "please, log back in": "жүйеге қайта кіріңіз",

  // components/verify/useVerify
  "you will be redirected to the authorization page": "сіз авторизация бетіне қайта бағытталасыз",
  "registration has been completed successfully": "тіркеу сәтті аяқталды",

  // components/verify/VerifyPage
  "verified": "тексерілді",
  "something went wrong": "бірдеңе дұрыс болмады",
  "verifying": "растаудамыз",

  // component/Organizations/api/useEditOrganizationMutation
  "organization updated": "ұйым жаңартылды",
};

const common = {
  // common/table/DataTable
  "columns": "бағандар",
  // DataTableContent
  "no results": "нәтиже жоқ",
}

const organization = {
  // components/Organizations/category/table/columns
  "title": "атауы",
  "sphere": "сфера",
  "short name": "қысқа аты",
  "base": "база",
  "category": "санат",
  "role": "рөлі",

  // components/Organizations/organizations/table/OrganizationsTable.tsx
  "delete an organization": "ұйымды жою керек пе",
  "this action will delete this organization and": "бұл әрекет осы ұйымның жойылуына әкеледі және",
  "all its sub-organizations": "оның барлық кіші ұйымдары",

  "organizations": "ұйымдар",
  "categories": "санаттар",

  // component/Organizations/api
  "organization updated": "ұйым жаңартылды",
  "organization added": "ұйым қосылды",
  "organization deleted": "ұйым жойылды",
}

const hook = {
  // hooks/useAuth
  "you need to login first": "алдымен жүйеге кіру керек",
}

const base = {
  "continue": "жалғастыру",
  "is on": "қосылған",
  "show": "көрсету",
  "hide": "жасыру",
  "network error": "желідегі қате",
  "service is unavailable": "сервер қол жетімді емес",
  "record not found": "деректер табылмады",
  "something went wrong": "бірдеңе дұрыс болмады",
  "unable to send email": "хат жіберу мүмкін болмады",
}

export const kz: TTranslations = {
  ...auth,
  ...common,
  ...organization,
  ...hook,
  ...base,
}