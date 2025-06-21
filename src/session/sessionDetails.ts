"use server";

import { auth } from "@/auth";
interface User {
  name: string;
  email: string;
  image: string;
}
export async function SessionDetails() {
  const session = await auth();
  const user = session?.user as User | undefined;

  // const userName = user?.name;
  // const userEmail = user?.email;
  // const userImage = user?.image;
  return user;
}
