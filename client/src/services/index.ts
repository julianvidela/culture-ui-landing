
//
// export const getComponent = async () => {
//   try {
//     const component = await fetch(`https://culture-ui-document.s3.us-east-2.amazonaws.com/uploads/README.md-1738205044306`).then(res => res.json());
//     return component
//   } catch (error) {
//     console.log(error)
//   }
// }
//

export const getComponent = async () => {
  try {
    const response = await fetch(`https://c23-53-webapp-production.up.railway.app/api/v1/component`).then(res => res.json());
    return response.data
  } catch (error) {
    console.log(error)
  }
}


