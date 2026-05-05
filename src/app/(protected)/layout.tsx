import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ({ children }: { children: React.ReactNode }) {
  const Backend_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const cookieStore = cookies();
  const cookieHeader = (await cookieStore).toString();

  const res = await fetch(`${Backend_URL}/auth/check`, {
    credentials: "include",
    headers: {
      Cookie: cookieHeader,
    },
    cache: "no-store",
  });

  if (res.ok) {
    redirect("/register");
  }

  const data = await res.json();
  if (!data.authenticated) {
    redirect("/");
  }

  return <>{children}</>;
}
