
import React from 'react'


import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="section py-3 bg-primary-light-green">
	<div className="container flex justify-between items-center h-16 mx-auto">
		<Link href="/">
			<Image src="/img/header/main-logo.svg" alt="logo" width={150} height={50} />
		</Link>

		<ul className="items-stretch hidden space-x-8 font-medium font-rubik text-lg text-dark lg:flex">
			<li className="flex">
				<Link href="#about">
					À propos
				</Link>
			</li>
			<li className="flex">
				<Link href="#values">
					Nos valeurs
				</Link>
			</li>
			<li className="flex">
				<Link href="#vision">
					Notre vision
				</Link>
			</li>
			<li className="flex">
				<Link href="#clients">
					Nos clients
				</Link>
			</li>
		</ul>

		<ul className="items-center font-medium hidden space-x-8 font-rubik text-lg text-dark lg:flex">
			<li className="flex">
				<Link href="/auth/login" className='pr-4 border-r-[1px] border-[#737373]'>
					Connexion
				</Link>
			</li>
			<li className="flex !ml-4">
				<Link href="/auth/register" className="btn bg-primary-green text-white">
					Inscription
				</Link>
			</li>
		</ul>
		
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
  )
}

export default Header