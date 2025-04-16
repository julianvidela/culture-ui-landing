
import axios from "axios";

const API_BASE_URL = "https://c23-53-webapp.onrender.com/api/v1";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

