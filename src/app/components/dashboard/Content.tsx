"use client"

import React, { useState } from 'react'
import Sidebar from '../home/Sidebar';
import DashboardContent from './DashboardContent';
import useMedia from '@/app/hooks/useMedia';
import AuthComponent from '../AuthComponent';
import { useSession } from 'next-auth/react';

import { User } from "@prisma/client";

interface ContentProps {
    currentUser: User | null;
}

const Content = ({currentUser}: ContentProps) => {

    const { data: session } = useSession();

    const mdUp = useMedia('(min-width: 768px)');
    const [open, setOpen] = useState(false);
    const handleButtonClick = () => {
        setOpen(prev => !prev);
    };
    
  return (
    <div className="flex flex-1">
    <Sidebar
      mdUp={mdUp}
      open={open}
      handleButtonClick={handleButtonClick}
      currentUser={currentUser}
     />
      {/* <AuthComponent /> */}
     <DashboardContent 
        currentUser={currentUser} 
     />

        {/* <AuthComponent /> */}
  </div>
  )
}

export default Content