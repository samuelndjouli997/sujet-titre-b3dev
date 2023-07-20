"use client"

import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import useMedia from '@/app/hooks/useMedia';
import AuthComponent from '../AuthComponent';

const HomeContent = () => {
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
     />
      {/* <AuthComponent /> */}
     <Dashboard />

        {/* <AuthComponent /> */}
  </div>
  )
}

export default HomeContent