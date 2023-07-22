import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'
import { BiChevronLeft } from 'react-icons/bi'

const OnePostContent = ({post}) => {

    const router = useRouter();

    const handleGoBack = () => {
        router.push("/mes-offres");
    };

  return (
    <section className="section lg:pt-14 lg:pb-20 flex flex-col w-11/12 mx-auto space-y-4 col-span-3 text-center">
        <div className="flex justify-between">
            <div onClick={handleGoBack} className="mb-8 flex space-x-2 items-center text cursor-pointer">
                <BiChevronLeft
                    className="text-4xl text-primary-dark-green"
                />
                <span className="font-jost font-medium text-lg lg:text-xl text-primary-dark-green">Revenir à mes annonces</span>
            </div>
            <div>&nbsp;</div>
        </div>
        <div className="grid grid-cols-1 gap-y-6 lg:gap-y-0 lg:gap-x-12 lg:grid-cols-9">
            
                    <div className="lg:col-span-6 w-full">
                        <div className="flex flex-col justify-center text-left">
                            <h2 className="font-jost font-medium text-lg lg:text-[44px] text-primary-dark-green mb-10">
                                {post?.title}
                            </h2>
                            <div>
                                <Image width={400} height={400} className="rounded-2xl w-full object-cover h-[600px]" src={post?.image} alt={post?.title} />
                            </div>
                            <p className="font-rubik text-base text-primary-dark-green my-8">{post?.description}</p>
                        </div>
                    </div>
                    <div className="lg:col-span-3 w-full">
                        <div className="flex flex-col space-y-2 justify-center text-left bg-primary-light-green rounded-2xl p-10">
                            <span className="font-jost font-medium text-lg lg:text-xl text-primary-dark-green">
                                Prix : {post?.price} €
                            </span>
                            <p className="font-rubik font-medium text-base text-primary-dark-green">Localisation : {post?.location}</p>
                            <p className="font-rubik font-medium text-base text-primary-dark-green">Catégorie : {post?.category}</p>
                        </div>
                    </div>
        </div>

    </section>
  )
}

export default OnePostContent