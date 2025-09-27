// hooks/useComments.js
import { useQuery } from '@tanstack/react-query';
import axios from '../api/axios';

export const useComments = (postId) => {
  return useQuery({
    queryKey: ['comments', postId],
    queryFn: async () => {
      const res = await axios.get(`/posts/${postId}/comments`);
      return res.data;
    },
    keepPreviousData: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchInterval: 20000
  });
};
