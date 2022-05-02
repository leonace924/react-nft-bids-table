import React from 'react';
import { View, Text, Loading, Table } from 'components/Common';
import { API_URL } from 'lib/constant';
import { useFetch } from 'hooks/useFetch';
import { Bid } from 'types';

export const BidderTable = () => {
  const { data, error, status } = useFetch<{ bids: Bid[] }>(API_URL);
  console.log(data, status);

  if (error) return <Text>{error.message}</Text>;
  if (status === 'fetching') return <Loading />;

  return <View>{data && data.bids && <Table data={data.bids} pageSize={5} />}</View>;
};
