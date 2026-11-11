import { checkUser } from "@/actions/check-user";
import { redirect } from "next/navigation";

export const instant = false;

export const metadata = {
  title: "Dashboard | Claudey AI",
  description: "Manage your workspaces and projects with Claudey",
};

export default async function DashboardPage() {
  const user = await checkUser();
  if (!user) redirect("/sign-in");

  return (
    <div className="p-8">
      <h1>Welcome, {user.name ?? user.email}</h1>
      <p>Your User ID in our database is: {user.id}.</p>
    </div>
  );
}
