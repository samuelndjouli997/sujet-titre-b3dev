import { posts } from '@/app/constants/Index'
import React from 'react'
import Post from './Post'
import Link from 'next/link'

const LatestPosts = () => {
  return (
    <section className="section bg-white pb-16 lg:pt-14 lg:pb-24">
      <div className="flex flex-col w-full justify-center">
        <div className="space-y-6 text-center"> 
          <span className="section-subtitle text-primary-green">Nos annonces</span>
          <h2 className="section-title text-dark">Découvrez les dernières annonces</h2>
        </div>
      </div>
      
      
      <div className="grid lg:grid-cols-12 gap-x-8 
      mb-10 lg:mb-16">
        {
          posts.map((post, index) => {
            return (
              <Post key={post.id} {...post} />
            )
           
            })
        }

      </div>
      <div className="flex flex-col justify-center items-center">
            <Link href="/auth/register" className="btn bg-primary-green font-rubik font-medium text-white">Voir plus d'annonces</Link>
          </div>
    </section>
  )
}

export default LatestPosts