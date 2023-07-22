import Client from "@/app/components/client/Client";
import OnePost from "./OnePost";
import { getPostById } from "@/app/actions/getPostById";

import { notFound } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";

export default async function Product({ params }: { params: { id: string } }) {
  const post = await getPostById(Number(params.id));
  const currentUser = await getCurrentUser();
  if (!post) {
    return notFound();
  }
  return (
    <Client>
      <OnePost post={post} currentUser={currentUser} />
    </Client>
  );
}
