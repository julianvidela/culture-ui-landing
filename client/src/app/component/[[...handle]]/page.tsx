import { AnatomyComponent } from "@/pages/Anatomy/anatomyComponent"
interface ComponentPageProps {
  params: {
    handle: string
  }
}
function ComponentPage(props: ComponentPageProps) {
  console.log(props)
  return (
    <>
      <AnatomyComponent handle={props.params.handle[0]} />
    </>
  )
}

export default ComponentPage
