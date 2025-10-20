import { useQuery } from '@tanstack/react-query';
import axios from '../api/axios';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      try {
        const response = await axios.get('/posts');

        console.log(response.data)
        
        return response.data?.posts || [];
        
      } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
      }
    },
    keepPreviousData: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchInterval: 20000
  });
};