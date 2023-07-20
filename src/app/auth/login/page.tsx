import Input from '@/app/components/forms/Input'
import LoginForm from '@/app/components/forms/LoginForm'
import Footer from '@/app/components/website/Footer'
import Header from '@/app/components/website/Header'
import React from 'react'

const page = () => {
  return (
    <>
    <Header />
    {/* <div>Login</div>
    <AuthComponent /> */}
          <section className="w-full flex">
    {/* 1ere colonne */}
    <div className="py-16 hidden lg:block lg:py-48 lg:w-[50%] bg-login">
    &nbsp;
    </div>

    {/* 2eme colonne */}
    <div className="py-16 px-8 lg:py-32 lg:w-[50%] flex flex-col justify-center">
      <div className="flex flex-col justify-center w-full lg:w-[90%] mx-auto">
        {/* <h3 className="font-jost font-semibold text-[18px] lg:text-4xl text-primary-dark-green mb-8">Je m'inscris avec :</h3>
        <div className="flex justify-between space-x-4 p-4 bg-primary-light-green w-full rounded-xl mb-4 cursor-pointer">
          <img src="/img/auth/google.svg" alt="google" className="w-7" />
          <span className="font-rubik font-light text-[18px] lg:text-[16px] text-primary-dark-green">S’inscrire avec Google</span>
          <span className="text-center">  </span>
        </div> */}

        {/* <div className="flex justify-center items-center my-8 space-x-6 w-full">
          <div className="border-t-2 border-primary-dark-green flex-grow"></div>
          <span className="font-jost font-semibold text-[16px] text-primary-dark-green mx-4">Ou</span>
          <div className="border-t-2 border-primary-dark-green flex-grow"></div>
        </div> */}

        <h3 className="font-jost font-semibold text-[18px] lg:text-4xl text-primary-dark-green mb-8">Déjà inscrit ? Connecte-toi !</h3>
        {/* <GoogleLoginButton /> */}

        <div className="flex justify-center items-center my-8 space-x-6 w-full">
          <div className="border-t-2 border-primary-dark-green flex-grow"></div>
          <span className="font-jost font-semibold text-[16px] text-primary-dark-green mx-4">Ou</span>
          <div className="border-t-2 border-primary-dark-green flex-grow"></div>
        </div>

        <LoginForm />
      </div>
    </div>
  </section>
    <Footer />
</>
  )
}

export default page