import React from "react";
import "./welcomePage.css";
import { motion } from 'framer-motion';
import {FaArrowRight, FaCheckCircle} from 'react-icons/fa'


const WelcomePage = () => {
    return (
        <div className="welcome_container">
            <motion.div animate={{ y: -100, opacity: 1 }} transition={{ duration: 0.8 }} className="motion_container">
                <h1 className="gradient-text">Maximize Uptime</h1>
                <h1 className="gradient-text">Minimize Downtime</h1>
                <p className="text">Boost Website Uptime and Performance with an Easy
                    and Reliable Web Monitoring Services - Highly Customizable and Fast Status Pages
                </p>  
            </motion.div>
            <motion.div animate={{ y: -200, opacity: 1 }} transition={{ duration: 1.2 }}>
                <button className="welcome_button">Get Started <FaArrowRight className="arrow"/></button>
            </motion.div>
            <div className="bottom_text">
            <h3><FaCheckCircle className="check_circle"/>Custom Domains</h3>
            <h3><FaCheckCircle className="check_circle"/>Downtime Alerts</h3>
            <h3><FaCheckCircle className="check_circle"/>Analytics Reports</h3>
            </div>
        </div>
    );
}

export default WelcomePage;