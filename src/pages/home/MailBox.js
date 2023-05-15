import "./mailBox.css";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

const MailBox = (props) => {
  return (
    <motion.div
      layout
      transition={{ type: "spring", duration: 1 }}
      animate={{
        y: props.opacity ? 0 : -200,
        opacity: props.opacity ? 1 : 0,
      }}
      className="mail-box"
    >
      <button className="close-button" onClick={props.closeHandler}>
        <MdClose className="close-icon" />
      </button>
      <div className="image-email">img</div>
      <textarea
        className="message-field"
        placeholder="Enter your message..."
      ></textarea>
      <button className="message-button">Send your message</button>
    </motion.div>
  );
};

export default MailBox;
