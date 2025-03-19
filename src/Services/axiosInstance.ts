import axios from "axios";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

// Create Axios instance
const apiClient = axios.create({
  baseURL: apiBaseUrl, // Set from .env file
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get token from storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.error("Unauthorized! Redirecting to login...");
        localStorage.removeItem("token"); // Clear token on 401
        window.location.href = "/login"; // Redirect to login page
      } else {
        console.error("API Error:", error.response.data);
      }
    } else {
      console.error("Network Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
