import React from 'react';
import { View, Title } from 'components/Common';
import { BidderTable } from 'components/Pages/Home/BidderTable';

const HomePage = () => {
  return (
    <View>
      <Title className="text-3xl text-blue-600 mb-6">Bidder Table</Title>
      <BidderTable />
    </View>
  );
};

export default HomePage;
