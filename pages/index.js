import Layout from '../components/Layout';
import HistoryOrder from '../components/HistoryOrder';
import MarketHistory from '../components/MarketHistory';
import MarketNews from '../components/MarketNews';
import MarketPairs from '../components/MarketPairs';
import MarketTrade from '../components/MarketTrade';
import OrderBook from '../components/OrderBook';
import { ThemeConsumer } from '../context/ThemeContext';
import DynamicTVS from '../components/DynamicTVS';
import DynamicTVSDark from '../components/DynamicTVSDark';
export default function Home() {
  return (
    <Layout>
      <div className="container-fluid mtb15 no-fluid">
        <div className="row sm-gutters">
          <div className="col-sm-12 col-md-3">
            <MarketPairs />
          </div>
          <div className="col-sm-12 col-md-6">
            <ThemeConsumer>
              {({ data }) => {
                return data.theme === 'light' ? (
                  <DynamicTVS />
                ) : (
                  <DynamicTVSDark />
                );
              }}
            </ThemeConsumer>
            <MarketTrade />
          </div>
          <div className="col-md-3">
            <OrderBook />
            <MarketHistory />
          </div>
          <div className="col-md-3">
            <MarketNews />
          </div>
          <div className="col-md-9">
            <HistoryOrder />
          </div>
        </div>
      </div>
    </Layout>
  );
}
