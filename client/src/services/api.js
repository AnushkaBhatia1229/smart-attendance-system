import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-attendance-system-x905.onrender.com/api",
});

export default API;