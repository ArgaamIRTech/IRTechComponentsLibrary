import React from "react";
//Import Overview Components
import DynamicTitle from "../../Layouts/DynamicTitle/DynamicTitle";
import ChartsArea from "../../Components/OverviewComponents/ChartsArea/ChartsArea";
import MarketValue from "../../Components/OverviewComponents/MarketValue/MarketValue";
import Calender from "../../Components/OverviewComponents/Calender/Calender";
import AnnualReports from "../../Components/OverviewComponents/AnnualReports/AnnualReports";
import AnalystRecommendations from "../../Components/OverviewComponents/AnalystRecommendations/AnalystRecommendations";
import FinancialRatios from "../../Components/OverviewComponents/FinancialRatios/FinancialRatios";
import CorporateActions from "../../Components/OverviewComponents/CorporateActions/CorporateActions";
import LatestNews from "../../Components/OverviewComponents/LatestNews/LatestNews";
import Contact from "../../Components/OverviewComponents/Contact/Contact";

const Overview = () => {
  // Page Header Title & Info
  const titleData = {
    pageTitle: "Overview",
    firstNum: "118.00",
    secondNum: "0.20",
    thirdNum: "0.17%",
  };

  return (
    <div className="overview">
      <div className="container-fluid">
        <DynamicTitle titleData={titleData} />

        {/* Start section-1 */}
        <div className="bg-sections py-4">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <ChartsArea />
            </div>
            <div className="col-lg-8 col-md-12">
              <MarketValue />
            </div>
          </div>
        </div>
        {/* End section-1 */}

        {/* Start section-2 */}
        <div className="py-4">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <Calender />
            </div>
            <div className="col-lg-3 col-md-6 bg-sections">
              <AnnualReports />
            </div>
            <div className="col-lg-4 col-md-12">
              <AnalystRecommendations />
            </div>
          </div>
        </div>
        {/* End section-2 */}

        {/* Start section-3 */}
        <div className="py-4">
          <div className="row">
            <div className="col-lg-7 col-md-6 bg-sections">
              <FinancialRatios />
            </div>
            <div className="col-lg-5 col-md-6 bg-sections">
              <CorporateActions />
            </div>
          </div>
        </div>
        {/* End section-3 */}

        {/* Start Section 4 */}
        <div className="py-4">
          <div className="row gap-lg-2">
            <div className="col-md-4 bg-sections">
              <LatestNews sectionTitle="Latest News" />
            </div>
            <div className="col-md-4 bg-sections">
              <LatestNews sectionTitle="Analyst Estimates" />
            </div>
            <div className="col-md-3 text-center">
              <Contact />
            </div>
          </div>
        </div>
        {/* End Section 4 */}
      </div>
    </div>
  );
};

export default Overview;
