import "server-only";

import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function getAdminUser() {
  await auth.protect();

  const user = await currentUser();

  if (user?.publicMetadata.role !== "admin") {
    return null;
  }

  return user;
}

export async function requireAdmin() {
  const user = await getAdminUser();

  if (!user) {
    redirect("/");
  }

  return user;
}
