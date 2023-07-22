import React from 'react'
import MyOffersCard from './MyOffersCard'
import { User, Post } from "@prisma/client";

interface MyOffersSectionProps {
    currentUser: User | null;
    posts: Post[];
}

const MyOffersSection = ({currentUser, posts}: MyOffersSectionProps) => {
  return (
    <section className="section h-screen lg:pt-28 lg:pb-20 flex flex-col w-10/12 mx-auto space-y-4 col-span-3 text-center">
       <div className="grid lg:grid-cols-12 gap-x-8 mb-2">
        {
            posts.map((post) => (
                <MyOffersCard key={post.id} post={post} />
            ))

        }

       </div>
    </section>
  )
}

export default MyOffersSection