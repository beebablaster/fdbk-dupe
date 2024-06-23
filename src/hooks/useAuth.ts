import Cookies from "universal-cookie";
import {useToast} from "./useToast";
import {useLanguage} from "@/locales/useLanguage";
import {useRouter} from "next/router";
import {Routes} from "@/components/constants/routes";
import {RoleType} from "@/components/constants/roles";
import {AccessDeniedError} from "@/utils/error/AccessDenied.error";
import {TUser} from "@/models/User";
import {organization} from "@/models/userDemo";

type useAuthOptions = {
    requireAuth?: boolean | RoleType[];
    userId?: string
}

//todo: remove all the bs code i wrote

export const useAuth = ({requireAuth = false, userId = ''}: useAuthOptions = {}) => {
    const translate = useLanguage();

    const {toast} = useToast();
    const {push, pathname} = useRouter();

    const cookie = new Cookies();
    const refreshToken = cookie.get("refresh_token");
    const isAuthenticated = !!refreshToken;
    const authRequired = requireAuth || Array.isArray(requireAuth) && requireAuth.length > 0;
    const winReady = typeof window !== "undefined";

    // const { data: response, status } = useGetMe(!!refreshToken);
    // const user = response?.data;

    // const user = useGetUserDemo(userId).data;

    const user: TUser = {
      id: "123131",
      name: "Azamat",
      surname: "Muratov",
      email: "a.muratov@kbtu.kz",
      role: {
        id: 1,
        name: "manager"
      },
      role_id: 1,
      root_organization: organization,
      root_organization_id: "12312",
      organizations: [
        organization,
      ],
      photo: "img2.jpg",
      provider: "admin",
    }

    const logout = () => {
        // clearUser();
        cookie.remove("refresh_token");
        cookie.remove("access_token");
    }

    if (winReady) {
        if (authRequired && user && isRoleIncluded(requireAuth, user.role.name)) {
            throw new AccessDeniedError();
        }

        if (authRequired && !isAuthenticated) {
            toast({
                title: translate("You need to login first"),
                variant: "destructive",
            })
            push(Routes.auth.login);
        }
    }


    // React.useEffect(() => {
    //   if(status === StatusEnum.ERROR) {
    //     throw new AuthRequiredError();
    //   }
    // }, [status]);

    return { user, logout, isAuthenticated };
}

const isRoleIncluded = (roles: boolean | RoleType[], userRole: RoleType) => {
    return roles && Array.isArray(roles) && !roles.includes(userRole)
}