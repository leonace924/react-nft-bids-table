export type BidDto = {
  id: string;
  price: string; // wei
  createdAt: number; // UTC timestamp
  expiration: number; // UTC timestamp
  bidder: string; // ethereum address
  nft: {
    contract: string; // ethereum address,
    id: number;
  };
};
