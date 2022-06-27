import React, { useState } from "react";
// Import Css File
import "./Calender.css";
// Import Data Json
import jsonData from "../../../Data/Data.json";
// Import Modal Component
import Modal from "../../GlobalComponents/Modal/Modal";

const Calender = () => {
  // Add Calender Data To State
  const [calenderData, setCalenderData] = useState(jsonData.calender);
  const [detailsModal] = useState(calenderData);
  // Get Details Calender Data
  const changeContent = (elm) => {
    setCalenderData([elm]);
  };

  return (
    <div className="calender px-3">
      <div className="main-title">
        <h2>Calender</h2>
      </div>

      {/* Start Loop For Data */}
      {detailsModal.map((elm) => {
        return (
          <div className="calender-container d-flex mb-3" key={elm.id}>
            <div className="year-info">
              <h6>{elm.day}</h6>
              <h6>{elm.month}</h6>
              <h6>{elm.year}</h6>
            </div>

            <div className="calender-body">
              <h5>{elm.title}</h5>
              <p>{elm.desc}</p>

              <div className="last-info d-flex align-items-baseline justify-content-between">
                <p>
                  <small className="text-muted">
                    Venum . Company Khamred HQ
                  </small>
                </p>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#calenderModal"
                  onClick={() => changeContent(elm)}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {/* End Loop For Data */}
      {/* Start Modal */}
      <Modal modalData={calenderData} />
      {/* End Modal */}
    </div>
  );
};

export default Calender;
