import Link from "next/link";
import { ButtonComponent } from "../components/buttons";
import { InputComponent } from "../components/input";
import { TodoLogo } from "../components/logo";

export default function AuthPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="h-auto md:h-[400px] md:w-[1000px] flex flex-col md:flex-row p-[5px] gap-5 shadow-md rounded-lg bg-[#FDFDFD]">
        <div className="h-full w-[400px] flex flex-col justify-between gap-2 py-5 bg-[#F2F7F9] rounded-[4px]">
          <h2 className="flex flex-col justify-self-end w-60 items-center">
            <span className="font-bold text-2xl text-[#FF83DC]">Welcome</span>
            <span className="font-bold text-[#D3DDEA]">
              to my and yours To Do.
            </span>
          </h2>
          <div className="flex justify-center">
            <TodoLogo />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[11px]">Already have an account?</span>
            <Link href="#" className="text-[11px] font-medium">
              Sign In
            </Link>
            <span>
              <Link href="#" className="text-[11px] text-[#35363A]">
                or Create your account
              </Link>
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col flex-1 items-center justify-between py-[31px] px-[35px] m-4 gap-8">
          <h1 className="text-2xl text-[#FF83DC] tracking-wider">Sign In</h1>
          <form className="w-full flex flex-col items-center justify-between gap-8">
            <InputComponent name="email" placeholder="user.example@gmail.com" />
            <InputComponent
              name="password_hash"
              placeholder="**********************"
            />
            <ButtonComponent type="submit" label="Login" />
          </form>
          <Link href="#" className="text-[10px] font-medium tracking-widest">
            Sign Up
          </Link>
        </div>
      </section>
    </main>
  );
}
