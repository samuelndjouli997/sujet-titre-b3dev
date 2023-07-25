import Footer from '@/app/components/website/Footer'
import Header from '@/app/components/website/Header'

import React from 'react'

import RegisterForm from '@/app/components/forms/RegisterForm'


const page = () => {

  return (
    <>
    <Header />
      <section className="w-full flex">

        {/* 1ere colonne */}
        <div className="py-16 hidden lg:block lg:py-32 lg:w-[50%] bg-register">
        &nbsp;
        </div>

        {/* 2eme colonne */}
        <div className="pt-32 pb-16 px-8 lg:py-32 lg:w-[50% flex flex-col justify-center">
          <div className="flex flex-col justify-center w-full lg:w-[90%] mx-auto">
            {/* <h3 className="font-jost font-semibold text-[18px] lg:text-4xl text-primary-dark-green mb-8">Je m'inscris avec :</h3>
            <button className="flex justify-between space-x-4 p-4 bg-primary-light-green w-full rounded-xl mb-4 cursor-pointer">
              <img src="/img/auth/google.svg" alt="google" className="w-7" />
              <span className="font-rubik font-light text-[18px] lg:text-[16px] text-primary-dark-green">S’inscrire avec Google</span>
              <span className="text-center">  </span>
            </button>

            <div className="flex justify-center items-center my-8 space-x-6 w-full">
              <div className="border-t-2 border-primary-dark-green flex-grow"></div>
              <span className="font-jost font-semibold text-[16px] text-primary-dark-green mx-4">Ou</span>
              <div className="border-t-2 border-primary-dark-green flex-grow"></div>
            </div> */}

            <h3 className="font-jost font-semibold text-[18px] lg:text-4xl text-primary-dark-green mb-8">Je m'inscris avec :</h3>

            <p className="font-rubik font-light text-[14px] lg:text-[16px] text-primary-dark-green mb-6 lg:mb-4">Profitez de notre expérience en créant ton compte et rejoignez la communauté Ça potage !</p>

            <RegisterForm />
          </div>
        </div>
      </section>
    <Footer />
  </>
  )
}

export default page