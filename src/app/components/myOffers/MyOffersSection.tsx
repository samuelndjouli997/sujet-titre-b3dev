import React from 'react'
import MyOffersCard from './MyOffersCard'
import { User, Post } from "@prisma/client";
import Link from 'next/link';

interface MyOffersSectionProps {
    currentUser: User | null;
    posts: Post[] | null;
}

const MyOffersSection = ({currentUser, posts}: MyOffersSectionProps) => {
  return (
    <section className="section lg:pt-14 lg:pb-20 flex flex-col w-10/12 mx-auto space-y-4 col-span-3 text-center">
      <h2 className="font-jost font-medium text-lg lg:text-[56px] text-center text-primary-dark-green mb-10 col-span-12">
            Mes offres 🧳
        </h2>
       <div className="grid lg:grid-cols-12 gap-x-8 mb-2">
        
       {posts?.length === 0 ? ( // Vérifiez si le tableau des offres est vide
       <>
          <p className="w-full col-span-12 font-rubik text-dark">Vous n'avez aucune annonce pour l'instant. 😢</p>
          <p className="w-full col-span-12">Pour en créer une, c'est <Link className="text-primary-green font-semibold underline" href="/create">par ici !</Link> 🍃</p>
       </>
        
      ) : (
        <>
          {posts?.map((post) => (
            <MyOffersCard key={post.id} post={post} />
          ))}
        </>
      )}

       </div>
    </section>
  )
}

export default MyOffersSection