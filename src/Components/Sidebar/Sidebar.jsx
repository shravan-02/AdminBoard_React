import React from "react";
import "../Sidebar/Sidebar.css";
import "../../../src/AllStyles.css";
const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="sidebar">
        <div className="logo-details">
          {/* <i className="bx bxs-grid-alt"></i> */}
          <span class="material-symbols-outlined bx bxs-grid-alt" style={{color: "#fff"}}>dashboard</span>
          <span className="logo_name">Dashboard</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#" className="active">
              {/* <i className="bx bxs-home"></i> */}
              <span className="links_name">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              {/* <i className="bx bx-id-card"></i> */}
              <span className="links_name">Profile</span>
            </a>
          </li>
          <li>
            <a href="#">
              {/* <i className="bx bxs-message"></i> */}
              <span className="links_name">Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              {/* <i className="bx bxs-time"></i> */}
              <span className="links_name">History</span>
            </a>
          </li>
          <li>
            <a href="#">
              {/* <i className="bx bxs-file-blank"></i> */}
              <span className="links_name">Tasks</span>
            </a>
          </li>
          <li>
            <a href="#">
              {/* <i className="bx bxs-group"></i> */}
              <span className="links_name">Communities</span>
            </a>
          </li>
          <li>
            <a href="#">
              {/* <i className="bx bx-cog"></i> */}
              <span className="links_name">Setting</span>
            </a>
          </li>
          <li>
            <a href="#">
              {/* <i className="bx bx-question-mark"></i> */}
              <span className="links_name">Support</span>
            </a>
          </li>
          <li>
            <a href="#">
              {/* <i className="bx bxs-lock-alt"></i> */}
              <span className="links_name">Privacy</span>
            </a>
          </li>

          <li className="log_out">
            <a href="#">
              {/* <i className="bx bx-log-out"></i> */}
              <span className="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
