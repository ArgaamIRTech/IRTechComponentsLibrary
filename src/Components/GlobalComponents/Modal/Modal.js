import React from "react";
// Import Css File
import "./Modal.css";

const Modal = ({ modalData }) => {
  return (
    <div
      className="modal fade"
      id="calenderModal"
      tabIndex="-1"
      aria-labelledby="calenderModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="calenderModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {modalData.map((item) => {
              return (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
