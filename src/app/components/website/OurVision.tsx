import Image from 'next/image'
import React from 'react'

const OurVision = () => {
  return (
    
    <section className="section bg-primary-light-green py-16 lg:py-32">
      <div className="flex w-full justify-center">
      <div className="grid lg:grid-cols-12 gap-x-20">

        {/* 1ere colonne */}
        <div className="col-span-9 hidden lg:block">
          <Image src="/img/ourVision/vision-section-img.png" width={800} height={400} alt="Notre vision" />
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