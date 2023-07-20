import React, { useState } from 'react'
import useMedia from '../hooks/useMedia';
import Sidebar from '../components/home/Sidebar';
import Dashboard from '../components/home/Dashboard';
import HomeContent from '../components/home/HomeContent';

const page = () => {
    

  return (
    <div className="flex min-h-screen w-full flex-col">
        <HomeContent />
    
    </div>
  )
}

export default page