import { ButtonComponent } from "../../components/buttons";
import { InputComponent } from "../../components/input";
import AuthLayout from "@/app/layouts/auth-layout";

export default function AuthSignUpPage() {
  return (
    <AuthLayout name="signup" title="Sign Up">
      <form className="w-full flex flex-col items-center justify-between gap-8">
        <InputComponent name="email" placeholder="user.example@gmail.com" />
        <InputComponent
          name="password_hash"
          placeholder="**********************"
        />
        <ButtonComponent type="submit" label="Register" />
      </form>
    </AuthLayout>
  );
}
