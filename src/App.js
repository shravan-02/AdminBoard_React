import React from "react"
import './App.css';
import "./AllStyles.css"
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeSection from "./Components/HomeSection/HomeSection";
import OverviewBoxes from "./Components/OverviewBoxes/OverviewBoxes";

function App() {
  return (
    <React.Fragment>
      <Sidebar />
      <HomeSection />
    </React.Fragment>
  );
}

export default App;
