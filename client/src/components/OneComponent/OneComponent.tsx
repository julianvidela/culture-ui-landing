"use client"
import React from 'react'
import { CodeBlock } from '../Atoms/codeBlock'
import { redirect } from 'next/navigation'



export const OneComponent = ({ component, user }: any) => {

  if (!user?.isPremium && component.isPremium) {
    redirect('/premium')
  }

  return (
    <>
      <h1 className="text-large font-bold mb-6 text-white">{component.name}</h1>
      <p className='text-white text-small pt-1 pb-10'>{component.description}</p>
      <h2 className="text-medium text-white pt-5 pb-6">Installation CLI</h2>
      <CodeBlock code={component.installationCli} language='bash' />
      <h2 className="text-medium text-white pt-20 pb-6">Usage</h2>
      <CodeBlock code={component.usage} language='tsx' />
      <h2 className='text-medium text-white pt-20 mb-6'>Component Properties</h2>
      <table className="text-left w-full">
        <thead className='flex text-white w-full'>
          <tr className='flex w-full mb-4 border border-text-primary bg-text-primary'>
            <th className="text-white p-4 w-1/4 ">Property</th>
            <th className="text-white p-4 w-1/4 ">Type</th>
            <th className="text-white p-4 w-1/4 ">Description</th>
          </tr>
        </thead>

        <tbody className='text-white flex-col items-center justify-between overflow-y-scroll w-full h-[50vh]'>
          {
            component.properties?.map((property: any) => (
              <tr className='flex w-full mb-4'>
                <td className='p-4 w-1/4'>{property.prop}</td>
                <td className='p-4 w-1/4'>{property.type}</td>
                <td className='p-4 w-1/4'>{property.description}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <h2 className='text-medium text-white pt-20 pb-6'>Advanced Code Example</h2>
      <CodeBlock code={component.advancedUsage} language='bash' />
    </>
  )
}

