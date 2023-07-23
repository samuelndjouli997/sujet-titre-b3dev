"use client"

import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { User } from "@prisma/client";
import useMedia from '@/app/hooks/useMedia';
import Sidebar from '../home/Sidebar';

import DashboardEdit from './DashboardEdit';


interface EditContentProps {
    // openEditModal: () => void,
    currentUser: User | null;
  }



const EditContent = ({ currentUser}: EditContentProps) => {

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
            <DashboardEdit
                currentUser={currentUser}
            />

    </div>
  )
}

export default EditContent