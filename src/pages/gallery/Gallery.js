import "./gallery.css";

import { motion } from "framer-motion";


import ImageBox from "./ImageBox";
import GalleryCategories from "./GalleryCategories";
import { Outlet } from "react-router-dom";

const Gallery = () => {
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
      <div className="images-container">
        <div>
          <GalleryCategories />
        </div>
        <Outlet />
        
      </div>

      {/* <div className="paginaton-box">pagination</div> */}
    </div>
  );
};

export default Gallery;
