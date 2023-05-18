import "./contact.css";
import { RiContactsFill } from "react-icons/ri";
import {
  BsInstagram,
  BsEnvelopeAt,
  BsFacebook,
  BsLinkedin,
} from "react-icons/bs";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact-box">
      <div className="contact-heading-box">
        <motion.div
          className="contact-box-heading"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h2>Contact me</h2>
        </motion.div>
        <motion.div
          className="contact-icon"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <RiContactsFill className="icon-figure" />
        </motion.div>
      </div>
      <div className="content-box">
        <div className="contact-content-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="contact-content">
          <a className="contacts-links">
            <BsInstagram className="contact-icons" />
            <p>Instagram Profile</p>
          </a>
          <a className="contacts-links">
            <BsFacebook className="contact-icons" />
            <p>Facebook profile</p>
          </a>
          <a className="contacts-links">
            <BsLinkedin className="contact-icons" />
            <p>LinkedIn profile</p>
          </a>
          <div className="contact-email">
            <BsEnvelopeAt className="contact-icons" />
            <p>dusandjurdjevic@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
