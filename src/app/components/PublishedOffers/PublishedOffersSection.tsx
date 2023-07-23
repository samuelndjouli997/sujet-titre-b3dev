"use client";

import PublishedOffersCard from './PublishedOffersCard';
import { PostWithUser } from '@/app/types/Index';

interface PublishedOffersSectionProps {
    posts: PostWithUser[];
}

export default function PublishedOffersSection({posts}: PublishedOffersSectionProps) {

    let publishedOffers = posts;


  return (
    <section className="section lg:pt-14 lg:pb-20 flex flex-col w-10/12 mx-auto space-y-4 col-span-3 text-center">
      <h2 className="font-jost font-medium text-lg lg:text-[56px] text-center text-primary-dark-green mb-10 col-span-12">
            Offres publiées 🪴
        </h2>
       <div className="grid lg:grid-cols-12 gap-x-8 mb-2">
            {publishedOffers?.map((post, index) => (
                <PublishedOffersCard key={index} post={post} />
            ))}
        </div>
                    
    </section>
  )
}
