
import API_CONFIG from '../config/apiConfig';

/**
 * API Service
 * 
 * A service for making HTTP requests to the backend API.
 * This provides a centralized way to handle API calls, errors, and authentication.
 */
class ApiService {
  /**
   * Make a GET request to the API
   */
  async get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
    const url = new URL(API_CONFIG.baseUrl + endpoint);
    
    if (params) {
      Object.keys(params).forEach(key => {
        url.searchParams.append(key, params[key]);
      });
    }
    
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: this.getHeaders(),
    });
    
    return this.handleResponse<T>(response);
  }
  
  /**
   * Make a POST request to the API
   */
  async post<T>(endpoint: string, data?: any): Promise<T> {
    const response = await fetch(API_CONFIG.baseUrl + endpoint, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });
    
    return this.handleResponse<T>(response);
  }
  
  /**
   * Make a PUT request to the API
   */
  async put<T>(endpoint: string, data?: any): Promise<T> {
    const response = await fetch(API_CONFIG.baseUrl + endpoint, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });
    
    return this.handleResponse<T>(response);
  }
  
  /**
   * Make a DELETE request to the API
   */
  async delete<T>(endpoint: string): Promise<T> {
    const response = await fetch(API_CONFIG.baseUrl + endpoint, {
      method: 'DELETE',
      headers: this.getHeaders(),
    });
    
    return this.handleResponse<T>(response);
  }
  
  /**
   * Get headers for API requests
   */
  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    
    // Add authorization header if user is logged in
    const token = localStorage.getItem('auth_token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    return headers;
  }
  
  /**
   * Handle API response
   */
  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `API Error: ${response.status}`);
    }
    
    return response.json() as Promise<T>;
  }
}

export default new ApiService();
