import { componentsData } from './components.data'
import Link from 'next/link'
import { AllComponents } from '@/components'

const componentPage = () => {
  return (
    <>
      <h1 className='text-5xl pb-2 font-semibold'>All components</h1>
      <p>An overview of components available in our library.</p>
      <Link href={`#`} className='mt-2 px-5 py-2 bg-secondary-base hover:bg-secondary-base/90  cursor-pointer font-semibold rounded-lg inline-block'>Explore our components</Link>
      <div className='grid grid-cols-2 place-items-center my-10 '>
        {
          componentsData.map(component => {
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
