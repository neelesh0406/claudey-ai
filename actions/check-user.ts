import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function checkUser() {
  const clerkUser = await currentUser();
  if (!clerkUser) return null;

  try {
    const existing = await prisma.user.findUnique({
      where: {
        clerkId: clerkUser.id,
      },
    });

    if (existing) return existing;

    const email = clerkUser.emailAddresses[0]?.emailAddress;
    if (!email) return null;

    return await prisma.user.create({
      data: {
        clerkId: clerkUser.id,
        email,
        name:
          `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim() ||
          null,
        imageUrl: clerkUser.imageUrl,
      },
    });
  } catch (error) {
    console.error("Database error in checkUser():", error);
    return null;
  }
}
