import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import themes from "../assets/theme_pattern.svg";
import { FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa";
import { TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loader from "../../loader.json";

const Contact = ({theme}) => {
  const form = useRef();
  let time;
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_hmhmjdo", "template_uazi2if", form.current, {
        publicKey: "itZqWuLC3b5kNaAE-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          time = setTimeout(() => {
            setMessage("Email sent succesfully");
            setLoading(false);
          }, 2000);

          return () => {
            setLoading(false);
            clearTimeout(time, 1000);
          };
        },

        (error) => {
          console.log("FAILED...", error.text);
          var time = setTimeout(() => {
            setMessage("Failed to send Message");
          }, 2000);

          return () => {
            setLoading(false);
            clearTimeout(time, 1000);
          };
        }
      );
    e.target.reset();
  };
  useEffect(() => {}, [time, message]);
  return (
    <div className="contact">
      <motion.div
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0, transition: { delay: 0.1 } }}
        whileFocus={{ opacity: 1, translateY: 0, transition: { delay: 0.1 } }}
        className="contact-title"
      >
        <h1 className={`${theme === 'light' ? 'light' : null}`}> Get in touch</h1>
        <img src={themes} alt="" />
      </motion.div>
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
          <h1>Let's talk</h1>
          <motion.p
          className={ `contact-text ${theme} === 'light' ? 'light' : 'dark' `}
            initial={{ opacity: 0, translateY: -100 }}
            whileInView={{
              opacity: 1,
              translateY: 0,
              transition: { delay: 0.1 },
            }}
          >
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestionss are
            important to us as we strive to provide exceptional services to our
            clients and community.
          </motion.p>
          <ul>
            <li>
              <FaEnvelope
                className={`mail ${theme} === 'light' ? 'light' : 'dark' `}
              />{" "}
              &nbsp; jexzyjames@gmail.com
            </li>
            <li>
              <FaPhone
                className={`mail ${theme} === 'light' ? 'light' : 'dark' `}
              />{" "}
              &nbsp; +234-7045 666 940
            </li>
            <li>
              <FaLocationArrow
                className={`mail ${theme} === 'light' ? 'light' : 'dark'  `}
              />{" "}
              &nbsp; 30, Apesin Street, Mushin <br /> &nbsp; Lagos, Nigeria
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
              type="phone"
              placeholder="Enter your mobile"
              name="phone"
              // className={`${theme === 'light' ? 'light' : 'dark'}`}
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
            <p className="message">{message}</p>
            <br />
          
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
