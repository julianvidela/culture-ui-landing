"use client"
import { componentBySlugService } from "@/services/componentService";
import { OneComponent } from "@/components/OneComponent/OneComponent";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";

interface Props {
  params: {
    slug: string;
  }
}

interface ComponentI {
  name: string,
  description: string,
  installationCli: string,
  usageExample: string,
  properties: string[],
  isPremium: boolean,
  imageURL: string
  advancedUsage: string
}



const ComponentPage = (props: Props) => {
  const { user } = useAuth()
  const [data, setData] = useState({})

  useEffect(() => {
    const component = async () => {
      const service = await componentBySlugService(props.params.slug)
      const componentData = {
        name: service.name,
        description: service.description,
        installationCli: service.installationCli,
        usage: service.usageExample,
        properties: service.properties,
        advancedUsage: service.advancedUsage,
        isPremium: service.isPremium
      }
      setData(componentData)
    }
  }, [user]
  )
  return (
    <div className="flex flex-col flex-wrap w-full">
      <OneComponent user={user?.isPremium} component={data} />
    </div>
  )

};


export default ComponentPage;
