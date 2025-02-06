import { Navbar } from '@/components/Navbar/Navbar'
import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { Gallery } from '../components/Galllery/Gallery'
import { CardPremium } from '../components/CardPremium/CardPremium'
import { Footer } from '@/components/Footer/Footer'

export const Landing = () => {
  return (
    <div className=''>
        <Hero/>
        <Gallery/>
        <CardPremium/>
        <Footer/>
    </div>
  )
}
