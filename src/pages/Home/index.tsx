import React from 'react';
import { View, Title } from 'components/Common';
import { BidderTable } from 'components/Pages/Home';

const HomePage = () => {
  return (
    <View>
      <Title className="mb-6 text-3xl text-blue-600">Bidder Table</Title>
      <BidderTable />
    </View>
  );
};

export default HomePage;
