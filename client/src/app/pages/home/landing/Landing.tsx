import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { Gallery } from '../components/Galllery/Gallery'

export const Landing = () => {
  return (
    <div className=''>
        <Navbar/>
        <Hero/>
        <Gallery/>
    </div>
  )
}
