import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

export default function MarketsList() {
  return (
    <div className="markets pb70">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="markets-pair-list">
              <Tabs defaultActiveKey="btc">
                <Tab eventKey="favorites" title="★ Favorites">
                  <div className="table-responsive">
                    <table className="table star-active">
                      <thead>
                        <tr>
                          <th>Pairs</th>
                          <th>Coin</th>
                          <th>Last Price</th>
                          <th>Change (24H)</th>
                          <th>High (24H)</th>
                          <th>Low (24h)</th>
                          <th>Volume (24h)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ETH/BTC
                          </td>
                          <td>
                            <img src={'img/icon/1.png'} alt="eth" /> ETH
                          </td>
                          <td>0.072377</td>
                          <td className="green">+0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> EOS/BTC
                          </td>
                          <td>
                            <img src={'img/icon/2.png'} alt="vid" /> EOS
                          </td>
                          <td>6984.06</td>
                          <td className="red">-1.65%</td>
                          <td>6554.91</td>
                          <td>6548.06</td>
                          <td>431,684,298.45</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> LTC/BTC
                          </td>
                          <td>
                            <img src={'img/icon/3.png'} alt="bitcoin" /> LTC
                          </td>
                          <td>4582.06</td>
                          <td className="green">+2.62%</td>
                          <td>7444.91</td>
                          <td>4646.06</td>
                          <td>431,687,258.23</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> LWC/BTC
                          </td>
                          <td>
                            <img src={'img/icon/4.png'} alt="bitcoin" /> LWC
                          </td>
                          <td>0.061165</td>
                          <td className="red">-0.94%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.33</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> COTI/BTC
                          </td>
                          <td>
                            <img src={'img/icon/5.png'} alt="bitcoin" /> COTI
                          </td>
                          <td>0.000765</td>
                          <td className="green">+0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.53</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> TRX/BTC
                          </td>
                          <td>
                            <img src={'img/icon/6.png'} alt="bitcoin" /> TRX
                          </td>
                          <td>0.000065</td>
                          <td className="green">+0.71%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.53</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> XMR/BTC
                          </td>
                          <td>
                            <img src={'img/icon/7.png'} alt="bitcoin" /> XMR
                          </td>
                          <td>0.008763</td>
                          <td className="red">-0.73%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ADA/BTC
                          </td>
                          <td>
                            <img src={'img/icon/8.png'} alt="bitcoin" /> ADA
                          </td>
                          <td>0.000067</td>
                          <td className="red">-1.20%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.35</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> BNB/BTC
                          </td>
                          <td>
                            <img src={'img/icon/9.png'} alt="bitcoin" /> BNB
                          </td>
                          <td>0.081187</td>
                          <td className="green">+0.74%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.23</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> NEO/BTC
                          </td>
                          <td>
                            <img src={'img/icon/10.png'} alt="bitcoin" /> NEO
                          </td>
                          <td>0.000511</td>
                          <td className="red">-0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="btc" title="BTC">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Pairs</th>
                          <th>Coin</th>
                          <th>Last Price</th>
                          <th>Change (24H)</th>
                          <th>High (24H)</th>
                          <th>Low (24h)</th>
                          <th>Volume (24h)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ETH/BTC
                          </td>
                          <td>
                            <img src={'img/icon/1.png'} alt="eth" /> ETH
                          </td>
                          <td>0.062090</td>
                          <td className="green">+0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> EOS/BTC
                          </td>
                          <td>
                            <img src={'img/icon/2.png'} alt="vid" /> EOS
                          </td>
                          <td>0.000061</td>
                          <td className="red">-1.65%</td>
                          <td>6554.91</td>
                          <td>6548.06</td>
                          <td>689,699,954.45</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> LTC/BTC
                          </td>
                          <td>
                            <img src={'img/icon/3.png'} alt="bitcoin" /> LTC
                          </td>
                          <td>0.003166</td>
                          <td className="green">+2.62%</td>
                          <td>7444.91</td>
                          <td>4646.06</td>
                          <td>1,703,258.23</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> LWC/BTC
                          </td>
                          <td>
                            <img src={'img/icon/4.png'} alt="bitcoin" /> LWC
                          </td>
                          <td>0.006533</td>
                          <td className="red">-0.94%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>24,234,112.18</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> COTI/BTC
                          </td>
                          <td>
                            <img src={'img/icon/5.png'} alt="bitcoin" /> COTI
                          </td>
                          <td>0.000006</td>
                          <td className="green">+0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>325,008,001.53</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> TRX/BTC
                          </td>
                          <td>
                            <img src={'img/icon/6.png'} alt="bitcoin" /> TRX
                          </td>
                          <td>0.000001</td>
                          <td className="green">+0.71%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>2,050,326,481</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> XMR/BTC
                          </td>
                          <td>
                            <img src={'img/icon/7.png'} alt="bitcoin" /> XMR
                          </td>
                          <td>0.035166</td>
                          <td className="red">-0.73%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>145,679,228.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ADA/BTC
                          </td>
                          <td>
                            <img src={'img/icon/8.png'} alt="bitcoin" /> ADA
                          </td>
                          <td>0.000026</td>
                          <td className="red">-1.20%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>1,315,013,935</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> BNB/BTC
                          </td>
                          <td>
                            <img src={'img/icon/9.png'} alt="bitcoin" /> BNB
                          </td>
                          <td>0.008409</td>
                          <td className="green">+0.74%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>1,956,048,323</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> NEO/BTC
                          </td>
                          <td>
                            <img src={'img/icon/10.png'} alt="bitcoin" /> NEO
                          </td>
                          <td>0.000699</td>
                          <td className="red">-0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>199,281,548.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> TOMO/BTC
                          </td>
                          <td>
                            <img src={'img/icon/11.png'} alt="bitcoin" /> TOMO
                          </td>
                          <td>0.000059</td>
                          <td className="red">-4.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>25,736,354</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> MKR/BTC
                          </td>
                          <td>
                            <img src={'img/icon/12.png'} alt="bitcoin" /> MKR
                          </td>
                          <td>0.042783</td>
                          <td className="green">+0.32%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>109,624,244.14</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ZEC/BTC
                          </td>
                          <td>
                            <img src={'img/icon/13.png'} alt="bitcoin" /> ZEC
                          </td>
                          <td>0.003059</td>
                          <td className="green">+5.53%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>1,413,994</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> VSYS/BTC
                          </td>
                          <td>
                            <img src={'img/icon/14.png'} alt="bitcoin" /> VSYS
                          </td>
                          <td>0.000001</td>
                          <td className="red">-3.52%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>1,605,258</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ATOM/BTC
                          </td>
                          <td>
                            <img src={'img/icon/15.png'} alt="bitcoin" /> ATOM
                          </td>
                          <td>0.000459</td>
                          <td className="red">-2.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>541,390,258</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> MTV/BTC
                          </td>
                          <td>
                            <img src={'img/icon/16.png'} alt="bitcoin" /> MTV
                          </td>
                          <td>0.000001</td>
                          <td className="green">+1.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>8,297,894.32</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> XTZ/BTC
                          </td>
                          <td>
                            <img src={'img/icon/17.png'} alt="bitcoin" /> XTZ
                          </td>
                          <td>0.003059</td>
                          <td className="red">-3.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>162,687,685.25</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="LWC" title="LWC">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Pairs</th>
                          <th>Coin</th>
                          <th>Last Price</th>
                          <th>Change (24H)</th>
                          <th>High (24H)</th>
                          <th>Low (24h)</th>
                          <th>Volume (24h)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ETH/LWC
                          </td>
                          <td>
                            <img src={'img/icon/1.png'} alt="eth" /> ETH
                          </td>
                          <td>0,09.00</td>
                          <td className="green">+17.47%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>14,552,935,078.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> EOS/LWC
                          </td>
                          <td>
                            <img src={'img/icon/2.png'} alt="vid" /> EOS
                          </td>
                          <td>0.009438</td>
                          <td className="red">-1.65%</td>
                          <td>6554.91</td>
                          <td>6548.06</td>
                          <td>431,684,298.45</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> LTC/LWC
                          </td>
                          <td>
                            <img src={'img/icon/3.png'} alt="bitcoin" /> LTC
                          </td>
                          <td>0.484693</td>
                          <td className="green">+2.62%</td>
                          <td>7444.91</td>
                          <td>4646.06</td>
                          <td>431,687,258.23</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> COTI/LWC
                          </td>
                          <td>
                            <img src={'img/icon/5.png'} alt="bitcoin" /> COTI
                          </td>
                          <td>0.000961</td>
                          <td className="green">+0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.53</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> TRX/LWC
                          </td>
                          <td>
                            <img src={'img/icon/6.png'} alt="bitcoin" /> TRX
                          </td>
                          <td>0.000229</td>
                          <td className="green">+0.71%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.53</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> XMR/LWC
                          </td>
                          <td>
                            <img src={'img/icon/7.png'} alt="bitcoin" /> XMR
                          </td>
                          <td>0.538265</td>
                          <td className="red">-0.73%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ADA/LWC
                          </td>
                          <td>
                            <img src={'img/icon/8.png'} alt="bitcoin" /> ADA
                          </td>
                          <td>0.004081</td>
                          <td className="red">-1.20%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.35</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> BNB/LWC
                          </td>
                          <td>
                            <img src={'img/icon/9.png'} alt="bitcoin" /> BNB
                          </td>
                          <td>1.285714</td>
                          <td className="green">+0.74%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.23</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> NEO/LWC
                          </td>
                          <td>
                            <img src={'img/icon/10.png'} alt="bitcoin" /> NEO
                          </td>
                          <td>0.091836</td>
                          <td className="red">-0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> TOMO/LWC
                          </td>
                          <td>
                            <img src={'img/icon/11.png'} alt="bitcoin" /> TOMO
                          </td>
                          <td>0.007040</td>
                          <td className="red">-4.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.33</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> MKR/LWC
                          </td>
                          <td>
                            <img src={'img/icon/12.png'} alt="bitcoin" /> MKR
                          </td>
                          <td>6.571428</td>
                          <td className="green">+0.32%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.14</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ZEC/LWC
                          </td>
                          <td>
                            <img src={'img/icon/13.png'} alt="bitcoin" /> ZEC
                          </td>
                          <td>0.466836</td>
                          <td className="green">+5.53%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.22</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> VSYS/LWC
                          </td>
                          <td>
                            <img src={'img/icon/14.png'} alt="bitcoin" /> VSYS
                          </td>
                          <td>0.000025</td>
                          <td className="red">-3.52%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.35</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ATOM/LWC
                          </td>
                          <td>
                            <img src={'img/icon/15.png'} alt="bitcoin" /> ATOM
                          </td>
                          <td>0.066326</td>
                          <td className="red">-2.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.21</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> MTV/LWC
                          </td>
                          <td>
                            <img src={'img/icon/16.png'} alt="bitcoin" /> MTV
                          </td>
                          <td>0.000043</td>
                          <td className="green">+1.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.32</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> XTZ/LWC
                          </td>
                          <td>
                            <img src={'img/icon/17.png'} alt="bitcoin" /> XTZ
                          </td>
                          <td>0.001275</td>
                          <td className="red">-3.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.25</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="usdt" title="USDT">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Pairs</th>
                          <th>Coin</th>
                          <th>Last Price</th>
                          <th>Change (24H)</th>
                          <th>High (24H)</th>
                          <th>Low (24h)</th>
                          <th>Volume (24h)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ETH/USDT
                          </td>
                          <td>
                            <img src={'img/icon/1.png'} alt="eth" /> ETH
                          </td>
                          <td>3744.145443</td>
                          <td className="green">+0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> EOS/USDT
                          </td>
                          <td>
                            <img src={'img/icon/2.png'} alt="vid" /> EOS
                          </td>
                          <td>3.765887</td>
                          <td className="red">-1.65%</td>
                          <td>6554.91</td>
                          <td>6548.06</td>
                          <td>431,684,298.45</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> LTC/USDT
                          </td>
                          <td>
                            <img src={'img/icon/3.png'} alt="bitcoin" /> LTC
                          </td>
                          <td>190.856544</td>
                          <td className="green">+2.62%</td>
                          <td>7444.91</td>
                          <td>4646.06</td>
                          <td>431,687,258.23</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> LWC/USDT
                          </td>
                          <td>
                            <img src={'img/icon/4.png'} alt="bitcoin" /> LWC
                          </td>
                          <td>392.115435</td>
                          <td className="red">-0.94%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.33</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> COTI/USDT
                          </td>
                          <td>
                            <img src={'img/icon/5.png'} alt="bitcoin" /> COTI
                          </td>
                          <td>0.375233</td>
                          <td className="green">+0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.53</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> TRX/USDT
                          </td>
                          <td>
                            <img src={'img/icon/6.png'} alt="bitcoin" /> TRX
                          </td>
                          <td>0.096555</td>
                          <td className="green">+0.71%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.53</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> XMR/USDT
                          </td>
                          <td>
                            <img src={'img/icon/7.png'} alt="bitcoin" /> XMR
                          </td>
                          <td>211.067666</td>
                          <td className="red">-0.73%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ADA/USDT
                          </td>
                          <td>
                            <img src={'img/icon/8.png'} alt="bitcoin" /> ADA
                          </td>
                          <td>1.601143</td>
                          <td className="red">-1.20%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.35</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> BNB/USDT
                          </td>
                          <td>
                            <img src={'img/icon/9.png'} alt="bitcoin" /> BNB
                          </td>
                          <td>504.114498</td>
                          <td className="green">+0.74%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.23</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> NEO/USDT
                          </td>
                          <td>
                            <img src={'img/icon/10.png'} alt="bitcoin" /> NEO
                          </td>
                          <td>36.110344</td>
                          <td className="red">-0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> TOMO/USDT
                          </td>
                          <td>
                            <img src={'img/icon/11.png'} alt="bitcoin" /> TOMO
                          </td>
                          <td>2.764988</td>
                          <td className="red">-4.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.33</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> MKR/USDT
                          </td>
                          <td>
                            <img src={'img/icon/12.png'} alt="bitcoin" /> MKR
                          </td>
                          <td>2576.072565</td>
                          <td className="green">+0.32%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.14</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ZEC/USDT
                          </td>
                          <td>
                            <img src={'img/icon/13.png'} alt="bitcoin" /> ZEC
                          </td>
                          <td>183.827556</td>
                          <td className="green">+5.53%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.22</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> VSYS/USDT
                          </td>
                          <td>
                            <img src={'img/icon/14.png'} alt="bitcoin" /> VSYS
                          </td>
                          <td>0.011865</td>
                          <td className="red">-3.52%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.35</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ATOM/USDT
                          </td>
                          <td>
                            <img src={'img/icon/15.png'} alt="bitcoin" /> ATOM
                          </td>
                          <td>26.207809</td>
                          <td className="red">-2.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.21</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> MTV/USDT
                          </td>
                          <td>
                            <img src={'img/icon/16.png'} alt="bitcoin" /> MTV
                          </td>
                          <td>0.0174476</td>
                          <td className="green">+1.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.32</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> XTZ/USDT
                          </td>
                          <td>
                            <img src={'img/icon/17.png'} alt="bitcoin" /> XTZ
                          </td>
                          <td>4.487633</td>
                          <td className="red">-3.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.25</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="alts" title="ALTS">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Pairs</th>
                          <th>Coin</th>
                          <th>Last Price</th>
                          <th>Change (24H)</th>
                          <th>High (24H)</th>
                          <th>Low (24h)</th>
                          <th>Volume (24h)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ETH/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/1.png'} alt="eth" /> ETH
                          </td>
                          <td>3765.117654</td>
                          <td className="green">+0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> EOS/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/2.png'} alt="vid" /> EOS
                          </td>
                          <td>6984.060087</td>
                          <td className="red">-1.65%</td>
                          <td>6554.91</td>
                          <td>6548.06</td>
                          <td>431,684,298.45</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> LTC/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/3.png'} alt="bitcoin" /> LTC
                          </td>
                          <td>4582.873542</td>
                          <td className="green">+2.62%</td>
                          <td>7444.91</td>
                          <td>4646.06</td>
                          <td>431,687,258.23</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> LWC/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/4.png'} alt="bitcoin" /> LWC
                          </td>
                          <td>392.116532</td>
                          <td className="red">-0.94%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.33</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> COTI/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/5.png'} alt="bitcoin" /> COTI
                          </td>
                          <td>15.126909</td>
                          <td className="green">+0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.53</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> TRX/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/6.png'} alt="bitcoin" /> TRX
                          </td>
                          <td>0.074113</td>
                          <td className="green">+0.71%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.53</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> XMR/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/7.png'} alt="bitcoin" /> XMR
                          </td>
                          <td>345.337123</td>
                          <td className="red">-0.73%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ADA/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/8.png'} alt="bitcoin" /> ADA
                          </td>
                          <td>1.600008</td>
                          <td className="red">-1.20%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.35</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> BNB/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/9.png'} alt="bitcoin" /> BNB
                          </td>
                          <td>567.340065</td>
                          <td className="green">+0.74%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.23</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> NEO/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/10.png'} alt="bitcoin" /> NEO
                          </td>
                          <td>392.114329</td>
                          <td className="red">-0.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.77</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> TOMO/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/11.png'} alt="bitcoin" /> TOMO
                          </td>
                          <td>36.080653</td>
                          <td className="red">-4.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.33</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> MKR/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/12.png'} alt="bitcoin" /> MKR
                          </td>
                          <td>2576.107437</td>
                          <td className="green">+0.32%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.14</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ZEC/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/13.png'} alt="bitcoin" /> ZEC
                          </td>
                          <td>183.668544</td>
                          <td className="green">+5.53%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.22</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> VSYS/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/14.png'} alt="bitcoin" /> VSYS
                          </td>
                          <td>0.018110</td>
                          <td className="red">-3.52%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.35</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> ATOM/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/15.png'} alt="bitcoin" /> ATOM
                          </td>
                          <td>26.398545</td>
                          <td className="red">-2.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.21</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> MTV/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/16.png'} alt="bitcoin" /> MTV
                          </td>
                          <td>0.017487</td>
                          <td className="green">+1.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.32</td>
                        </tr>
                        <tr data-href="exchange-light.html">
                          <td>
                            <i className="icon ion-md-star"></i> XTZ/ALTS
                          </td>
                          <td>
                            <img src={'img/icon/17.png'} alt="bitcoin" /> XTZ
                          </td>
                          <td>4.518445</td>
                          <td className="red">-3.78%</td>
                          <td>7444.91</td>
                          <td>7267.06</td>
                          <td>431,687,258.25</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
              </Tabs>
              <div className="text-center">
                <a href="#!" className="load-more btn">
                  Load More <i className="icon ion-md-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
