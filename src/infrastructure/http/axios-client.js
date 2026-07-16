import axios from 'axios';
import { env } from '../config/env';
import { localTokenStorage } from '../storage/local-token-storage';

export const axiosClient = axios.create({
  baseURL: env.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adjunta el token en cada request si existe sesion activa.
axiosClient.interceptors.request.use((config) => {
  const token = localTokenStorage.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Si el backend responde 401, se limpia la sesion local.
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      localTokenStorage.clear();
    }
    return Promise.reject(error);
  }
);