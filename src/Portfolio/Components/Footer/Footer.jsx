import React,{useEffect, useState} from 'react'
import './Footer.css';
import { Link } from "react-scroll";
import {FaArrowUp} from 'react-icons/fa'
import theme from '../../assets/theme_pattern.svg'
import usericon from '../../assets/user_icon.svg'
import CircularScrollProgress from '../CirrcularScrollProgress';
import ScrollProgress from '../ScrollProgress';
const Footer = () => {
   const[stick, setStick] = useState(false)
   const copyright = new Date()
   const year = copyright.getUTCFullYear()
  // useEffect(()=>{
  //   if(window.scrollY > 100){
  //     alert('hi')
  //   }
  // },[]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 500){
      setStick(true)
      }
      else{
        setStick(false)
        return false;
      }
    });
  },[stick]);
  return (
    <div className='Footer'>
      {/* <div className="arrow square"> */}
        {/* <ScrollProgress/>  */}

      {/* </div> */}

      {/* <div className='arrow circular'> */}

      {/* <CircularScrollProgress/> */}
      {/* </div> */}
      {stick && <>
      <Link to='main'>
      <FaArrowUp className='arrow'/>

      </Link>
      </>}
      <div className="footer-top">
       <div className="footer-top-left">
        <div className="logos">
            <h4>James</h4>
            <img src={theme} alt="" />
            <p>I'm a frontend developer from Nigeria with 3+ years of experience vast with frontend core technologies.</p>

        </div>
       </div>

       <div className="footer-top-right">
        <div className="footer-email-input">
            <img src={usericon} alt="" />
            <input type="email" placeholder='Enter your email' />
        </div>
        <div className="footer-subscribe">
            Subscribe
        </div>
       </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>
          &copy; {year} James Jegede. All rights reserved.
            </p>  
        </div>

        <div className="footer-bottom-right">
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
        <p></p>
        </div>
      </div>

    </div>
  )
}

export default Footer
