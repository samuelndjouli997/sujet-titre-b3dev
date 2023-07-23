import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Post } from "@prisma/client";
import { PostWithUser } from '@/app/types/Index';

interface PublishedOffersCardProps {
    post: PostWithUser;
    key: number;
}

const PublishedOffersCard = ({post, key}: PublishedOffersCardProps) => {
  return (
    <div className="col-span-4 w-full" key={key}>
        
        <div className="flex justify-start items-center space-x-2 w-full my-4">
            <div>
                <Image className="object-cover w-[56px] h-[56px] rounded-full" src={post?.user.image || "/img/home/user-img.webp"} alt="avatar" width={56} height={56} />
            </div>
            <span className="font-jost font-medium text-2xl text-dark">
                {post?.user.name}
            </span>
        </div>

        <div className="flex flex-col space-y-4 mt-3 justify-start items-start w-full">
            <div>
            {post?.image ? (
                <Link href={`/post/${post?.id}`}>
                    <Image className="rounded-2xl  object-cover h-[252px]" src={post?.image} alt={post?.title} width={294} height={252} />
                </Link> ) : (
                    <div>No image available</div>
                )}
            </div>
            
            <Link href={`/post/${post?.id}`}>
                <h3 className="font-jost font-semibold text-[18px] lg:text-2xl text-dark">{post?.title}</h3>
            </Link>
            <p className="font-jost font-medium text-[18px] lg:text-xl text-dark">
                {post?.price} €
            </p>
            <p className="btn rounded-2xl bg-primary-light-green w-fit text-primary-dark-green font-jost font-medium text-left lg:text-lg">{post?.location}</p>
            <p className="font-jost font-medium text-[18px] lg:text-base text-blue-ish-gray">
                {post?.category}
            </p>

        </div>
        
        


    </div>
  )
}

export default PublishedOffersCard