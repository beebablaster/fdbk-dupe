import {authAPI} from "@/services/auth";
import {Routes} from "@/components/constants/routes";
import {useMutation} from "@tanstack/react-query";
import {useRouter} from "next/router";
import useUserStore from "@/store/useUserStore";
import * as z from "zod";
import {loginSchema} from "@/components/Auth/login/loginSchema";
import {useToast} from "@/hooks/useToast";
import {useLanguage} from "@/locales/useLanguage";

//todo: remove all the bs code i wrote
export const useLoginMutation = (setError: React.Dispatch<React.SetStateAction<string>>) => {
    const {push} = useRouter();

    const {setUser} = useUserStore();

    const translate = useLanguage();
    const {toast} = useToast();

    // const mutation = useMutation({
    //   mutationKey: ["auth", "login"],
    //   mutationFn: authAPI.login,
    //   onSuccess: (response) => {
    //     const data = response.data;
    //     const cookie = new Cookies();
    //     cookie.set("access_token", data?.access_token, { maxAge: data?.access_token_age, path: "/"});
    //     cookie.set("refresh_token", data?.refresh_token, { maxAge: data?.refresh_token_age, path: "/" });
    //
    //     push(Routes.base);
    //   },
    //   onError: (error, variables) => {
    //     if(error.message === "account not verified") {
    //       const mail = Buffer.from(variables.email).toString('base64');
    //       push({
    //         pathname: Routes.auth.messageSent,
    //         query: { email: mail }
    //       });
    //     }
    //     setError(error.message);
    //   }
    // });

    const mutation = useMutation({
        mutationKey: ["auth", "login"],
        mutationFn: async (values: z.infer<typeof loginSchema>) => {
            try {
                const user = await authAPI.mockLogin(values.email);
                if (user) {
                    if (user.password === values.password) {
                        setUser(user);
                        push(Routes.profile);
                    }
                }
            } catch (error: any) {
                setError(error.message);
                toast({
                    title: translate("Invalid email or password"),
                    variant: "destructive",
                })
            }
        }
    });

    return {mutation};
}
