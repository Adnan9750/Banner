import axios from "axios";

const API = axios.create({
  baseURL: 'https://marketplace-be.fly.dev',
  headers: { "ngrok-skip-browser-warning": "true" },
});
// API.interceptors.request.use((req) => {
//   if (Cookies.get("authToken")) {
//     req.headers.Authorization = `Bearer ${Cookies.get("authToken")}`;
//   }
//   return req;
// });

export default API;