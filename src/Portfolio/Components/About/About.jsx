import React,{useState} from "react";
import "./About.css";
import img from "../../assets/jj.jpg";
import theme from "../../assets/theme_pattern.svg";
import { motion } from "framer-motion";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
const About = () => {
  const[activeTab, seetActiveTab] = useState('about')
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

          <div className="nav-tabs">
            <div onClick={()=> seetActiveTab('about')} className={`tabs ${activeTab === 'about' ? 'active-tab' : '' }`}>About</div>
            <div onClick={()=> seetActiveTab('skills')} className={`tabs ${activeTab === 'skills' ? 'active-tab' : '' }`}>Skills</div>
            <div onClick={()=> seetActiveTab('experience')} className={`tabs ${activeTab === 'experience' ? 'active-tab' : '' }`}>Experience</div>
          </div>

          <div className="content">
            {activeTab === 'experience' && (
              <motion.div
        initial={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0, transition: { delay: 0.2} }}
        className="tab experience"
      >

        <div >

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
        </div>
      </motion.div>

            )}

            {activeTab === 'about' && (

          <div className="tab infos">

            <div>

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

            </div>
          </div>
            )}

            {activeTab ===  'skills' && (

            <div className="tab skills">

              <div >

              <div className="labelled">
                <p> <FaHtml5 className="html"/> HTML  </p> <hr style={{ width: "70%" }} />{" "}
              </div>
              <div className="labelled">
                <p><FaCss3 className="css"/> CSS </p> <hr style={{ width: "70%" }} />{" "}
              </div>
              <div className="labelled">
                <p> <FaReact className='react' /> React JS </p> <hr style={{ width: "50%" }} />{" "}
              </div>
              {/* <div className="labelled">
                <p> <FaReact className='react' /> Redux  </p> <hr style={{ width: "50%" }} />{" "}
              </div> */}
              <div className="labelled">
                <p> <FaJs className='js'  />   Javascript </p> <hr style={{ width: "60%" }} />{" "}
              </div>
              <div className="labelled">
                <p>  Material UI </p> <hr style={{ width: "40%" }} />{" "}
              </div>
              <div className="labelled">
                <p> <FaCss3/> Tailwind   </p> <hr style={{ width: "60%" }} />{" "}
              </div>
              </div>

            </div>
            )}
          </div>



      

        </motion.div>
      </div>
    </div>
  );
};

export default About;
