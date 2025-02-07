"use client"
import Image from "next/image"
import Link from "next/link"
import { FaLock } from "react-icons/fa";
import { useAuth } from "@/hooks/useAuth";

/*
 *
 * name, description, image, installationcli,properties [prop, type, default ], usage, premium 
 * */

export const AllComponents = ({ component }: any) => {
  const { user } = useAuth()
  return (
    <>
      <Link href={`/components/${component.slug}`} key={component.name} >
        <div className=" shadow-md overflow-hidden max-w-sm w-full">
          <div className="border-2 rounded-lg relative border-text-primary">
            <div className="relative w-64 h-56 m-4">
              <Image src={component.imageURL} fill alt="Product image" className="rounded-lg object-cover" />
            </div>
            {component.isPremium && !user?.isPremium ? (
              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
                <FaLock className="bg-white" />
              </button>
            ) : ""}

          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-semibold text-white mb-1">{component.name}</h2>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

