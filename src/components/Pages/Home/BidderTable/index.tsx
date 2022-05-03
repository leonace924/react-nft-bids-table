import React from 'react';
import { View, Text, Loading, Table } from 'components/Common';
import { API_URL } from 'lib/constant';
import { useFetch } from 'hooks/useFetch';
import { BidDto } from 'types';

export const BidderTable = () => {
  const { data, error, status } = useFetch<{ bids: BidDto[] }>(API_URL);

  if (error) return <Text>{error.message}</Text>;
  if (status === 'fetching') return <Loading />;

  return <View>{data && <Table data={data.bids} pageSize={10} />}</View>;
};
