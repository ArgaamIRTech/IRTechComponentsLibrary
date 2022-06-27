import React from "react";
// Import Route Links
import { Route, Routes } from "react-router-dom";
// Import Layouts Components
import Header from "./Layouts/Header/Header";
// Import Pages
import Analyst from "./Pages/Analyst/Analyst";
import Business from "./Pages/Business/Business";
import Chart from "./Pages/Chart/Chart";
import Corporate from "./Pages/Corporate/Corporate";
import Investors from "./Pages/Investors/Investors";
import Mergers from "./Pages/Mergers/Mergers";
import Overview from "./Pages/Overview/Overview";
import Profile from "./Pages/Profile/Profile";
import Ratios from "./Pages/Ratios/Ratios";
import Statements from "./Pages/Statements/Statements";
import Subscriptions from "./Pages/Subscriptions/Subscriptions";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/business" element={<Business />} />
        <Route path="/analyst" element={<Analyst />} />
        <Route path="/mergers" element={<Mergers />} />
        <Route path="/statements" element={<Statements />} />
        <Route path="/ratios" element={<Ratios />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
      </Routes>
    </>
  );
};

export default App;
