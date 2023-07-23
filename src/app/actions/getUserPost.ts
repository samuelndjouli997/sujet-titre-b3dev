import prisma from "@/app/libs/prismadb";

export default async function getUserPost(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      return null;
    }

    return {
      ...user,
    };
  } catch (error: any) {
    return null;
  }
}