
export const componentService = async () => {
  const response = await fetch('https://c23-53-webapp-production.up.railway.app/api/v1/component').then(res => res.json())
  return response
}

export const componentBySlugService = async (slug: string) => {
  const response = await fetch(`https://c23-53-webapp-production.up.railway.app/api/v1/component/slug?slug=${slug}`).then(res => res.json())
  return response
}
