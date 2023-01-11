import axios from "axios";

export const api = axios.create({
  baseURL: "https://reciclarte-api.onrender.com",
  timeout: 10000,
});

export const gitHub = axios.create({
  baseURL: "https://api.github.com/users/",
  timeout: 10000,
});
