import "./gallery.css";
import { useState } from "react";
import ImageModal from "./ImageModal";

const ImageBox = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => {
    setIsOpen(true);
  };
  const closeHandler = () => {
    setIsOpen(false);
  };
  return (
    <div className="image-box">
      <img src={props.image} className="image-gallery" onClick={openHandler} />
      <ImageModal content={props.image} close={closeHandler} checker={isOpen} />
    </div>
  );
};

export default ImageBox;
