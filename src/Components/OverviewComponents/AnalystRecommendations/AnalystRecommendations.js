import React from "react";
// Import Css File
import "./AnalystRecommendations.css";

const AnalystRecommendations = () => {
  return (
    <div className="analyst-recommendations">
      <div className="main-title">
        <h2>Analyst Recommendations</h2>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Rating</th>
              <th scope="col">Research Firm</th>
              <th scope="col">Target</th>
            </tr>
          </thead>
          <tbody className="text-muted">
            <tr>
              <td>Hold</td>
              <td>Arqaam Capital</td>
              <td>42.40</td>
            </tr>
            <tr>
              <td>Hold</td>
              <td>HSBC</td>
              <td>32.00</td>
            </tr>
            <tr>
              <td>Underweight</td>
              <td>Alpha Mena</td>
              <td>36.50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalystRecommendations;
