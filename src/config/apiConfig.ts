
/**
 * API Configuration
 * 
 * This file contains configuration for connecting to the Spring Boot backend.
 * The baseUrl can be updated based on environment (development, production, etc.)
 */

// The base URL for the Spring Boot backend API
// In development, you might use localhost:8080
// In production, you would use your deployed backend URL
export const API_CONFIG = {
  baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:8080/api',
  
  // Endpoints
  endpoints: {
    skills: '/skills',
    users: '/users',
    auth: {
      login: '/auth/login',
      register: '/auth/register',
      refreshToken: '/auth/refresh-token',
    },
    comments: '/comments',
    messages: '/messages',
    notifications: '/notifications',
  },
  
  // Request timeout in milliseconds
  timeout: 10000,
};

/**
 * Helper function to build full API URLs
 */
export const buildApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.baseUrl}${endpoint}`;
};

export default API_CONFIG;
