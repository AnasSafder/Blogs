import api from '../api/axios';

export const fetchUserPosts = async (userId: number, page: number, limit: number) => {
  const response = await api.get<{ posts: any[]; totalPosts: number }>(
    `/users/${userId}/posts?page=${page}&limit=${limit}`
  );
  return response.data;
};
