import React from "react";
// import "../HomeSection/HomeSection.css";
import Navbar from "../Navbar/Navbar";
import OverviewBoxes from "../OverviewBoxes/OverviewBoxes";
import "../../../src/AllStyles.css";
import AnnouncementsBar from "../AnnouncementsBar/AnnouncementsBar";

const HomeSection = () => {
  return (
    <React.Fragment>
      <div className="home-section">
        <Navbar />
        <OverviewBoxes />
        {/* <AnnouncementsBar /> */}
      </div>
    </React.Fragment>
  );
};

export default HomeSection;
