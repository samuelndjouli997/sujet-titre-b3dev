import React from 'react'

import { Post } from "@prisma/client";
import Link from 'next/link';
import Image from 'next/image';

interface MyOffersCardProps {
    key: string;
    post : Post;
}

const MyOffersCard = ({key, post}: MyOffersCardProps) => {
  return (
    <div className="col-span-4" key={key}>
        <Link href={`/post/${post.id}`}>
            <Image className="rounded-2xl w-full" src={post.image} alt={post.title} width={294} height={252} />
        </Link>
        <div className="flex flex-col justify-start items-start w-full">
            <div>
                <Link href={`/post/${post.id}`}>
                    <h3 className="font-jost font-semibold text-[18px] lg:text-2xl text-dark">{post.title}</h3>
                </Link>
            </div>
            <p className="font-jost font-medium text-[18px] lg:text-xl text-dark">
                {post.price} €
            </p>
            <p className="btn bg-primary-light-green w-fit text-primary-dark-green font-jost font-medium text-left lg:text-lg">{post.location}</p>
            <p className="font-jost font-medium text-[18px] lg:text-base text-blue-ish-gray">
                {post.category}
            </p>

            <div className="flex w-full justify-between">
                <button className="btn rounded-2xl bg-primary-light-green w-fit text-primary-dark-green font-jost font-medium text-left lg:text-lg transition-colors duration-300 hover:bg-primary-green hover:text-white">Modifier</button>
                <button className="btn rounded-2xl bg-red-500 w-fit text-white font-jost font-medium text-left lg:text-lg transition-colors duration-300 hover:bg-red-700">Supprimer</button>
            </div>
        </div>
        
    </div>
  )
}

export default MyOffersCard