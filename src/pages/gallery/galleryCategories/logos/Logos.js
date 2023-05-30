import "./logos.css";
import logo1 from './logoImages/logo1.png'
import logo2 from './logoImages/logo2.jpg'
import ImageBox from "../../ImageBox";

const Logos = () => {
  return <div className="images-box">
  <ImageBox image={logo1} />
  <ImageBox image={logo2} />

</div>
};

export default Logos;
