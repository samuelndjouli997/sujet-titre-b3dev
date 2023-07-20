import Image from 'next/image'
import React from 'react'

const PicturesGrid = () => {
  return (
    
    <section className="section py-16 lg:py-32">
      <div className="grid lg:grid-cols-9 gap-x-4">

        {/* 1ere colonne */}
        <div className="col-span-9 lg:col-span-3 flex flex-col space-y-4">
          <Image src="/img/picturesGrid/grid-col-1-img-1.jpg" width={405} height={249} alt="Notre vision" unoptimized />

          <Image src="/img/picturesGrid/grid-col-1-img-2.jpg" width={405} height={249} alt="Notre vision" unoptimized />
        </div>

        {/* 2eme colonne */}
        <div className="col-span-9 my-4 lg:my-0 lg:col-span-3">
          <Image src="/img/picturesGrid/grid-col-2.jpg" className="w-[405px] object-cover rounded-xl h-[249px] lg:w-[413px] lg:h-[513px]" width={413} height={513} alt="Notre vision" unoptimized />
        </div>

        {/* 3eme colonne */}
        <div className="col-span-9 lg:col-span-3 flex flex-col space-y-4">

          <Image src="/img/picturesGrid/grid-col-3-img-1.jpg" width={405} height={249} alt="Notre vision" unoptimized />

          <Image src="/img/picturesGrid/grid-col-3-img-2.jpg" width={405} height={249} alt="Notre vision" unoptimized />
        </div>
      </div>
    </section>
  )
}

export default PicturesGrid