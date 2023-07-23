import Image from 'next/image'
import React from 'react'


const About = () => {
  return (
    <section id="about" className="section bg-white lg:mt-10 py-12 lg:pt-14 lg:pb-14">
          <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-6">
            <div className="lg:col-span-3 flex flex-col w-full justify-center">
  
              <div className="space-y-6"> 

                <span className="section-subtitle text-primary-green">A propos de nous</span>
                <h2 className="section-title text-dark">Introduction</h2>
                
                <div className="block lg:hidden my-6">
                  <Image src="/img/about/about-section.webp" alt="" width={500} height={500} />
                  
                </div>  

                <p className="font-rubik font-light text-dark text-[16px]">Nous croyons en la puissance de la proximité et de la durabilité, c'est pourquoi notre plateforme facilite les échanges locaux entre les jardiniers urbains, les producteurs de petite échelle et les amateurs de produits frais. Que vous ayez un petit potager sur votre balcon, dans votre cour ou même dans votre serre, notre plateforme vous permet de mettre en valeur votre production locale auprès d'une communauté engagée.</p>
                
              </div>
            </div>

            <div className="lg:col-span-3 hidden lg:block">
              <img src="/img/about/about-section.webp" alt="" />
            </div>  

          </div>
        </section>
  )
}

export default About