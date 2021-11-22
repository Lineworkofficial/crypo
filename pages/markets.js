import React from 'react';
import MarketCarousel from '../components/MarketCarousel';
import MarketsList from '../components/MarketsList';
import Layout from '../components/Layout';

export default function markets() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <MarketCarousel />
          </div>
        </div>
      </div>
      <MarketsList />
    </Layout>
  );
}
