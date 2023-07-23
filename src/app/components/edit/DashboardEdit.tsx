import { getSession, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import EditUserModal from '../modals/EditUserModal';
import { User } from "@prisma/client";
// import { User } from '@/pages/api/getCurrentUser';
// import EditUserModal from '../modals/EditUserModal';

interface DashboardEditProps {
  // openEditModal: () => void,
  currentUser: User | null;
}

const DashboardEdit = ({currentUser}: DashboardEditProps) => {
  console.log(currentUser)

  

  const [showEditModal, setShowEditModal] = useState(false);

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const handleRoles = () => {

    if (currentUser?.role === "SELLER") {
      return<strong className="inline font-semibold font-rubik text-primary-green">Vendeur</strong>
    }

    if (currentUser?.role === "BUYER") {
      return<>Acheteur</>
    }
    if (currentUser?.role === "BOTH") {
      return<>Acheteur & Vendeur</>
    }
  }

  


  return (
    
    <>
        <div className="section lg:pt-14 lg:pb-20 flex flex-col w-8/12 mx-auto space-y-4 col-span-3">
        
        {currentUser ? (
          <h2 className="font-jost font-medium text-lg lg:text-[25px] text-dark mb-4">
            Salut, {currentUser?.name} ! Ici tu pourras consulter et modifier toutes les informations liées à ton profil
          </h2>
        ) : null}
              <div className="mb-20 flex flex-col justify-center items-center">
                
                <Image src={currentUser?.image || "/img/home/user-img.webp"} className="rounded-full w-[148px] h-[148px] object-cover" alt="avatar" width={148} height={148} />

                  <button onClick={openEditModal} className="flex space-x-2 bg-white rounded-full custom-shadow cursor-pointer -mt-4 py-3 px-6">
                      <Image src="/img/home/camera.svg" alt="camera" width={20} height={20} />
                      <span>Modifier ma photo</span>
                   </button>
              </div>

              
                <button onClick={openEditModal}  className="flex justify-between items-center space-x-4 px-4 bg-primary-light-green h-[60px] text-primary-blue w-full text-[14px] rounded-2xl font-font-rubik font-light">
                  {currentUser?.name}
                  <img src="/img/home/pen-2.svg" alt="icon pen" />
                </button>

              
              <button className="flex justify-between items-center space-x-4 px-4 bg-primary-light-green h-[60px] text-primary-blue w-full text-[14px] rounded-2xl font-font-rubik font-light">
                  {currentUser?.email}
              </button>

              <button onClick={openEditModal} className="flex justify-between items-center space-x-4 px-4 bg-primary-light-green h-[60px] text-primary-blue w-full text-[14px] rounded-2xl font-rubik font-light">
                <span>Rôle : {handleRoles()}</span>
                <img src="/img/home/pen-2.svg" alt="icon pen" />
              </button>

              {showEditModal && (
                <EditUserModal
                currentUser={currentUser}
                onClose={closeEditModal}
                /> )}
              
        </div>         
              
              
    </>
  )
}

export default DashboardEdit