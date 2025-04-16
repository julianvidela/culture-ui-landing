import axios from "axios";

const API_URL = "https://c23-53-webapp.onrender.com/api/v1/component";


export const componentService = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response)
    return response.data; 
  } catch (error) {
    console.error("Error obteniendo los componentes:", error);
    return [];
  }
};

