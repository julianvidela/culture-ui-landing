import { menuItems } from "./Sidebar.data"
import { SidebarMenuComponentItem } from "./components/SidebarMenuItem/SidebarMenuComponentItem"
import { SidebarMenuItem } from "./components/SidebarMenuItem/SidebarMenuItem"
import { componentService } from "@/services/componentService";

interface ComponentI {
  slug: string;
  name: string;
}

export default async function Sidebar() {
  const component = await componentService()
  return (
    <div id="menu" className="min-h-screen z-10 text-white w-full left-0 h-screen ">
      <div id="nav" className=" ">
        <div className="pt-10 pb-5">
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
            component?.map((item: ComponentI) => {
              return (
                <SidebarMenuComponentItem key={item.slug} {...item} />
              )
            })
          }
        </div>
      </div>
    </div >
  )

}

