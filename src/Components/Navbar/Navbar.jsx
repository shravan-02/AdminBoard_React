import React from "react";
// import "../Navbar/Navbar.css"
import "../../../src/AllStyles.css";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav>
          <div className="search-box">
            {/* <i className='bx bx-search'></i> */}
            <BiSearch className="bx bx-search" />

            <input type="text" placeholder="Search..." />
          </div>
          <div className="profile-details">
            {/* <i className='bx bxs-bell-ring' style='color:#ffffff;'  ></i> */}
            <img className="people-dp" src="./assets/images/001.jpg"></img>

            <span className="admin_name">Hi, Shravan Suresh</span>
          </div>
          <p className="nav-btn">
            <button>Add</button>
            <button>Upload</button>
            <button>Share</button>
          </p>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
