"use server";

import { signIn, signOut } from "../../auth";

export async function doSocialLogin(formData) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/home" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}

export async function doCredentialLogin(formData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
      redirect: false,
    });
    return response;
  } catch (err) {
    throw new Error(err);
  }
}
