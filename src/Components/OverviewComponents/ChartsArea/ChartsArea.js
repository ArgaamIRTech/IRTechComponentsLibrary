import React from "react";
// Import Css File
import "./ChartsArea.css";
// Import Charts Image
import chartImg from "../../../Assets/chart.png";

const ChartsArea = () => {
  return (
    <div className="charts-area mb-4">
      <img src={chartImg} alt="Chart_Img" className="img-fluid" />
    </div>
  );
};

export default ChartsArea;
