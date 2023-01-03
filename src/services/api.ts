import axios from "axios";

export const api = axios.create({
  baseURL: "https://reciclarte-api.onrender.com",
  timeout: 10000,
});

