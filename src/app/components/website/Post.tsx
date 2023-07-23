import { Posts } from '@/app/types/Index'
import Image from 'next/image'
import React from 'react'

import { AiOutlineHeart } from 'react-icons/ai'

const Post = ({userImg, user, title, img, price, location, category}: Posts) => {
  return (
    <div className="w-full col-span-3 flex flex-col space-y-6 mt-20">
      <div className="flex space-x-4 items-center">
        <Image src={userImg} width={56} height={56} alt={`Photo de ${user}`} unoptimized />
        <span className="font-jost font-medium text-dark text-base">{user}</span>
      </div>

      <Image src={img} width={294} height={400} alt={`Photo de ${title}`} unoptimized />

      <h3 className="font-jost font-medium text-left text-dark lg:text-[24px]">{title}</h3>
      <p className="font-jost font-normal text-left text-dark lg:text-[24px]">{price}</p>

      <p className="btn bg-primary-light-green w-fit text-primary-dark-green font-jost font-medium text-left lg:text-lg">{location}</p>

      <div className="flex space-x-4 justify-between items-center">
        <span className="font-jost font-medium text-blue-ish-gray text-base">{category}</span>
        <AiOutlineHeart className="text-blue-ish-gray text-2xl cursor-pointer" />
      </div>
    </div>
  )
}

export default Post