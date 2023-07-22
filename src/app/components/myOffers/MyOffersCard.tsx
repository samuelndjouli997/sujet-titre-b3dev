import React, { useState } from 'react'

import { Post } from "@prisma/client";
import Link from 'next/link';
import Image from 'next/image';
import DeletePostModal from '../modals/DeletePostModal';
import UpdatePostModal from '../modals/UpdatePostModal';

interface MyOffersCardProps {
    key: number;
    post : Post | null;
}

const MyOffersCard = ({key, post}: MyOffersCardProps) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const openDeleteModal = () => {
        setShowDeleteModal(true);
    };

    const openEditModal = () => {
        setShowEditModal(true);
    };

    const closeDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const closeEditModal = () => {
        setShowEditModal(false);
    };


  return (
    <div className="col-span-4 w-full" key={key}>
        <Link href={`/post/${post?.id}`}>
            <Image className="rounded-2xl w-full object-cover h-[252px]" src={post?.image} alt={post?.title} width={294} height={252} />
        </Link>
        <div className="flex flex-col space-y-4 mt-3 justify-start items-start w-full">
            <div>
                <Link href={`/post/${post?.id}`}>
                    <h3 className="font-jost font-semibold text-[18px] lg:text-2xl text-dark">{post?.title}</h3>
                </Link>
            </div>
            <p className="font-jost font-medium text-[18px] lg:text-xl text-dark">
                {post?.price} €
            </p>
            <p className="btn rounded-2xl bg-primary-light-green w-fit text-primary-dark-green font-jost font-medium text-left lg:text-lg">{post?.location}</p>
            <p className="font-jost font-medium text-[18px] lg:text-base text-blue-ish-gray">
                {post?.category}
            </p>

            <div className="flex w-full justify-between">
                <button onClick={openEditModal} className="btn rounded-2xl bg-primary-light-green w-fit text-primary-dark-green font-jost font-medium text-left lg:text-lg transition-colors duration-300 hover:bg-primary-green hover:text-white">Modifier</button>
                <button onClick={openDeleteModal} className="btn rounded-2xl bg-red-500 w-fit text-white font-jost font-medium text-left lg:text-lg transition-colors duration-300 hover:bg-red-700">Supprimer</button>
            </div>
        </div>

        {
            showDeleteModal && (
                <DeletePostModal post={post} onClose={closeDeleteModal} />
            )
        }

        {
            showEditModal && (
                <UpdatePostModal post={post} onClose={closeEditModal} />
            )
        }
        
    </div>
  )
}

export default MyOffersCard