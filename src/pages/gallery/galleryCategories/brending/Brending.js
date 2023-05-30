import "./brending.css";
import ImageBox from "../../ImageBox";
import brend1 from "./brendingImages/brending1.png";
import brend2 from "./brendingImages/brending2.png";

const Brending = () => {
  return (
    <div className="images-box">
      <ImageBox image={brend1} />
      <ImageBox image={brend2} />
    </div>
  );
};

export default Brending;
