import prisma from "@/app/libs/prismadb";

import { PostWithUser } from "../types/Index";

export async function getPostById(
  id: number
): Promise<PostWithUser | null> {
  try {
    const postData = await prisma.post.findUnique({
      where: {
        id: id,
      },
      include: {
        user: true,
      },
    });

    if (!postData) {
      return null;
    }

    const post: PostWithUser = {
      ...postData,
    };
    return post;
  } catch (error: any) {
    return null;
  }
}
