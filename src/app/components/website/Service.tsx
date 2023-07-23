import { Services } from '@/app/types/Index'
import Image from 'next/image'
import React from 'react'

const Service = ({title, description, icon}: Services) => {
  return (
    <div className="bg-white rounded-[10px] custom-shadow w-full col-span-3 flex flex-col items-start space-y-6 -mt-10 lg:-mt-20 p-8">
      
      <h3 className="font-jost font-bold text-left text-primary-dark-green uppercase lg:text-[22px]">{title}</h3>
      <p className="font-jost font-normal text-left text-blue-ish-gray lg:text-base">{description}</p>

      <hr className="w-11/12 border-blue-ish-gray" />

      <div className="flex space-x-4 justify-between items-center">
        
      </div>
    </div>
  )
}

export default Service