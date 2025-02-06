import Image from "next/image"
import Link from "next/link"

interface allComponentsI {
  component: {
    name: string,
    image: string,

  }
}

export const AllComponents = ({ component }: allComponentsI) => {
  const { name, image } = component
  return (
    <>
      <Link href={`#`} key={name}>
        <div className='flex flex-col m-5'>
          <div className='w-64 h-48 relative '>
            <Image src={image} fill className='object-cover rounded-lg' alt={component.name} />
          </div>
          <h1 className='pt-2'>{name}</h1>
        </div>
      </Link>

    </>
  )
}

