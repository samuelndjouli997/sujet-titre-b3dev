import React from 'react'

import { User } from "@prisma/client";

import Link from 'next/link';

interface DashboardContentProps {
    currentUser: User | null;
}

const DashboardContent = ({currentUser}: DashboardContentProps) => {
  return (
    <>
    <section className="px-8 lg:px-10 lg:pt-12 lg:pb-20 flex flex-col w-11/12 mx-auto space-y-4 col-span-3 text-center">
        {currentUser ? (
            <h2 className="font-jost font-medium text-lg lg:text-[56px] text-center text-primary-dark-green mb-8">
                Bienvenue {currentUser?.name} 🪴!
            </h2>
            ) : null}

        <p className="font-rubik text-base text-primary-dark-green my-20">Sur cette page vous êtes sur votre espace utilisateur. 🌱✨</p>

        <p className="font-rubik text-base text-primary-dark-green !mt-6">Pour modifier les informations de votre profil, c'est <Link className="text-primary-green font-semibold underline" href="/edit">par ici !</Link> 🍃</p>

        {
            currentUser?.role === "SELLER" || currentUser?.role === "BOTH" ? (
                <p className="font-rubik text-base text-primary-dark-green !mt-6">Pour créer une annonce <Link className="text-primary-green font-semibold underline" href="">par ici !</Link> 🌱</p>
            ) : null
        }
        {
            currentUser?.role === "BUYER" || currentUser?.role === "BOTH" ? (
                <p className="font-rubik text-base text-primary-dark-green !mt-6">Pour voir les annonces qui ont été postées, c'est <Link className="text-primary-green font-semibold underline" href="/offres-publiees">par ici !</Link> 🌱</p>
            ) : null
        }

        <div>
            <h3 className="font-jost font-medium text-lg lg:text-[40px] leading-[60px] text-center text-primary-dark-green mt-6 mb-12">
                Quelques tips ✨ pour bien utiliser <br /> l'application :
            </h3>

            <div className="grid lg:grid-cols-12 gap-6">
                <div className="lg:col-span-4 px-8 pt-8 pb-40 bg-primary-light-green bg-tips-1 rounded-2xl flex flex-col text-left">
                    <p className="font-jost font-medium text-lg lg:text-xl text-primary-dark-green mb-6">
                        🥕 Les vendeurs peuvent :
                    </p>

                    <ul className="font-rubik text-base text-primary-dark-green">
                        <li className="mb-4">🌱 Créer, modifier et supprimer leur annonce</li>
                        <li className="mb-4">🌱 Modifier les informations de leur profil</li>
                        <li className="mb-4">🌱 Être contactés par les acheteurs</li>
                    </ul>

                </div>
                <div className="lg:col-span-4 px-8 pt-8 pb-40 bg-primary-dark-green bg-tips-2 text-white text-left rounded-2xl flex flex-col">
                    <p className="font-jost font-medium text-lg lg:text-xl mb-6">
                        🌽 Les acheteurs peuvent :
                    </p>

                    <ul className="font-rubik text-base">
                        <li className="mb-4">🌱 Avoir accès à l'ensemble des offres publiées</li>
                        <li className="mb-4">🌱 Modifier les informations de leur profil</li>
                        <li className="mb-4">🌱 Contacter le vendeur</li>
                    </ul>
                </div>
                <div className="lg:col-span-4 px-8 pt-8 pb-40 bg-primary-green rounded-2xl bg-tips-3 text-white text-left flex flex-col justify-start">
                    <p className="font-jost font-medium text-lg lg:text-xl mb-6">
                        🌳 Les acheteurs/vendeurs peuvent :
                    </p>

                    <ul className="font-rubik text-base">
                        <li className="mb-4">🌱 Créer, modifier et supprimer leur annonce</li>
                        <li className="mb-4">🌱 Avoir accès à l'ensemble des offres publiées</li>
                        <li className="mb-4">🌱 Modifier les informations de leur profil</li>
                        <li className="mb-4">🌱 Contacter le vendeur, et être contactés</li>
                    </ul>
                </div>
            </div>

            <div>
                <h3 className="font-jost font-medium text-lg lg:text-[40px] leading-[60px] text-center text-primary-dark-green mt-8 mb-12">
                    Vous vous êtes attribué un rôle <br /> et vous souhaitez le modifier ? 😱
                </h3>

                <p className="font-rubik text-base text-primary-dark-green mb-6">
                    Pas de panique ! 💡 Vous pouvez modifier votre rôle à tout moment {" "}
                    <Link 
                        className="text-primary-green font-semibold underline" 
                        href="/edit">
                        par là
                    </Link> {" "}
                    🌱
                    
                </p>
            </div>
        </div>
        
    </section>
    
    </>
  )
}

export default DashboardContent