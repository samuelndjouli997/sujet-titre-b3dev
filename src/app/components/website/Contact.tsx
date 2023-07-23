import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <section className="section py-16 lg:py-32 bg-primary-light-green">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <span className="section-subtitle text-primary-green">Contact</span>
          <h2 className="section-title text-dark">Contactez-nous</h2>
          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <Link href="/" className="btn bg-primary-green font-rubik font-medium text-white">Contactez-nous</Link>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact