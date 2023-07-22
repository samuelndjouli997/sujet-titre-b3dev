"use client";

import Sidebar from "@/app/components/home/Sidebar";
import OnePostContent from "@/app/components/post/OnePostContent";
import useMedia from "@/app/hooks/useMedia";
import { PostWithUser } from "@/app/types/Index";
import { User } from "@prisma/client";

import { useRouter } from "next/navigation";
import { useState } from "react";


interface PostProps {
    post: PostWithUser;
    currentUser: User | null;
  }

export default function OnePost({ post, currentUser }: PostProps) {

    const router = useRouter();

    const mdUp = useMedia('(min-width: 768px)');
    const [open, setOpen] = useState(false);
    const handleButtonClick = () => {
        setOpen(prev => !prev);
    };

    

    return (
        <>
            <div className="flex flex-1">
                <Sidebar
                    mdUp={mdUp}
                    open={open}
                    handleButtonClick={handleButtonClick}
                    currentUser={currentUser}
                />

                <OnePostContent
                    post={post}
                />
                

            {/* <AuthComponent /> */}
        </div>
        </>
    )

}