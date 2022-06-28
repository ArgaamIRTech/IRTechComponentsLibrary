import React, { useState } from "react";
// Import Css File
import "./MarketValue.css";
// Import Data Json
import jsonData from "../../../Data/Data.json";

const MarketValue = () => {
  const [marketValue] = useState(jsonData.marketValue);

  return (
    <div className="market-value">
      <div className="d-flex justify-content-between align-items-center">
        <h2>MarketValue</h2>
        <div className="total-num">2,950.00</div>
      </div>
      <hr />
      {/* Table */}
      <div className="table-responsive-md">
        {marketValue.map((item) => {
          return (
            <table className="table table-sm" key={item.id}>
              <tbody>
                <tr>
                  <td className="t-title">Volume</td>
                  <td className="t-num">{item.volume}</td>
                  <td colSpan="2" className="t-title">
                    Average Volume (3M)
                  </td>
                  <td className="t-num">{item.averageVolume}</td>
                </tr>

                <tr>
                  <td className="t-title">Turnover</td>
                  <td className="t-num">{item.turnover}</td>
                  <td colSpan="2" className="t-title">
                    Average Turnover (3M)
                  </td>
                  <td className="t-num">{item.averageTurnover}</td>
                </tr>

                <tr>
                  <td className="t-title">Transactions</td>
                  <td className="t-num">{item.transactions}</td>
                  <td colSpan="2" className="t-title">
                    Average Transactions (3M)
                  </td>
                  <td className="t-num">{item.averageTransactions}</td>
                </tr>

                <tr>
                  <td className="t-title">Open</td>
                  <td className="t-num">{item.open}</td>
                  <td colSpan="2" className="t-title">
                    Last Trade
                  </td>
                  <td className="t-num">{item.lastTrade}</td>
                </tr>

                <tr>
                  <td className="t-title">Low</td>
                  <td className="t-num">{item.low}</td>
                  <td colSpan="2" className="t-title">
                    Prev Close
                  </td>
                  <td className="t-num">{item.prevClose}</td>
                </tr>

                <tr>
                  <td className="t-title">High</td>
                  <td className="t-num">{item.high}</td>
                  <td colSpan="2"></td>
                  <td className="t-num">{item.emptyRow}</td>
                </tr>

                <tr>
                  <td className="t-title change">Change</td>
                  <td>
                    <div>3 Monthes</div>
                    <span className="t-num">{item.month3}</span>
                  </td>
                  <td>
                    <div>6 Monthes</div>
                    <span className="t-num">{item.month6}</span>
                  </td>
                  <td>
                    <div>12 Monthes</div>
                    <span className="t-num">{item.month12}</span>
                  </td>
                  <td>
                    <div>Year To Data</div>
                    <span className="t-num">{item.year}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    </div>
  );
};

export default MarketValue;
