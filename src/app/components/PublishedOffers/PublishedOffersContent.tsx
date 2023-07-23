"use client";

import useMedia from '@/app/hooks/useMedia';
import React, { useState } from 'react';

import { User, Post } from "@prisma/client";
import Sidebar from '../home/Sidebar';
import PublishedOffersSection from './PublishedOffersSection';
import { PostWithUser } from '@/app/types/Index';

interface PublishedOffersContentProps {
    currentUser: User | null;
    posts: PostWithUser[];
}

const PublishedOffersContent = ({currentUser, posts}: PublishedOffersContentProps) => {
    
    
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
            {/* <AuthComponent /> */}
            <PublishedOffersSection
                posts={posts}
                
            />

            {/* <AuthComponent /> */}
        </div>
    </>
  )
}

export default PublishedOffersContent