
import apiService from './apiService';
import API_CONFIG from '../config/apiConfig';

export interface Skill {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  likesCount: number;
  commentsCount: number;
  lessonsCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface SkillFilters {
  category?: string;
  search?: string;
  authorId?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
}

/**
 * Skill Service
 * 
 * A service for handling skill-related API calls.
 */
class SkillService {
  /**
   * Get all skills with optional filtering
   */
  async getSkills(filters?: SkillFilters): Promise<{ skills: Skill[], total: number }> {
    const params = filters ? Object.fromEntries(
      Object.entries(filters).filter(([_, v]) => v !== undefined)
    ) : {};
    
    return apiService.get<{ skills: Skill[], total: number }>(
      API_CONFIG.endpoints.skills,
      params as Record<string, string>
    );
  }
  
  /**
   * Get a skill by ID
   */
  async getSkillById(id: string): Promise<Skill> {
    return apiService.get<Skill>(`${API_CONFIG.endpoints.skills}/${id}`);
  }
  
  /**
   * Create a new skill
   */
  async createSkill(skillData: Omit<Skill, 'id' | 'createdAt' | 'updatedAt'>): Promise<Skill> {
    return apiService.post<Skill>(API_CONFIG.endpoints.skills, skillData);
  }
  
  /**
   * Update an existing skill
   */
  async updateSkill(id: string, skillData: Partial<Skill>): Promise<Skill> {
    return apiService.put<Skill>(`${API_CONFIG.endpoints.skills}/${id}`, skillData);
  }
  
  /**
   * Delete a skill
   */
  async deleteSkill(id: string): Promise<void> {
    return apiService.delete<void>(`${API_CONFIG.endpoints.skills}/${id}`);
  }
  
  /**
   * Like a skill
   */
  async likeSkill(id: string): Promise<{ likesCount: number }> {
    return apiService.post<{ likesCount: number }>(`${API_CONFIG.endpoints.skills}/${id}/like`);
  }
  
  /**
   * Unlike a skill
   */
  async unlikeSkill(id: string): Promise<{ likesCount: number }> {
    return apiService.delete<{ likesCount: number }>(`${API_CONFIG.endpoints.skills}/${id}/like`);
  }
}

export default new SkillService();
