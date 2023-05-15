import "./service.css";
import serviceImg from "../pagesImages/service.png";
import {BiDetail} from 'react-icons/bi'

const Service = () => {
  return (
    <div className="service-box">
      <img src={serviceImg} className="service-image" />
      <div className="text-layer">
        <h2>PhotoShop</h2>
        <p>
          Adobe Photoshop is software that is extensively used for raster image
          editing, graphic design and digital art.{" "}
        </p>
        <button className="service-button"><BiDetail className="service-icon" /></button>
      </div>
    </div>
  );
};

export default Service;
