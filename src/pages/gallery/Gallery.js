import "./gallery.css";
import { useState } from "react";
import { motion } from "framer-motion";
import img1 from "./galleryImages/img1.jpg";
import img2 from "./galleryImages/img2.jpg";
import img3 from "./galleryImages/img3.jpg";
import img4 from "./galleryImages/img4.jpg";
import ImageModal from "./ImageModal";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => {
    setIsOpen(true);
  };
  const closeHandler = () => {
    setIsOpen(false);
  };
  return (
    <div className="gallery-box">
      <div className="heading-gallery-box">
        <motion.div
          className="heading-box-gallery"
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <motion.div
          className="heading-gallery"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h2>Gallery</h2>
        </motion.div>
        <motion.div
          className="small-ilustration"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="il-1"></div>
          <div className="il-2"></div>
          <div className="il-3"></div>
          <div className="il-4"></div>
        </motion.div>
      </div>
      <div className="images-box">
        <div className="image-box">
          <img src={img1} className="image-gallery" onClick={openHandler} />
          <ImageModal content={img1} close={closeHandler} checker={isOpen} />
        </div>
        <div className="image-box">
          <img src={img2} className="image-gallery" />
        </div>
        <div className="image-box">
          <img src={img3} className="image-gallery" />
        </div>
        <div className="image-box">
          <img src={img4} className="image-gallery" />
        </div>

        <div className="image-box">
          <img src={img4} className="image-gallery" />
        </div>
        <div className="image-box">
          <img src={img3} className="image-gallery" />
        </div>

        <div className="image-box">
          <img src={img2} className="image-gallery" />
        </div>
        <div className="image-box">
          <img src={img1} className="image-gallery" />
        </div>
      </div>
      {/* <div className="paginaton-box">pagination</div> */}
    </div>
  );
};

export default Gallery;
