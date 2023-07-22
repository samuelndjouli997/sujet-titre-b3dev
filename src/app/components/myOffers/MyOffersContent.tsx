"use client";

import React, { useState } from 'react'

import { User, Post } from "@prisma/client";
import Sidebar from '../home/Sidebar';
import useMedia from '@/app/hooks/useMedia';
import MyOffersSection from './MyOffersSection';

interface MyOffersContentProps {
    currentUser: User | null;
    posts: Post[] | null;
  }

const MyOffersContent = ({currentUser, posts}: MyOffersContentProps) => {
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
            <MyOffersSection
                currentUser={currentUser}
                posts={posts}
            />

            {/* <AuthComponent /> */}
        </div>
    </>
  )
}

export default MyOffersContent