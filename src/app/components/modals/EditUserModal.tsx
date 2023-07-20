import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import { CldUploadButton } from 'next-cloudinary';
import { toast } from 'react-hot-toast';
import AuthComponent from '../AuthComponent';
import { useSession } from 'next-auth/react';


interface Props {
    onClose: () => void,
}



const EditUserModal = ({onClose}: Props) => {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [profileImage, setProfileImage] = useState('');


    const handleUpload = (result: any) => {
        setProfileImage(result.info.secure_url);
        console.log(result.info);
      };

      const handleSubmit = async (e: any) => {
        e.preventDefault();
    
        
      };

  return (
    <div className="fixed inset-0 z-[99] flex items-center justify-center">
        <div className="modal-overlay fixed inset-0 bg-gray-900 opacity-50"></div>
        <div className="modal-content mx-6 lg:mx-0 bg-primary-green rounded-lg p-2 w-[800px] transform transition-transform duration-300 ease-in-out translate-x-0">
            {/* Contenu de la fenêtre modale */}
            <div className="p-6 lg:p-14 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 80px)' }}>
                
                {/* form */}
                <form className="space-y-8 w-full" onSubmit={handleSubmit}>
                    <div className="grid gap-y-4 lg:gap-x-6 lg:grid-cols-6">

                        <div className="bg-primary-dark-green p-8 lg:p-0 col-span-3 flex flex-col justify-center items-center rounded-xl">
                            
                            {/* on utilise CldUploadButton for l'ajout d'image */}
                            <CldUploadButton
                                options={{ maxFiles: 1 }}
                                onUpload={handleUpload}
                                uploadPreset="hz53vnpv"

                            >
                                <label className="cursor-pointer" htmlFor="file">
                                    <img className="text-center" src="/img/modals/icone-photo.svg" alt="" />
                                </label>
                            </CldUploadButton>
                            
                            <span className="text-white font-jost text-center mt-4">Ajouter une photo de profil</span>
                        </div>

                        <div className="col-span-3">
                            
                            <h3 className="section-title font-semibold text-[18px] lg:text-4xl text-white mb-8">Modifier mes informations</h3>

                            <input
                                className="w-full input-modal my-4"
                                type="text"
                                placeholder="Prénom"
                                id="firstName"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                                />
                            <input
                                className="w-full input-modal mb-6"
                                type="text"
                                placeholder="Nom"
                                id="lastName"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                                />
                            

                            <div className="flex space-x-4 lg:space-x-2 justify-start mt-4">
                                <button type="submit" className="btn bg-white text-primary-green rounded-xl font-rubik font-medium btn-lg">
                                    Modifier
                                </button>
                            </div>

                        </div>

                    </div>
                </form>

            </div>
        
            <div onClick={onClose} className="modal-close absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700 cursor-pointer">
                <Image width={20} height={20} src={"/img/modals/close-modal.svg"} alt="close modal" />
            </div>
        </div>
   
  </div>
  )
}

export default EditUserModal