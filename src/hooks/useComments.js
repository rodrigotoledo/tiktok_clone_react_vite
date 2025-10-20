// hooks/useComments.js
import { useQuery } from '@tanstack/react-query';
import axios from '../api/axios';

export const useComments = (postId) => {
  return useQuery({
    queryKey: ['comments', postId],
    queryFn: async () => {
      try {
        const response = await axios.get(`/posts/${postId}/comments`);

        
        return response.data?.comments || [];
        
      } catch (error) {
        console.error('Error fetching comments:', error);
        return [];
      }
    },
    keepPreviousData: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchInterval: 20000
  });
};
