import "./imageModal.css";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

const ImageModal = (props) => {
  return (
    <div style={{ display: props.checker ? "" : "none" }}>
      <div className="overlay_style" onClick={props.close} />
      <div className="popup-box">
        <motion.img
          className="popup-img"
          src={props.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <button className="popup-button" onClick={props.close}>
          <MdClose className="popup-close" />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
