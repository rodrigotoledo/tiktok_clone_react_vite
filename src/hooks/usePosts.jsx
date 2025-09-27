import { useQuery } from '@tanstack/react-query';
import axios from '../api/axios';

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await axios.get('/posts');
      return response.data;
    },
    keepPreviousData: true
  });
};