import React from 'react'
import "./sideBar.css"
import userImage from "../images/userImage.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometer, faDesktop, faHeartbeat, faCodeFork, faWifi, faMapMarker, faBell, faTools } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  return (
    <div className="side_container">
      <div className='side_header'>
        <h1>Promethues</h1>
        <span> </span>
      </div>
      <div className='side_body'>
        <div className='side_body_content'>
            <FontAwesomeIcon icon={faTachometer} className="content_icon" />
            <h3>DashBoard</h3>
        </div>
        <div className='side_body_content'>
            <FontAwesomeIcon icon={faDesktop } className="content_icon" />
            <h3>Monitor</h3>
        </div>
        <div className='side_body_content'>
            <FontAwesomeIcon icon={faHeartbeat} className="content_icon" />
            <h3>Heartbeat</h3>
        </div>
        <div className='side_body_content'>
            <FontAwesomeIcon icon={faMapMarker} className="content_icon" />
            <h3>Domain names</h3>
        </div>
        <div className='side_body_content'>
            <FontAwesomeIcon icon={faWifi} className="content_icon" />
            <h3>Status</h3>
        </div>
        <div className='side_body_content'>
            <FontAwesomeIcon icon={faCodeFork} className="content_icon" />
            <h3>Projects</h3>
        </div>
        <div className='side_body_content'>
            <FontAwesomeIcon icon={faBell} className="content_icon" />
            <h3>Notifications</h3>
        </div>
        <div className='side_body_content'>
            <FontAwesomeIcon icon={faTools} className="content_icon" />
            <h3>Tools</h3>
        </div>
      </div>
      <div className='side_footer'>
        <img src={userImage} />
        <div className='side_footer_text'>
            <h3>Muhammed Umar</h3>
            <p>muhammedumar@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar;
