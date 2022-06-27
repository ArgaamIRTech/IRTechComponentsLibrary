import React from "react";
// Import Css File
import "./FinancialRatios.css";
// Import Data Json
import jsonData from "../../../Data/Data.json";

const FinancialRatios = () => {
  return (
    <div className="financial-ratios">
      <div className="main-title">
        <h2>Financial Ratios</h2>
      </div>

      {jsonData.financialRatios.map((item) => {
        return (
          <div
            key={item.id}
            className="financial-info d-flex justify-content-between align-items-center"
          >
            <div className="ratios-text">
              <p className="text-muted lead">{item.title}</p>
            </div>

            <div className="ratios-title">
              <h5 className="fw-bold">{item.current}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FinancialRatios;
