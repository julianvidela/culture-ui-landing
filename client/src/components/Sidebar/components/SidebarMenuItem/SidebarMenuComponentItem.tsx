"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarMenuComponentItemProps {
  slug: string,
  name: string,
}

export const SidebarMenuComponentItem = ({ name, slug }: SidebarMenuComponentItemProps) => {
  const pathname = usePathname()
  return (
    <div>
      <Link href={`/components/${slug}`} className={`${pathname === `/components/${slug}` ? 'bg-primary-base rounded-lg' : ''} font-semibold text-[14px] w-full px-2 inline-flex space-x-2 items-center py-3 transition ease-linear duration-150  hover:text-primary hover:rounded-lg`}>
        <div className="flex flex-col">
          <span className="text-sm">{name}</span>
        </div>
      </Link>
    </div >
  )
}
