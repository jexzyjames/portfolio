import React from "react";
import "./About.css";
import img from "../../assets/jj.jpg";
import theme from "../../assets/theme_pattern.svg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="about-me">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme} alt="" />
      </div>

      <div className="about-section">
        <motion.div
          className="image-left"
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{
            opacity: 1,
            translateX: 0,
            transition: { delay: 0.1 },
          }}
          whileFocus={{ opacity: 1, translateX: 0, transition: { delay: 0.1} }}
        >
          <img src={img} alt="" />
        </motion.div>
        <motion.div
          className="details-right"
          initial={{ opacity: 0, translateX: 100 }}
          whileInView={{
            opacity: 1,
            translateX: 0,
            transition: { delay: 0.1 },
          }}
          whileFocus={{ opacity: 1, translateX: 0, transition: { delay: 0.1 } }}
        >
          <div className="infos">
            <p>
              I am an experienced Frontend Developer with great knowledge. I've
              had privileges to hands-on real-world projects designs and
              understanding of technologies.
            </p>
            <p className="passion">
              My passion for frontend development is not only reflected in my
              experience but also in the enthusiasm and dedication i bring to
              projects.
            </p>

            <div className="skills">
              <div className="labelled">
                <p>HTML & CSS </p> <hr style={{ width: "70%" }} />{" "}
              </div>
              <div className="labelled">
                <p>React JS </p> <hr style={{ width: "50%" }} />{" "}
              </div>
              <div className="labelled">
                <p>Vanilla JS </p> <hr style={{ width: "60%" }} />{" "}
              </div>
              <div className="labelled">
                <p>Material UI </p> <hr style={{ width: "40%" }} />{" "}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0, transition: { delay: 0.2} }}
        className="experience"
      >
        <motion.div
          initial={{ opacity: 0, translateY: -100 }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: { delay: 0.5 },
          }}
          className="years"
        >
          <h2>3+</h2>
          <h5>YEARS OF EXPERIENCE</h5>
        </motion.div>
        <hr />
        <motion.div
          initial={{ opacity: 0, translateY: -100 }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: { delay: 0.1 },
          }}
          className="years"
        >
          <h2>10+</h2>
          <h5>PROJECTS COMPLETED</h5>
        </motion.div>
        <hr />
        <motion.div
          className="years"
          initial={{ opacity: 0, translateY: -100 }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: { delay: 0.1 },
          }}
        >
          <h2>1</h2>
          <h5>INTERNSHIP EXPERIENCE</h5>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
