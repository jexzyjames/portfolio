import React, { useState } from "react";
import data from "../../assets/services_data";
import "./Projects.css";
import { motion } from "framer-motion";
const Projects = ({theme}) => {
  const [datas] = useState(data);
  return (
   <motion.div 
    id="section"
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1, duration: 0.5 }}
    viewport={{ once: true }}  
    className="works"
>
    <div className="works-title">
        <h1>My Services</h1>
    </div>
    
    <div className="works-container">
        {datas.map((item, id) => {
            return (
                <motion.div
                    key={id}
                    initial={{ opacity: 0, translateY: -100 }}
                    whileInView={{ opacity: 1, translateY: 0 }} 
                    transition={{ delay: id * 0.1, duration: 0.5 }}  
                    viewport={{ once: true }}  
                    className={`format ${theme === 'light' ? 'lights' : null}`}
                >
                    <div className="format-content">
                        <h3>{item.s_no}</h3>
                        <h2>{item.s_name}</h2>
                        <p>{item.s_desc}</p>
                        <img src={item.w_img} alt="" />
                    </div>
                </motion.div>
            );
        })}
    </div>
</motion.div>
  );
};

export default Projects;
