import Service from "./Service";
import "./services.css";
import { GiPencilBrush } from "react-icons/gi";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="services">
      <div className="heanding-services-box">
        <motion.div
          className="heading-box-services"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <motion.div
          className="services-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h2>Services</h2>
        </motion.div>
        <motion.div
          className="services-icon"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <GiPencilBrush className="heading-service-icon" />
        </motion.div>
      </div>
      <div className="services-box">
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
    </div>
  );
};

export default Services;
