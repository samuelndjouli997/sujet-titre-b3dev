import Image from 'next/image'
import React from 'react'

const OurVision = () => {
  return (
    
    <section id="vision" className="section bg-primary-light-green py-16 lg:py-32">
      <div className="flex w-full justify-center">
        <div className="grid lg:grid-cols-12 gap-x-20">

          {/* 1ere colonne */}
          <div className="col-span-9 bg-our-vision rounded-2xl hidden lg:block">
            {/* <Image src="/img/ourVision/bg-vision-section.webp" width={800} height={400} alt="Notre vision" /> */}
            <div className="w-full">
              <div className="bg-white inline-block rounded-2xl m-8 p-6 w-6/12">
                <h2 className="section-title text-dark">Notre vision</h2>
                <p className="font-jost font-normal text-left text-blue-ish-gray lg:text-base mt-6">Notre plateforme est née de la conviction profonde que la proximité et la durabilité sont les fondements d'une société épanouie et équilibrée. Nous avons à cœur de faciliter les échanges locaux entre jardiniers urbains, producteurs de petite échelle et amoureux des produits frais, pour créer une communauté unie par la passion de la nature et le respect de l'environnement.</p>
              </div>

            </div>
            
          </div>

          {/* 2eme colonne */}
          <div className="col-span-3 w-full flex flex-col justify-center space-y-6">
            
            {/* Card 1 */}
            <div className="bg-primary-dark-green py-4 px-6 rounded-xl text-white">
              <Image src="/img/ourVision/customer.svg" className="mb-2" width={56} height={56} alt="Notre vision" />
              <span className="font-jost lg:text-[22px] font-medium">Partage</span>
            </div>

            {/* Card 2 */}
            <div className="bg-primary-dark-green py-4 px-6 rounded-xl text-white">
              <Image src="/img/ourVision/qualite.svg" className="mb-2" width={56} height={56} alt="Notre vision" />
              <span className="font-jost lg:text-[22px] font-medium">Qualité</span>
            </div>

            {/* Card 3 */}
            <div className="bg-primary-dark-green py-4 px-6 rounded-xl text-white">
              <Image src="/img/ourVision/construction-worker.svg" className="mb-2" width={56} height={56} alt="Notre vision" />
              <span className="font-jost lg:text-[22px] font-medium">Intégrité</span>
            </div>

        
            
          </div>

        </div>
      </div>

    </section>
    
  )
}

export default OurVision