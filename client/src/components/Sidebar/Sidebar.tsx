import { ItemComponents, menuItems } from "./Sidebar.data"
import { SidebarMenuItem } from "./components/SidebarMenuItem/SidebarMenuItem"

export default function Sidebar() {

  return (
    <div id="menu" className="min-h-screen z-10 text-white w-full left-0 h-screen ">
      <div id="nav" className=" ">
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

          <p className="text-xl text-[16px] font-semibold mt-4 mb-2">Components</p>
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

