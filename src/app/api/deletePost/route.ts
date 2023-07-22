import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function DELETE(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { postId } = await request.json();

  if (!postId) {
    return NextResponse.error();
  }

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post || post.userId !== currentUser.id) {
    return NextResponse.error();
  }

  await prisma.post.delete({
    where: {
      id: postId,
    },
  });

  return NextResponse.json({ message: "Post deleted successfully" });
}
