import React from "react";
// Import Link
import { Link } from "react-router-dom";
// Import PDF Files
import arPDF from "../../../Assets/PDF/ar.pdf";
import enPDF from "../../../Assets/PDF/en.pdf";
// Import Css File
import "./AnnualReports.css";

const AnnualReports = () => {
  return (
    <div className="annual-reports">
      <div className="main-title">
        <h2>Annual Reports</h2>
        <p className="text-muted">2022 ANNUAL REPORT</p>
      </div>

      <div className="pdf-section d-flex justify-content-between align-items-baseline py-5">
        <div>
          <p>
            <i className="bi bi-file-earmark-pdf-fill me-3"></i> Arabic
          </p>
          <p>
            <i className="bi bi-file-earmark-pdf-fill me-3"></i> English
          </p>
        </div>

        <div className="dw-icon">
          <div>
            <Link to={arPDF} target="_blank" download>
              <i className="bi bi-cloud-download-fill"></i>
            </Link>
          </div>
          <div className="mt-3">
            <Link to={enPDF} target="_blank" download>
              <i className="bi bi-cloud-download-fill"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualReports;
