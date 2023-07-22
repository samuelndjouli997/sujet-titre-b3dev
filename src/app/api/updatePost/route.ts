import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function PUT(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { postId, title, description, category, image, price, location } = await request.json();

  if (!postId || !title || !description || !category || !image || !price || !location) {
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

  const updatedPost = await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      title,
      description,
      category,
      location,
      image,
      price: parseInt(price, 10),
    },
  });

  return NextResponse.json(updatedPost);
}
