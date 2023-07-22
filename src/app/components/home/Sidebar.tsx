"use client"

import React, { useState } from 'react'

import { HiOutlineMenuAlt1 } from 'react-icons/hi'

import Link from 'next/link'

// import react icons
import { LuLayoutDashboard, LuLogOut } from 'react-icons/lu'
import {PiSuitcase} from 'react-icons/pi'
import {AiOutlineHeart, AiOutlinePlus} from 'react-icons/ai'
import {BiCog} from 'react-icons/bi'


import { SidebarProps } from '@/app/types/Index'
import { signOut } from 'next-auth/react'
import CreatePostModal from '../modals/CreatePostModal'




const Sidebar = ({mdUp, open, handleButtonClick, currentUser}: SidebarProps) => {

    const [showEditModal, setShowEditModal] = useState(false);

    const openEditModal = () => {
        setShowEditModal(true);
      };
    
      const closeEditModal = () => {
        setShowEditModal(false);
      };

  return (
    <div className={`${open ? 'w-[270px] flex-shrink-0' : 'w-[85px]'} transition duration-300`}>
        <aside className={`${open ? 'w-[270px]' : 'w-[85px]'} sticky left-0 top-0 z-50 box-border flex h-full flex-col overflow-y-auto border-l border-r border-blue-ish-gray bg-[#F6F5F5] shadow-light outline-0`}
        >
            <div className="flex flex-col overflow-y-auto">
                <nav className="fixed pl-6">
                    <button
                    className="m-0 hidden h-24 items-center justify-center p-2 md:flex">
                        <HiOutlineMenuAlt1 className="h-7 w-7 stroke-night hover:stroke-secondarylight" onClick={handleButtonClick} />
                    </button>

                    <ul className="flex flex-col gap-2 overflow-hidden text-[#7B869C]">
                        <li>
                            <Link 
                                href="/dashboard"
                                className="relative flex items-center rounded-lg px-2 py-[10px] text-lg font-medium">
                                <div className="inline-flex flex-shrink px-0 py-1">
                                    <LuLayoutDashboard className="w-6 h-6 mr-3 group-hover:text-primary-dark-green" />
                                </div>
                                {
                                    open && <span className="whitespace-nowrap group-hover:text-primary-dark-green">
                                                Accueil
                                            </span>
                                }
                                
                            </Link>
                        </li>
                        {
                            currentUser?.role === "SELLER" || currentUser?.role === "BOTH" ? (
                                <li>
                                    <Link 
                                        href="/mes-offres"
                                        className="relative flex items-center rounded-lg px-2 py-[10px] text-lg font-medium">
                                        <div className="inline-flex flex-shrink px-0 py-1">
                                            <PiSuitcase className="w-6 h-6 mr-3 group-hover:text-primary-dark-green" />
                                        </div>
                                        {
                                            open && <span className="whitespace-nowrap group-hover:text-primary-dark-green">
                                                Mes offres  
                                            </span>
                                        }
                                        
                                    </Link>
                                </li>
                            ) : null
                        }

                        {
                            currentUser?.role === "BUYER" || currentUser?.role === "BOTH" ? (
                                <li>
                                    <Link 
                                        href=""
                                        className="relative flex items-center rounded-lg px-2 py-[10px] text-lg font-medium">
                                        <div className="inline-flex flex-shrink px-0 py-1">
                                            <PiSuitcase className="w-6 h-6 mr-3 group-hover:text-primary-dark-green" />
                                        </div>
                                        {
                                            open && <span className="whitespace-nowrap group-hover:text-primary-dark-green">
                                                        Offres publiées
                                                    </span>
                                        }
                                    </Link>
                                </li>

                            ) : null
                        }
                        
                        
                        <li>
                            <Link 
                                href=""
                                className="relative flex items-center rounded-lg px-2 py-[10px] text-lg font-medium">
                                <div className="inline-flex flex-shrink px-0 py-1">
                                    <AiOutlineHeart className="w-6 h-6 mr-3 group-hover:text-primary-dark-green" />
                                </div>
                                {
                                    open && <span className="whitespace-nowrap group-hover:text-primary-dark-green">
                                                Favoris
                                            </span>
                                }
                            </Link>
                        </li>
                        {
                            currentUser?.role === "SELLER" || currentUser?.role === "BOTH" ? (
                                <li onClick={openEditModal} >
                            <Link 
                                href=""
                                className="relative flex items-center rounded-lg px-2 py-[10px] text-lg font-medium">
                                <div className="inline-flex flex-shrink px-0 py-1">
                                    <AiOutlinePlus className="w-6 h-6 mr-3 group-hover:text-primary-dark-green" />
                                </div>
                                {
                                    open && <span className="whitespace-nowrap group-hover:text-primary-dark-green">
                                                Créer une offre
                                            </span>
                                }
                            </Link>
                        </li>

                            ) : null
                        }

                        <li>
                            <Link 
                                href={`/edit`}
                                className="relative flex items-center rounded-lg px-2 py-[10px] text-lg font-medium">
                                <div className="inline-flex flex-shrink px-0 py-1">
                                    <BiCog className="w-6 h-6 mr-3 group-hover:text-primary-dark-green" />
                                </div>
                                {
                                    open && <span className="whitespace-nowrap group-hover:text-primary-dark-green">
                                                Paramètres
                                            </span>
                                }
                            </Link>
                        </li>
                        

                        {/* bouton se déconnecter */}
                        <li>
                            
                            <button onClick={() => signOut()} className="relative flex items-center rounded-lg px-2 py-[10px] text-lg font-medium">
                                <div className="inline-flex flex-shrink px-0 py-1">
                                    <LuLogOut className="w-6 h-6 mr-3 text-red-600" />
                                </div>
                                {
                                    open && <span className="whitespace-nowrap text-red-600">
                                                Se déconnecter
                                            </span>
                                }
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

        </aside>
        {showEditModal && (
                <CreatePostModal
                    onClose={closeEditModal}
                /> )}
    </div>
    
  )
}

export default Sidebar