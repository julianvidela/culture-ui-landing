import React from 'react'
import CardsPricing from './components/CardsPricing';

const Premium = () => {
  return (
    <section className='h-auto w-auto p-4 mb-20'>
      <div className='flex flex-col items-center text-center mt-16 '>
        <h1 className='text-[40px] font-bold text-[var(--text-color-secondary)]'>Choose the Perfect Plan for Your Project</h1>
        <p className='text-[16px] font-bold text-[var(--text-color-primary)]'>Explore opciones de precios adaptadas a desarrolladores de todos los niveles.</p>
      </div>
      <div className='w-auto h-auto mt-20'>
        <CardsPricing />
      </div>
    </section>
  )
}

export default Premium;
