import "./mailBox.css";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import img from "../pagesImages/aboutMe.png";
import { useState, useEffect } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const MailBox = (props) => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const regEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  // useEffect(() => {}, [email]);

  const emailHandler = (e) => {
    if (e.target.value === "") setErrorMessage("E-mail is required...");
    else if (!regEx.test(e.target.value)) setErrorMessage("Invalid E-mail!");
    else setErrorMessage("true");
    setEmail(e.target.value);
  };

  return (
    <motion.div
      className="mail-box"
      transition={{ type: "spring", duration: 1 }}
      animate={{
        y: props.opacity ? 0 : -200,
        opacity: props.opacity ? 1 : 0,
      }}
    >
      <button className="close-button" onClick={props.closeHandler}>
        <MdClose className="close-icon" />
      </button>
      <div className="image-email">
        <img className="email-image" src={img} />
      </div>
      <p
        className="error-message"
        style={{ opacity: errorMessage === "true" ? 0 : 1 }}
      >
        {errorMessage}
      </p>
      <p
        className="valid-message"
        style={{ opacity: errorMessage === "true" ? 1 : 0 }}
      >
        <BsFillCheckCircleFill className="check-icon" />
      </p>
      <form className="email-form">
        <input
          className="email-fild"
          type="email"
          placeholder="Enter your E-mail..."
          onChange={emailHandler}
        ></input>
        <textarea
          className="message-field"
          placeholder="Enter your message..."
        ></textarea>
      </form>

      <button className="message-button">Send your message</button>
    </motion.div>
  );
};

export default MailBox;
