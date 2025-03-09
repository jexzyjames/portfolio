import React, { useRef,useEffect,  useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import theme from "../assets/theme_pattern.svg";
import { FaEnvelope,  FaPhone, FaLocationArrow } from "react-icons/fa";
import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from 'lottie-react'
import loader from '../../loader.json'

const Contact = () => {
  const form = useRef(); 
  let time;
  const result = useRef();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  let Names;
  let Phone;
  const sendEmail = e => {
    e.preventDefault();
    setLoading(true)

    emailjs
      .sendForm("service_hmhmjdo", "template_uazi2if", form.current,{
        publicKey: "itZqWuLC3b5kNaAE-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
           time = setTimeout(() => {
            setMessage('Email sent succesfully')
            setLoading(false)
          }, 2000);

          return () => {
            setLoading(false)
            clearTimeout(time, 1000);
          };
        },

        error => {
          console.log("FAILED...", error.text);
           var time = setTimeout(() => {
            setMessage('Failed to send Message')
                       }, 2000);

          return () => {
            setLoading(false)
            clearTimeout(time, 1000);
          };
        }
      );
      e.target.reset();
  };
  useEffect(()=>{},[time,message])
  return (
    <div className="contact">
        <motion.div
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0, transition:{delay: 0.1} }}
        whileFocus={{ opacity: 1, translateY: 0, transition:{delay:0.1} }}className="contact-title">
          <h1> Get in touch</h1>
          <img src={theme} alt="" />
        </motion.div>
        <div className="contact-section">

      <motion.div 
      initial={{ opacity: 0, translateY: -100 }}
      whileInView={{ opacity: 1, translateY: 0, transition:{delay: 0.1} }}
      className="contact-left">
        <h1>Let's talk</h1>
        <motion.p
        style={{fontSize: 'monospace'}}
         initial={{ opacity: 0, translateY: -100 }}
         whileInView={{ opacity: 1, translateY: 0, transition:{delay: 0.1} }}
        >
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestionss are
          important to us as we strive to provide exceptional service to our
          university community.
        </motion.p>
        <ul>
          <li>
            <FaEnvelope /> &nbsp; jexzyjames@gmail.com
          </li>
          <li>
            <FaPhone /> &nbsp; +234-7045 666 940
          </li>
          <li>
            <FaLocationArrow /> &nbsp; 30, Apesin Street, Mushin <br /> &nbsp;  
            Lagos, Nigeria
          </li>
        </ul>
      </motion.div>
      <div className="contact-right">
        <form
          ref={form}
          onSubmit={sendEmail}
          sx={{
            margin: "20px 0",
            padding: "1rem",
            width: "80%",
            resize: "none",
          }}
          margin="20px 0"
          fullWidth
        >
          {/* <FormControlLabel/> */}
          <label htmlFor="name">Your Name</label>
          <TextField
            sx={{
              margin: "20px 0",
              background:'#32323c',
              color: '#A0A0A0'

            }}
            fullWidth
            name='to_name'
            placeholder="Enter your name"
            required
          />
          <label htmlFor="phone">Phone Number</label>
          <TextField
            sx={{
              margin: "20px 0",
              background:'#32323c',
              color: '#A0A0A0',


            }}
            fullWidth
            type="phone"
            placeholder="Enter your mobile"
            name='phone'
            required
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="6"
          ></textarea>
          {loading ? <div className="loader-div">
            <Button
          className="submit-btn"
            type="submit"
            sx={{
              margin: "20px 0",
              borderRadius:'50px',
              transition:'0.6s',
              padding:'10px 30px',
              textTransform:'Capitalize',
              background: 'linear-gradient(270deg, #Df8908 -5.09%, #b415ff 100.26%)',

            }}
            color="primary"
            variant="contained"
          >
            
            <Lottie className="loader" animationData={loader} />
          </Button>
          </div>
          :
          <Button
          className="submit-btn"
            type="submit"
            sx={{
              margin: "20px 0",
              borderRadius:'50px',
              transition:'0.6s',
              padding:'10px 30px',
              textTransform:'Capitalize',
              background: 'linear-gradient(270deg, #Df8908 -5.09%, #b415ff 100.26%)',

            }}
            color="primary"
            variant="contained"
          >
            Submit Now
          </Button>
        }
        <p className="message">{message}</p>
          <br/>
          {/* <div>
            {loading && <p>{message}</p> }
          </div> */}
        </form>
      </div>
        </div>
    </div>
  );
};

export default Contact;
