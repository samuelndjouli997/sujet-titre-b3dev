import { PostWithUser } from '@/app/types/Index';
import { User } from '@prisma/client';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { BiChevronLeft } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'

interface OnePostContentProps {
    post: PostWithUser | null;
    currentUser: User | null;
}

const OnePostContent = ({post, currentUser}: OnePostContentProps) => {

    const router = useRouter();

    const handleGoBack = () => {

        if (currentUser?.role === "SELLER" || currentUser?.role === "BOTH") {
            router.push("/mes-offres");
        }

        if (currentUser?.role === "BUYER") {
            router.push("/offres-publiees");
        }
    };

  return (
    <section className="section lg:pt-14 lg:pb-20 flex flex-col w-11/12 mx-auto space-y-4 col-span-3 text-center">
        <div className="flex justify-between">
            <div onClick={handleGoBack} className="mb-8 flex space-x-2 items-center text cursor-pointer">
                <BiChevronLeft
                    className="text-4xl text-primary-dark-green"
                />
                {
                    currentUser?.role === "SELLER" || currentUser?.role === "BOTH" ? (
                        <span className="font-jost font-medium text-lg lg:text-xl text-primary-dark-green">Revenir à mes offres</span>
                    ) : currentUser?.role === "BUYER" ? (
                        <span className="font-jost font-medium text-lg lg:text-xl text-primary-dark-green">Revenir aux offres publiées</span>
                    ) : (
                        <span className="font-jost font-medium text-lg lg:text-xl text-primary-dark-green">Revenir à l'accueil</span>
                    )
                }
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
                                {post?.image ? (
                                    <Image
                                    width={400}
                                    height={400}
                                    className="rounded-2xl w-full object-cover h-[600px]"
                                    src={post.image}
                                    alt={post.title}
                                    />
                                ) : (
                                    <div>No image available</div>
                                )}
                            </div>
                            <p className="font-rubik text-base text-primary-dark-green my-8">{post?.description}</p>
                        </div>
                    </div>

                    <div className="lg:col-span-3 w-full">

                        <div className="font-jost font-medium text-left text-lg lg:text-xl text-primary-dark-green mb-4">
                            {
                                currentUser?.email === post?.user?.email ? (
                                    ""
                                ) : (
                                    <div className="flex justify-start items-center space-x-2 mb-4">
                                        <span className="font-jost font-medium text-lg lg:text-xl text-primary-dark-green">
                                            Par
                                        </span>
                                        <Image src={post?.user?.image || "/img/home/user-img.webp"} alt="avatar" width={40} height={40} className="rounded-full w-10 h-10 object-cover" />
                                        <span className="font-jost font-medium text-lg lg:text-xl text-primary-dark-green">
                                            {post?.user?.name}
                                        </span>
                                
                                    </div>
                                )
                                    
                            }
                            
                             
                        </div>
                        <div className="flex flex-col space-y-2 justify-center text-left bg-primary-light-green rounded-2xl p-8">
                            <span className="font-jost font-medium text-lg lg:text-xl text-primary-dark-green">
                                Prix : {post?.price} €
                            </span>
                            <p className="font-rubik font-medium text-base text-primary-dark-green">Localisation : {post?.location}</p>
                            <p className="font-rubik font-medium text-base text-primary-dark-green">Catégorie : {post?.category}</p>
                        </div>
                        <div className="flex flex-col space-y-2 justify-center text-left">
                            <div>
                                {
                                    post?.user?.role === "BUYER" || post?.user?.role === "BOTH" || currentUser?.email != post?.user?.email ? (
                                        <Link 
                                            href={`mailto:${post?.user.email}`} 
                                            className="flex font-jost font-medium text-lg lg:text-xl text-primary-dark-green my-4">
                                            <a>
                                            Contactez l'acheteur 
                                            </a>
                                            <BsFillTelephoneFill className="inline-block ml-2 text-2xl text-primary-dark-green" />
                                        </Link>
                                    ) : null
                                }
                                
                            </div>
                            
                        </div>
                    </div>
        </div>

    </section>
  )
}

export default OnePostContent