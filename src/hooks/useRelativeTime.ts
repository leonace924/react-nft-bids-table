import { useCallback } from 'react';
import { convertTimeRelative } from 'utils/convertTimeRelative';

export const useRelativeTime = () => {
  return useCallback((timeStamp: number) => {
    return convertTimeRelative(timeStamp);
  }, []);
};
