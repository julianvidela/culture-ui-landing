"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarMenuItemProps {
  path: string,
  title: string,
}

export const SidebarMenuItem = ({ path, title }: SidebarMenuItemProps) => {
  const pathname = usePathname()
  return (
    <div>
      <Link href={path} className={`${pathname === path ? 'bg-gray-300' : ''}  w-full px-2 inline-flex space-x-2 items-center  py-3  transition ease-linear duration-150`}>
        <div className="flex flex-col">
          <span className="text-sm">{title}</span>
        </div>
      </Link>
    </div >
  )
}
