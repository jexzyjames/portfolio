import React, {useState} from 'react'
import data from '../../assets/mywork_data'
import theme from '../../assets/theme_pattern.svg'
import arrow from '../../assets/arrow_icon.svg'
import { FaLinkedin, FaLinkedinIn, FaReact, FaJs, FaHtml5, FaCss3, FaJsfiddle } from "react-icons/fa6";
import {DiJsBadge,DiCss3} from 'react-icons/di'
import { motion } from 'framer-motion'
import './Works.css'
const Works = ({theme}) => {
    const [more, SetMore] = useState(false)
  return (
    <div className='services'>
        <motion.div
         initial={{ opacity: 0, translateY: -100 }}
         whileInView={{ opacity: 1, translateY: 0, transition:{delay: 0.1} }}
         className="services-title">
            <h1>My latest work</h1>
            <img src={theme}alt="" />
        </motion.div>
            {data.map((item,id) =>{
                return(
                <motion.div className='services-container'
                initial={{ opacity: 0, translateY: -100 }}
                whileInView={{ opacity: 1, translateY: 0, transition:{delay: 0.1} }}
                whileFocus={{ opacity: 1, translateY: 0, transition:{delay:0.1} }} 
                >

                <img src={item.w_img} alt="" /> 
                    <motion.div
                      initial={{ opacity: 0, translateX: 100 }}
                      whileInView={{ opacity: 1, translateX: 0, transition:{delay: 0.1} }}
                      whileFocus={{ opacity: 1, translatX: 0, transition:{delay:0.1} }} 
                    className="deeds">
                        <motion.div
                         initial={{ opacity: 0, translateX: 100 }}
                         whileInView={{ opacity: 1, translateX: 0, transition:{delay: 0.1} }}
                         whileFocus={{ opacity: 1, translateYX: 0, transition:{delay:0.1} }} 
                         className="write-up">
                            <p>{item.text}</p>
                            <ul>
                                <li style={{width:'150px'}}>Technologies <hr className='underline' /> </li>
                                <li>{item.language.text1} <FaHtml5/> </li>
                                <li>{item.language.text2} <DiCss3/> </li>
                                <li>{item.language.text3} <FaJs/> </li>
                                <li>{item.language.text4}  </li>
                            </ul>
                        </motion.div>
                    <a target='_blank' className='target' href={item.link}>
                    <button className='target-link'>Check out</button>
                    </a>
                    </motion.div>
                </motion.div>
            )
            })}

        {/* <div onClick={()=> SetMore(!more)} className="show-more">
            <p  style={{textAlign:'left'}}>Show More</p>
            <img  src={arrow} alt="" />

        </div>
      {more &&  <div className="services-container">
            {data.map((item,id) =>{
                return(
                        <img src={item.w_img} alt="" />
            )
            })}
        </div>} */}
    </div>
  )
}

export default Works
