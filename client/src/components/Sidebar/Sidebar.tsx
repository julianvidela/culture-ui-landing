import Link from "next/link"
import { IoLogoReact } from "react-icons/io5"
import { ItemComponents, menuItems } from "./Sidebar.data"
import { SidebarMenuItem } from "./components/SidebarMenuItem/SidebarMenuItem"

export default function Sidebar() {

  return (
    <div id="menu" className="bg-gray-200 min-h-screen z-10 text-black w-[20%] left-0 h-screen ">
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center  text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className='mr-2 text-black' />
          <span className="text-black">Culture</span>
          <span className="text-gray-400">UI</span>.
        </h1>
      </div>
      <div id="nav" className="w-full px-6">
        <div>
          {
            menuItems.map((item) => {
              return (
                <SidebarMenuItem key={item.path} {...item} />
              )
            })
          }
        </div>
        <div className="my-4">

          <p className="text-xl mt-4 mb-2">Components</p>
          {
            ItemComponents.map(item => {
              return (
                <SidebarMenuItem key={item.path} {...item} />
              )
            })
          }
        </div>
      </div>
    </div >
  )

}

