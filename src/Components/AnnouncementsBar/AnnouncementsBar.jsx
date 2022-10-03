import React from 'react'
import "../../../src/AllStyles.css"


const AnnouncementsBar = () => {
  return (
    <React.Fragment>
        <div className="announcement-boxes">
        <div className="top-announcement box">
            <div className="title">Announcements</div>
            <ul className="top-announcement-details">
              <p>
                <a href="#">
                  <span className="product">Site Maintenance</span>
                </a>
                <p className="sub-text">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</p>
              </p>
              <hr className="announcement-solid-line"></hr>
            </ul>
            <ul className="top-announcement-details">
              <p>
                <a href="#">
                  <span className="product">Community Share Play</span>
                </a>
                <p className="sub-text">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</p>
              </p>
              <hr className="announcement-solid-line"></hr>
            </ul>
            <ul className="top-announcement-details">
              <p>
                <a href="#">
                  <span className="product">Site Maintenance</span>
                </a>
                <p className="sub-text">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.</p>
              </p>
              <hr className="announcement-solid-line"></hr>
            </ul>
          </div>
          <div className="top-announcement box" style={{minWidth: "260px"}}>
            <div className="title">People</div>
              <ul className="people">
                <img className="people-dp" src="./assets/images/009.jpg"></img>
                <p className="people-name">@Carlo</p>
            </ul>
              <ul className="people">
                <img className="people-dp" src="./assets/images/004.jpg"></img>
                <p className="people-name">@Jenny</p>
            </ul>
              <ul className="people">
                <img className="people-dp" src="./assets/images/001.jpg"></img>
                <p className="people-name">@Jaswanth</p>
            </ul>
          </div>

        </div>
    </React.Fragment>
  )
}

export default AnnouncementsBar