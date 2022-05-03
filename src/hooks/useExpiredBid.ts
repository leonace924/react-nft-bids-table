import { useCallback } from 'react';
import { getDateDiff } from 'utils/getDateDiff';

export const useExpiredBid = () => {
  return useCallback((timeStamp: number) => {
    const { isFuture } = getDateDiff(timeStamp);
    return !isFuture;
  }, []);
};
