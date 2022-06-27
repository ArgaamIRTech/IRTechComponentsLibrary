import React from "react";
// Import Css File
import "./CorporateActions.css";

const CorporateActions = () => {
  return (
    <div className="corporate-actions">
      <div className="main-title">
        <h2>Corporate Actions</h2>
      </div>

      {/* Start Tabs BTN */}
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="ch-tab"
            data-bs-toggle="tab"
            data-bs-target="#changes-tab"
            type="button"
            role="tab"
            aria-controls="changes-tab"
            aria-selected="true"
          >
            Recent Changes
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="di-tab"
            data-bs-toggle="tab"
            data-bs-target="#divideds-tab"
            type="button"
            role="tab"
            aria-controls="divideds-tab"
            aria-selected="false"
          >
            Recent Dividends
          </button>
        </li>
      </ul>
      {/* Start Tabs Body */}
      <div className="tab-content py-3" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="changes-tab"
          role="tabpanel"
          aria-labelledby="ch-tab"
          tabIndex="0"
        >
          {/* Start Changes Data */}
          <table className="table">
            <tbody>
              <tr>
                <td>Previous Capital</td>
                <td>500.00 Million Ryals</td>
              </tr>

              <tr>
                <td>Previous No Of Shares (M)</td>
                <td>50.00</td>
              </tr>

              <tr>
                <td>Capital Change</td>
                <td>20.00 %</td>
              </tr>
            </tbody>
          </table>
          {/* End Changes Data */}
        </div>
        <div
          className="tab-pane fade"
          id="divideds-tab"
          role="tabpanel"
          aria-labelledby="di-tab"
          tabIndex="0"
        >
          {/* Start Divideds Data */}
          <table className="table">
            <tbody>
              <tr>
                <td>Current Capital (M SAR )</td>
                <td>Approved</td>
              </tr>

              <tr>
                <td>Type</td>
                <td>50.00</td>
              </tr>

              <tr>
                <td>Announcement</td>
                <td>08/03/2020</td>
              </tr>
            </tbody>
          </table>
          {/* End Changes Data */}
        </div>
      </div>
    </div>
  );
};

export default CorporateActions;
