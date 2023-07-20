import Link from 'next/link'
import React from 'react'

import {GrMail} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer className="section py-16 lg:pt-24 lg:pb-16 bg-primary-dark-green text-white">
	<div className="container grid grid-cols-1 mx-auto gap-x-6 gap-y-8 md:grid-cols-4">
		<div className="flex flex-col space-y-4">
			<h2 className="font-jost font-bold text-[22px]">À propos de nous</h2>
      <div className="w-[22px] h-[3px] border-primary-green border-2" />
			<div className="flex flex-col space-y-2 text-sm ">
				<p className="font-rubik font-light text-base text-justify lg:text-left">Notre plateforme facilite les échanges locaux entre les jardiniers urbains, les producteurs de petite échelle et les amateurs de produits frais.</p>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
      <h2 className="font-jost font-bold text-[22px]">Navigation</h2>
      <div className="w-[22px] h-[3px] border-primary-green border-2" />
			<div className="flex flex-col space-y-2 text-sm ">
				<Link href="/" className="font-rubik font-light text-base">À propos</Link>
				<Link href="/" className="font-rubik font-light text-base">Nos annonces</Link>
				<Link href="/" className="font-rubik font-light text-base">Nos services</Link>
				<Link href="/" className="font-rubik font-light text-base">Notre vision</Link>
				<Link href="/" className="font-rubik font-light text-base">Contact</Link>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
    <h2 className="font-jost font-bold text-[22px]">Navigation</h2>
      <div className="w-[22px] h-[3px] border-primary-green border-2" />
			<div className="flex flex-col space-y-2 text-sm ">
				<Link href="/" className="font-rubik font-light text-base">À propos</Link>
				<Link href="/" className="font-rubik font-light text-base">Nos annonces</Link>
				<Link href="/" className="font-rubik font-light text-base">Nos services</Link>
				<Link href="/" className="font-rubik font-light text-base">Notre vision</Link>
				<Link href="/" className="font-rubik font-light text-base">Contact</Link>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
    		<h2 className="font-jost font-bold text-[22px]">Newsletter</h2>
			<div className="w-[22px] h-[3px] border-primary-green border-2" />
					<div className="flex flex-col space-y-2 text-sm ">
				<p className="font-rubik font-light text-base mb-4 text-justify lg:text-left">Notre plateforme facilite les échanges locaux entre les jardiniers urbains, les producteurs de petite échelle et les amateurs de produits frais.</p>

				{/* Form */}
				<div className="flex lg:flex-row justify-between space-y-4 lg:space-y-0 lg:items-center lg:space-x-6 w-full rounded-full border-white border-[1px] py-1 px-1">
				<input
					className="input"
					type="email"
					placeholder="Saisissez votre email ..."
				/>
				
					<button 
					className="btn !m-0 bg-primary-green font-rubik font-medium p-4 text-white text-center" 
					id="form-contact">
					<GrMail className="text-lg" />
					</button>      
				
				</div>
					</div>
			</div>
	</div>
	<div className="flex items-center justify-center px-6 pt-12 text-sm">
		<span className="">© copyright 2023.  Tous droits réservés.</span>
	</div>
</footer>
  )
}

export default Footer