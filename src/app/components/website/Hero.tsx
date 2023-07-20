import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="section bg-hero mx-auto">
      <div className="pt-[26px] pb-[144px] lg:pt-[106px] lg:pb-[160px] text-center flex flex-col justify-start lg:justify-center lg:items-center space-y-16">
        <h1 className="hero-title mt-12 lg:mt-8 max-w-[297px] lg:max-w-[950px]">
            Cultivez votre passion, partagez votre jardin.
        </h1>
        
        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
          <Link href="#explainer" className="btn bg-white font-rubik font-medium text-primary-green">En savoir plus</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero