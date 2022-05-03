import { useCallback } from 'react';
import { useNft } from 'use-nft';

export const useNFTMeta = () => {
  return useCallback((address: string, id: string) => {
    const { loading, nft } = useNft(address, id);

    const name = loading ? 'Loading...' : nft?.name;
    const image = loading ? 'Loading...' : nft?.image;

    return { image, name };
  }, []);
};
