import prisma from "@/app/libs/prismadb";
import { PostWithUser } from "../types/Index";

export default async function getPost() {
  try {
    const allProducts = await prisma.post.findMany({
      include: {
        user: true,
      },
    });

    return allProducts.map((post) => {
      const postWithUser: PostWithUser = {
        ...post,
      };
      return postWithUser;
    });
  } catch (error: any) {
    console.error("Error fetching products: ", error);
    return [];
  }
}
