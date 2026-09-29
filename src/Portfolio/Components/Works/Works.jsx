import React from 'react'
import data from '../../assets/mywork_data'
import {FaHtml5, FaJs } from "react-icons/fa";
import {DiCss3} from 'react-icons/di'
import { motion } from 'framer-motion'
import './Works.css' 
import themes from "../../assets/theme_pattern.svg";

const Works = () => {
  return (
    <div className='services'>
        <motion.div
         initial={{ opacity: 0, translateY: -100 }}
         whileInView={{ opacity: 1, translateY: 0, transition:{delay: 0.1} }}
         className="services-title">
            <h1>My latest work</h1>
          
        </motion.div>
           {data.map((item,id) =>{
    return(
        <motion.div 
            className='services-container'
            initial={{ opacity: 0, translateY: -100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}  
            key={id}  
        >
            <img src={item.w_img} alt="works_image" /> 
            
            <motion.div
                className="deeds"
                initial={{ opacity: 0, translateX: 100 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }} 
            >
                <motion.div
                    className="write-up"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}  
                >
                    <p>{item.text}</p>
                    <ul>
                        <li style={{width:'150px'}}>
                            Technologies <hr className='underline' /> 
                        </li>
                        <li>{item.language.text1} <FaHtml5/> </li>
                        <li>{item.language.text2} <DiCss3/> </li>
                        <li>{item.language.text3} <FaJs/> </li>
                        <li>{item.language.text4}  </li>
                    </ul>
                </motion.div>
                
                <a target='_blank' rel='noopener noreferrer' className='target' href={item.link}>
                    <button className='target-link'>Check out</button>
                </a>
            </motion.div>
        </motion.div>
    )
})}
       
    </div>
  )
}

export default Works
