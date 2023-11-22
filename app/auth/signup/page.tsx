"use client";

import { FormProvider, useForm } from "react-hook-form";
import { ButtonComponent } from "../../components/buttons";
import { InputComponent } from "../../components/input";
import AuthLayout from "@/app/layouts/auth-layout";
import { Auth, authSchema } from "@/app/schemas/auth-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Suspense } from "react";
import Loading from "../loading";

export default function AuthSignUpPage() {
  const authMethods = useForm<Auth>({ resolver: yupResolver(authSchema) });

  const onSubmit = (data: Auth) => {
    console.log(data);
  };

  return (
    <Suspense fallback={<Loading />}>
      <AuthLayout name="signup" title="Sign Up">
        <FormProvider {...authMethods}>
          <form
            onSubmit={authMethods.handleSubmit(onSubmit)}
            className="w-full flex flex-col items-center justify-between gap-8"
          >
            <InputComponent
              name="email"
              type="text"
              placeholder="user.example@gmail.com"
              error={!!authMethods.formState.errors?.email}
              helperText={authMethods.formState.errors.email?.message}
            />
            <InputComponent
              name="password_hash"
              type="password"
              placeholder="**********************"
              error={!!authMethods.formState.errors?.password_hash}
              helperText={authMethods.formState.errors.password_hash?.message}
            />
            <ButtonComponent type="submit" label="Register" />
          </form>
        </FormProvider>
      </AuthLayout>
    </Suspense>
  );
}
