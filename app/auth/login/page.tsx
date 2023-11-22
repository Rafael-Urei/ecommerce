"use client";

import { Auth, authSchema } from "@/app/schemas/auth-schema";
import { ButtonComponent } from "../../components/buttons";
import { InputComponent } from "../../components/input";
import AuthLayout from "@/app/layouts/auth-layout";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Suspense } from "react";
import Loading from "../loading";

export default function AuthLoginPage() {
  const authMethods = useForm<Auth>({ resolver: yupResolver(authSchema) });

  const onSubmit = (data: Auth) => {
    console.log(data);
    console.log(authMethods.getValues("email"));
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <AuthLayout name="login" title="Sign In">
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
              <ButtonComponent type="submit" label="Login" />
            </form>
          </FormProvider>
        </AuthLayout>
      </Suspense>
    </>
  );
}
