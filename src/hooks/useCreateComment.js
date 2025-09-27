import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from '../api/axios';

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ postId, body }) => {
      const res = await axios.post(`/posts/${postId}/comments`, {
        method: 'POST',
        comment: {body: body},
      });

      return res.data;
    },
    onSuccess: (_, { postId }) => {
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
    },
  });
};
