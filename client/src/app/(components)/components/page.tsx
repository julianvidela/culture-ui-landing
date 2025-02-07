import { Suspense } from 'react'
import { AllComponents } from '@/components'
import { componentService } from '@/services/componentService'
import { BsStars } from "react-icons/bs";

interface ComponentI {
  name: string;
  isPremiun: boolean;
  slug: string;
}

const componentPage = async () => {
  const componentServices = await componentService()
  return (
    <>
      <h1 className='text-large pb-2 font-semibold text-white'>All components</h1>
      <p className='text-white text-small'>An overview of components available in our library.</p>
      <div className='flex items-center gap-2 w-[270px] px-5 py-4 mt-5 bg-primary-base rounded-lg'>
        <BsStars className='text-white text-xl' />
        <p className='font-semibold text-small text-white'>
          Explore our components
        </p>
      </div >

      <div className='flex flex-wrap gap-10 w-full my-10 '>
        {
          componentServices.map((component: ComponentI) => {
            return (
              <AllComponents component={component} key={component.name} />
            )
          })
        }
      </div>
    </>
  )
}

export default componentPage
