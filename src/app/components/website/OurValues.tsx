import React from 'react'
import Service from './Service'
import { services } from '@/app/constants/Index'

const OurValues = () => {
  return (
    <>
    <section id="values" className="section bg-our-services pt-16 pb-24 lg:pt-32 lg:pb-44">
        <div className="flex flex-col w-full justify-center">
          <div className="space-y-6 text-center"> 
            <span className="section-subtitle text-white">Nos valeurs</span>
            <h2 className="section-title text-white">Une plateforme à l'écoute de ses clients</h2>
          </div>
        </div>
      </section>
      <div className="grid w-10/12 mx-auto mb-16 lg:mb-24 lg:grid-cols-12 gap-y-16 lg:gap-x-8">
        {
          services.map((service) => {
            return (
              <Service key={service.id} {...service} />
            )
            
          })
        }
      </div>
      </>
  )
}

export default OurValues