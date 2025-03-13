import React, { useState, useRef} from "react";
import img from "../../assets/cover.jpg";
import menu from "../../assets/menu_open.svg";
import close from "../../assets/menu_close.svg";
import underline from "../../assets/nav_underline.svg";
import "./Main.css";
import themes from "../../assets/theme_pattern.svg";

import { Link } from "react-scroll";
import {
  FaLinkedin,
  FaAlignJustify,
} from "react-icons/fa";
import { motion } from "framer-motion";
import ScrollProgress from "../ScrollProgress";
import CircularScrollProgress from "../CirrcularScrollProgress";
const Main = ({theme}) => {
  
  const menuRef = useRef(null);
  const openMenu = () => {

       menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-150px';
  };
  const [isOpen, setIsOpen] = useState("home");
  return (
    <div  className="main">
      <div className="top">
        <div className="logos">
          <h4>James</h4>
          <img src={themes} alt="" />
        </div>

        <FaAlignJustify className={` lighted ${theme} === 'light' ?  'light' : 'darks' `} onClick={openMenu} src={menu} alt="" />
        <ul ref={menuRef} className={`ul ${theme === 'light' ? 'darks' : 'lights'}`}>
          <img className="remove" onClick={closeMenu} src={close} alt="" />
          <li>
            {" "}
            <Link offset={0} duration={500} to="main">
              <p onClick={() =>{

                setIsOpen("home")
                closeMenu();
              }
                 }>Home</p>
              {isOpen === "home" ? <img  src={underline} alt="" /> : ""}
            </Link>
          </li>
          <li>
            {" "}
            <Link offset={-150} duration={500} to="about-me">
              <p onClick={() => {

                setIsOpen("about-me")
                closeMenu();
              }
                }>About me</p>
              {isOpen === "about-me" ? <img src={underline} alt="" /> : ""}
            </Link>
          </li>
          <li>
            {" "}
            <Link offset={-260} duration={500} to="works">
              <p onClick={() => 
              {

                setIsOpen("works")
                closeMenu();
              }

              }>Services</p>
              {isOpen === "works" ? <img src={underline} alt="" /> : ""}
            </Link>
          </li>
          <li>
            {" "}
            <Link offset={-260} duration={500} to="services">
              <p onClick={() =>{

                setIsOpen("services")
                closeMenu();
              }
                 }>My works</p>
              {isOpen === "services" ? <img src={underline} alt="" /> : ""}
            </Link>
          </li>
          <li>
            {" "}
            <Link offset={-260} duration={500} to="contact">
              <p onClick={() =>  {

                setIsOpen("contact")
                closeMenu();
              }
                }>Contact</p>
              {isOpen === "contact" ? <img src={underline} alt="" /> : ""}
            </Link>
          </li>
        </ul>
        <div className="connect">
          <button>
            <Link to="contact">Contact me </Link>
          </button>
        </div>
      </div>
      {/* Hero section */}

      <motion.div
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.1 } }}
        className="wrapper"
      >
        <div className="wrapper-content">
          <div className="image-wrapper">

          <img className='dp' src={img} alt="" />
          </div>
          <h1>
            {" "}
            <span className="font">I'm James Jegede,</span> frontend developer
            based in Nigeria
          </h1>
          <p>
            I am a frontend developer from Nigeria with 3+ years of experience
            vast with frontend core technologies.
          </p>
          <div className="links">
            <a
              className="target-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/james-jegede"
            >
              <button className="connect-btn">
                Connect with me <FaLinkedin />{" "}
              </button>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/12GkU9lzt7emdbDH-_ulC4HSGAp-zMQLp/view?usp=sharing">
              <button className="resume-btn">My resume</button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Main;
