import prisma from "../libs/prismadb";

export async function getPostsByUser(userId: string | undefined) {
    try {
        const userPosts = await prisma.post.findMany({
            where: {
                userId: userId,
            },
        });

        if (!userPosts) {
            return null;
        }

        return userPosts;
    } catch (error: any) {
        return null;
    }
}