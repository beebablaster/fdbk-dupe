import { Roles, RoleType } from "@/components/constants/roles";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useUsersTableStore } from "../useUsersTableStore.hook";
import { useLanguage } from "@/locales/useLanguage";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const UsersTableAddProps = () => {
  const translate = useLanguage();
  const { 
    password, 
    setPassword, 
    passwordConfirm, 
    setPasswordConfirm, 
    setError,
    role,
    setRole
  } = useUsersTableStore();

  const roles = Object.keys(Roles).filter(key => key !== "admin") as RoleType[];

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if(e.target.value !== passwordConfirm) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  }

  const handlePasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
    if(password !== e.target.value) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  }
  return (
    <>
      <div className="grid items-center gap-2">
        <Label htmlFor="password" className="text-left">
          {translate("Password")}
        </Label>
        <div className="relative">
          <Input 
            id="password" 
            value={password}
            onChange={handlePasswordChange} 
            className="col-span-3" 
          />
        </div>
      </div>
      <div className="grid items-center gap-2">
        <Label htmlFor="passwordConfirm" className="text-left">
          {translate("Confirm Password")}
        </Label>
        <div className="relative">
          <Input 
            id="passwordConfirm" 
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange} 
            className="col-span-3" 
          />
        </div>
      </div>
      <div className="grid justify-start items-center gap-2">
        <Label htmlFor="role" className="text-left">
          {translate("Choose role")}
        </Label>
        <ToggleGroup 
          value={role} 
          onValueChange={(v) => setRole(v as RoleType)} 
          id='role' 
          type="single" 
          size="sm" 
          variant="outline"
        >
          {roles.map((role) => {
            return (
              <ToggleGroupItem 
                key={role} 
                value={role} 
                aria-label={`Toggle ${role}`}
              >
                {translate(role, { capitalize: true })}
              </ToggleGroupItem>
            )
          })}
        </ToggleGroup>
      </div>
    </>
)}