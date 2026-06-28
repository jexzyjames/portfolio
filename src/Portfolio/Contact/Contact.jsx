import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import themes from "../assets/theme_pattern.svg";
import { FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa";
import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loader from "../../loader.json";

const Contact = ({ theme }) => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault(); // Fixed: Will now receive the 'e' event properly
    setLoading(true);

    emailjs
      .sendForm("service_hmhmjdo", "template_uazi2if", form.current, {
        publicKey: "itZqWuLC3b5kNaAE-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMessage("Email sent successfully");
          setLoading(false);
          e.target.reset(); // Resets form on success
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMessage(error.text || "Failed to send email");
          setLoading(false);
        }
      );
  };

  // This effect automatically clears the message 3 seconds after it appears
  useEffect(() => {
    // FIXED: Removed the accidental sendEmail() call from here
    if (!message) return; 

    const timer = setTimeout(() => {
      setMessage(""); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, [message]);

  return (
    <div className="contact">
      <motion.div
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.1 } }}
        whileFocus={{ opacity: 1, translateY: 0, transition: { delay: 0.1 } }}
        className="contact-title"
      >
        {/* <img src={themes} alt="" /> */}
      </motion.div>
      <h1 className={`${theme === 'light' ? 'light' : ''}`}> Get in touch</h1>
      <div className="contact-section">
        <motion.div
          initial={{ opacity: 0, translateY: -100 }}
          whileInView={{
            opacity: 1,
            translateY: 0,
            transition: { delay: 0.1 },
          }}
          className="contact-left"
        >
          <h1 className="h1">Let's talk</h1>
          <motion.p
            className={`contact-text ${theme === 'light' ? 'light' : 'dark'}`} // FIXED: Corrected string template literal
            initial={{ opacity: 0, translateY: -100 }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: { delay: 0.1 },
            }}
          >
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional services to our
            clients and community.
          </motion.p>
          <ul>
            <li>
              <FaEnvelope
                className={`mail ${theme === 'light' ? 'light' : 'dark'}`} // FIXED
              />{" "}
              &nbsp; jexzyjames@gmail.com
            </li>
            <li>
              <FaPhone
                className={`mail ${theme === 'light' ? 'light' : 'dark'}`} // FIXED
              />{" "}
              &nbsp; +234-7045 666 940
            </li>
            <li>
              <FaLocationArrow
                className={`mail ${theme === 'light' ? 'light' : 'dark'}`} // FIXED
              />{" "}
              &nbsp; 30, Apesin Street, Mushin <br /> &nbsp; Lagos, Nigeria
            </li>
          </ul>
        </motion.div>
        
        <div className="contact-right">
          <form
            ref={form}
            onSubmit={sendEmail} // FIXED: Passing the function reference directly
            sx={{
              margin: "20px 0",
              padding: "1rem",
              width: "80%",
              resize: "none",
            }}
          >
            <label htmlFor="name">Your Name</label>
            <TextField
              sx={{
                margin: "20px 0",
                background: "#32323c",
                color: "#A0A0A0",
              }}
              fullWidth
              name="to_name"
              placeholder="Enter your name"
              required
            />
            <label htmlFor="phone">Phone Number</label>
            <TextField
              sx={{
                margin: "20px 0",
                background: "#32323c",
                color: "#A0A0A0",
              }}
              fullWidth
              type="number"
              placeholder="Enter your mobile"
              name="phone"
              required
            />
            <label htmlFor="message">Write your message here</label>
            <textarea
              name="message"
              className={`textarea ${theme === 'light' ? 'light' : 'dark'}`}
              placeholder="Enter your message"
              rows="6"
            ></textarea>
            
            {loading ? (
              <div className="loader-div">
                <Button
                  className="submit-btn"
                  type="submit"
                  sx={{
                    margin: "20px 0",
                    borderRadius: "50px",
                    transition: "0.6s",
                    padding: "10px 30px",
                    textTransform: "Capitalize",
                    background:
                      "linear-gradient(270deg, #Df8908 -5.09%, #b415ff 100.26%)",
                  }}
                  color="primary"
                  variant="contained"
                >
                  <Lottie className="loader" animationData={loader} />
                </Button>
              </div>
            ) : (
              <Button
                className="submit-btn"
                type="submit"
                sx={{
                  margin: "20px 0",
                  borderRadius: "50px",
                  transition: "0.6s",
                  padding: "10px 30px",
                  textTransform: "Capitalize",
                  background:
                    "linear-gradient(270deg, #Df8908 -5.09%, #b415ff 100.26%)",
                }}
                color="primary"
                variant="contained"
              >
                Submit Now
              </Button>
            )}
            <br />
          </form>
          <p className="message">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
