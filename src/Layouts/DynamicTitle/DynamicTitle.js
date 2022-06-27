import React from "react";
// Import Css File
import "./DynamicTitle.css";

const DynamicTitle = ({ titleData }) => {
  return (
    <div className="dynamic-title py-5">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div>
          <h1>{titleData.pageTitle}</h1>
        </div>

        <div>
          <span className="fs-num ms-4">{titleData.firstNum}</span>
          <span className="sec-num ms-4">{titleData.secondNum}</span>
          <span className="ms-4">
            <i className="bi bi-caret-up-fill"></i>
          </span>
          <span className="third-num ms-4">{titleData.thirdNum}</span>
        </div>
      </div>
    </div>
  );
};

export default DynamicTitle;
