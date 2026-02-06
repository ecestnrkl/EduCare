import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

const api = axios.create({
  baseURL: API_URL,
});

// Automatically attach token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 responses globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location = "/Login";
    }
    return Promise.reject(error);
  }
);

export default api;
