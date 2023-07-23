import Image from 'next/image'
import React from 'react'

const PicturesGrid = () => {
  return (
    
    <section id="clients" className="section py-16 lg:pb-32 lg:pt-24">

      <div className="flex flex-col w-full justify-center mb-14">
        <div className="space-y-6 text-center"> 
          <span className="section-subtitle text-primary-green">Nos clients</span>
          <h2 className="section-title text-dark">Une Collaboration fructifiante <br /> et des jardins éblouissants</h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-9 gap-x-4">

        {/* 1ere colonne */}
        <div className="col-span-9 lg:col-span-3 flex flex-col space-y-4">
          <Image src="/img/picturesGrid/grid-col-1-img-1.webp" width={405} height={249} alt="Notre vision" unoptimized />

          <Image src="/img/picturesGrid/grid-col-1-img-2.webp" width={405} height={249} alt="Notre vision" unoptimized />
        </div>

        {/* 2eme colonne */}
        <div className="col-span-9 my-4 lg:my-0 lg:col-span-3">
          <Image src="/img/picturesGrid/grid-col-2.webp" className="w-[405px] object-cover rounded-xl h-[249px] lg:w-[413px] lg:h-[513px]" width={413} height={513} alt="Notre vision" unoptimized />
        </div>

        {/* 3eme colonne */}
        <div className="col-span-9 lg:col-span-3 flex flex-col space-y-4">

          <Image src="/img/picturesGrid/grid-col-3-img-1.webp" width={405} height={249} alt="Notre vision" unoptimized />

          <Image src="/img/picturesGrid/grid-col-3-img-2.webp" width={405} height={249} alt="Notre vision" unoptimized />
        </div>
      </div>
    </section>
  )
}

export default PicturesGrid