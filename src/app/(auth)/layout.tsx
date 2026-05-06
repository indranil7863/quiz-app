import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ({ children }: { children: React.ReactNode }) {
  const Backend_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  const res = await fetch(`${Backend_URL}/auth/check`, {
    headers: {
      Cookie: `token=${token}`,
    },
    cache: "no-store",
  });


  if (res.ok) {
    redirect("/landingpage");
  }


  return <>{children}</>;
}
