import React, { useState } from "react";
// Import Css File
import "./LatestNews.css";
// Import Data Json
import jsonData from "../../../Data/Data.json";

const LatestNews = () => {
  const [latestNews] = useState(jsonData.latestNews);

  return (
    <div className="latest-news">
      <div className="main-title">
        <h2>Latest News</h2>
      </div>

      {latestNews.map((item) => {
        return (
          <div className="latest-info" key={item.id}>
            <p className="text-muted">{item.info}</p>
            <div className="d-flex justify-content-between align-items-baseline">
              <small className="text-success fw-bold">{item.smallTitle}</small>
              <button>Read</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LatestNews;
