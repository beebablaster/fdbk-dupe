import { useGetURLQuery } from '@/hooks/useGetURLQuery';

export const useGetEmailFromURL = (): string => {
  return useGetURLQuery('email', { decode: true, base: 'base64' });
}