"use client"


import React, { useEffect, useState } from 'react'


import Link from 'next/link'
import Image from 'next/image'

const Header = () => {

	const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [show, setShow] = useState("translate-y-0");
    const [opacity, setOpacity] = useState("opacity-0");

	const openMenu = () => {
		setIsMenuOpen(true);
		setOpacity("opacity-100");
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
		setOpacity("opacity-0");
	};

	const controlNavbar = () => {
		if (window.scrollY > 200) {
		  if (window.scrollY > lastScrollY && !isMenuOpen) {
			setShow("-translate-y-[120px]")
		  } else {
			setShow("shadow-sm")
		  }
	
		} else {
		  setShow("translate-y-0")
		}
		setLastScrollY(window.scrollY)
	  }

	  useEffect(() => {
		window.addEventListener("scroll", controlNavbar);
	
		return () => {
		  window.removeEventListener("scroll", controlNavbar)
		}
	  }, [lastScrollY])




  return (
    <header className={`${show} section fixed w-full z-50 transition-transform duration-300 py-3 bg-primary-light-green`}>
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

			<div className="lg:hidden">
					{
				!isMenuOpen && (
					<button
					aria-label="Open Menu"
					title="Open Menu"
					className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
					  onClick={openMenu}
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#0F4229" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
				)
			}
					</div> 
		</div>

		{/* Nav Mobile */}
		{
			isMenuOpen && (
				<div className={`${opacity} transition-opacity duration-500 lg:hidden absolute !overflow-y-hidden left-0 top-0 z-[999]`}>
					<div className={`h-screen w-screen transition bg-primary-green duration-500`}>
						<div className="p-5 shadow-sm relative">
							<button
								aria-label="Close Menu"
								title="Close Menu"
								className="p-2 absolute right-8 top-8 transition duration-200 rounded focus:outline-none focus:shadow-outline"
								onClick={closeMenu}
								>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-8 h-8">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
								</svg>
							</button>

							
							
							<nav className="flex flex-col justify-between items-center mt-16">

							<div className="mt-10 flex flex-col justify-center items-center">
								<Link href="/">
									<Image src="/img/header/main-logo-white.svg" alt="logo" width={200} height={100} />
								</Link>
							</div>

							<ul className="flex flex-col justify-center items-center space-y-4 mt-12">
								<li>
								<Link href="#about" onClick={closeMenu} className="font-jost text-white text-[28px] tracking-[2%]" >À propos</Link>
								</li>
								<li>
								<Link href="#values" onClick={closeMenu} className="font-jost text-white text-[28px] tracking-[2%]" >Nos valeurs</Link>
								</li>
								<li>
								<Link href="#vision" onClick={closeMenu} className="font-jost text-white text-[28px] tracking-[2%]" >Notre vision</Link>
								</li>
								<li>
								<Link href="#clients" onClick={closeMenu} className="font-jost text-white text-[28px] tracking-[2%]" >Nos clients</Link>
								</li>
					
							</ul>

							<ul className="flex flex-col justify-center items-center space-y-4 mt-8">

								<li className='mt-6'>
								<Link href="/auth/register" onClick={closeMenu} className="font-jost text-white text-[28px] tracking-[2%]" >Inscription</Link>
								</li>
								<li className="btn bg-white">
								<Link href="/auth/login" onClick={closeMenu} className="font-jost text-primary-green text-[28px] tracking-[2%]" >Connexion</Link>
								</li>
							</ul>
							</nav>
						</div>
					</div>
        		</div>
			)
		}

		
</header>
  )
}

export default Header