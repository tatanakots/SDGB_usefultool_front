// src/config.js
const API_DOMAIN = import.meta.env.VITE_API_DOMAIN || 'http://localhost';
const API_PORT = import.meta.env.VITE_API_PORT ? `:${import.meta.env.VITE_API_PORT}` : '';

export const API_BASE_URL = `${API_DOMAIN}${API_PORT}`;
