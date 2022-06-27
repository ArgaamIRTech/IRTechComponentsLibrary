import React from "react";
// Import Css File
import "./MarketValue.css";

const MarketValue = () => {
  return (
    <div className="market-value">
      <div className="d-flex justify-content-between align-items-center">
        <h2>MarketValue</h2>
        <div className="total-num">2,950.00</div>
      </div>
      <hr />
      {/* Table */}
      <div className="table-responsive-md">
        <table className="table table-sm">
          <tbody>
            <tr>
              <td className="t-title">Volume</td>
              <td className="t-num">11.264</td>
              <td colSpan="2" className="t-title">
                Average Volume (3M)
              </td>
              <td className="t-num">22658.14</td>
            </tr>

            <tr>
              <td className="t-title">Turnover</td>
              <td className="t-num">11015</td>
              <td colSpan="2" className="t-title">
                Average Turnover (3M)
              </td>
              <td className="t-num">335.214</td>
            </tr>

            <tr>
              <td className="t-title">Transactions</td>
              <td className="t-num">215.667</td>
              <td colSpan="2" className="t-title">
                Average Transactions (3M)
              </td>
              <td className="t-num">1024.3568</td>
            </tr>

            <tr>
              <td className="t-title">Open</td>
              <td className="t-num">210.5</td>
              <td colSpan="2" className="t-title">
                Last Trade
              </td>
              <td className="t-num">114768.22</td>
            </tr>

            <tr>
              <td className="t-title">Low</td>
              <td className="t-num">662589</td>
              <td colSpan="2" className="t-title">
                Prev Close
              </td>
              <td className="t-num">1069.25</td>
            </tr>

            <tr>
              <td className="t-title">High</td>
              <td className="t-num">1015.99</td>
              <td colSpan="2"></td>
              <td className="t-num">6698.225</td>
            </tr>

            <tr className="">
              <td className="t-title change">Change</td>
              <td>
                <div>3 Monthes</div>
                <span className="t-num">15.66%</span>
              </td>
              <td>
                <div>6 Monthes</div>
                <span className="t-num">N/A</span>
              </td>
              <td>
                <div>12 Monthes</div>
                <span className="t-num">N/A</span>
              </td>
              <td>
                <div>Year To Data</div>
                <span className="t-num">N/A</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketValue;
