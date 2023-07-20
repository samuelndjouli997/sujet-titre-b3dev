import { getSession, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';

// import { User } from '@/pages/api/getCurrentUser';
// import EditUserModal from '../modals/EditUserModal';


const Dashboard = () => {
  const { data: session } = useSession();

  const [showEditModal, setShowEditModal] = useState(false);

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const closeEditModal = (): void => {
    setShowEditModal(false);
  };



  return (
    
    <>
        <div className="section lg:pt-14 lg:pb-20 flex flex-col w-8/12 mx-auto space-y-4 col-span-3">
        
              {session?.user ? ( // Vérification de nullité ici
                                  <h2 className="font-jost font-medium text-lg lg:text-[25px] text-dark mb-4">
                                    Salut, {session.user.name} ! Ici tu pourras consulter et modifier toutes les informations liées à ton profil
                                  </h2>
                                ) : null}
              <div className="mb-20 flex flex-col justify-center items-center">
              {session?.user?.image ? ( // Vérifiez si l'utilisateur a une photo de profil
                  <Image src={session.user.image} alt="avatar" width={148} height={148} />
                ) : (
                  <Image src="/img/home/user-img.webp" alt="avatar" width={148} height={148} /> // Affichez l'image par défaut si l'utilisateur n'a pas de photo de profil
                )}
                    <button onClick={openEditModal} className="flex space-x-2 bg-white rounded-full custom-shadow cursor-pointer -mt-4 py-3 px-6">
                        <Image src="/img/home/camera.svg" alt="camera" width={20} height={20} />
                        <span>Modifier ma photo</span>
                    </button>
              </div>

              
                <button onClick={openEditModal}  className="flex justify-between items-center space-x-4 px-4 bg-primary-light-green h-[60px] text-primary-blue w-full text-[14px] rounded-2xl font-outfit font-light">
                    {session?.user?.name}
                  <img src="/img/home/pen-2.svg" alt="icon pen" />
                </button>

              
              <button className="flex justify-between items-center space-x-4 px-4 bg-primary-light-green h-[60px] text-primary-blue w-full text-[14px] rounded-2xl font-outfit font-light">
                {session?.user?.email}
              </button>

              <button className="flex justify-between items-center space-x-4 px-4 bg-primary-light-green h-[60px] text-primary-blue w-full text-[14px] rounded-2xl font-outfit font-light">
                Rôle
              </button>

              {/* <button className="flex justify-between items-center space-x-4 px-4 bg-primary-light-green h-[60px] text-primary-blue w-full text-[14px] rounded-2xl font-outfit font-light">
                  ********
                  <img src="/img/home/pen-2.svg" alt="icon pen" />
              </button> */}
              {/* {
                showEditModal && <EditUserModal onClose={closeEditModal} session={session?.data} />
              } */}
        </div>         
              
              
    </>
  )
}

export default Dashboard