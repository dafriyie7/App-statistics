import axios from "axios";

const BASE_URL = "https://telemetryapi.innoverex.com/api/v1";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: false,           // only true if server sets same‑site cookies
});

// ―― Attach JWT from Redux (or localStorage on first load) ――
axiosInstance.interceptors.request.use((config) => {
  const token =
    window.localStorage.getItem("accessToken") ?? null; // fallback on refresh
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosInstance;


// // src/api/axios.js
// import axios from "axios";

// const BASE_URL = "https://telemetryapi.innoverex.com/api/v1";

// const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   headers: { "Content-Type": "application/json" },
//   withCredentials: false,
// });

// // 🚫 Disable Authorization header entirely for now
// // You can re-enable this when your protected routes require it
// // axiosInstance.interceptors.request.use((config) => {
// //   const token = localStorage.getItem("accessToken");
// //   if (token) config.headers.Authorization = `Bearer ${token}`;
// //   return config;
// // });

// export default axiosInstance;
