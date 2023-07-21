import React from 'react'

import { User } from "@prisma/client";

import Link from 'next/link';

interface DashboardContentProps {
    currentUser: User | null;
}

const DashboardContent = ({currentUser}: DashboardContentProps) => {
  return (
    <>
    <div className="section h-screen lg:pt-28 lg:pb-20 flex flex-col w-10/12 mx-auto space-y-4 col-span-3 text-center">
        {currentUser ? (
            <h2 className="font-jost font-medium text-lg lg:text-[56px] text-center text-primary-dark-green mb-12">
                Bienvenue {currentUser?.name} 🪴!
            </h2>
            ) : null}

        <p className="font-rubik text-base text-primary-dark-green my-20">Sur cette page vous êtes sur votre espace utilisateur. </p>

        <p className="font-rubik text-base text-primary-dark-green !mt-6">Pour modifier les informations de votre profil, c'est <Link className="text-primary-green font-semibold underline" href="/edit">par ici !</Link> 🍃</p>

        {
            currentUser?.role === "SELLER" || currentUser?.role === "BOTH" ? (
                <p className="font-rubik text-base text-primary-dark-green !mt-6">Pour créer une annonce <Link className="text-primary-green font-semibold underline" href="">par ici !</Link> 🌱</p>
            ) : null
        }
        {
            currentUser?.role === "BUYER" || currentUser?.role === "BOTH" ? (
                <p className="font-rubik text-base text-primary-dark-green !mt-6">Pour voir les annonces qui ont été postées, c'est <Link className="text-primary-green font-semibold underline" href="">par ici !</Link> 🌱</p>
            ) : null
        }
        
    </div>
    
    </>
  )
}

export default DashboardContent