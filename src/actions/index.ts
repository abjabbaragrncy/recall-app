"use client";
import { signIn, signOut } from "next-auth/react";

export async function doSocialLogin(formData: object) {
  const action: string = formData.get("action");
  // console.log(formData);
  await signIn(action, { redirectTo: "/" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}