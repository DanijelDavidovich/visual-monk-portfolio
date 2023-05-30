import "./conceptArt.css";
import img1 from "./galleryImages/img1.jpg";
import img2 from "./galleryImages/img2.jpg";
import img3 from "./galleryImages/img3.jpg";
import img4 from "./galleryImages/img4.jpg";
import ImageBox from "../../ImageBox";

const ConceptArt = () => {
  return (
    <div className="images-box">
      <ImageBox image={img1} />
      <ImageBox image={img2} />
      <ImageBox image={img3} />
      <ImageBox image={img4} />
      <ImageBox image={img4} />
      <ImageBox image={img3} />
      <ImageBox image={img2} />
      <ImageBox image={img1} />
      <ImageBox image={img1} />
      <ImageBox image={img2} />
      <ImageBox image={img3} />
      <ImageBox image={img4} />
      <ImageBox image={img4} />
      <ImageBox image={img3} />
      <ImageBox image={img2} />
      <ImageBox image={img1} />
    </div>
  );
};

export default ConceptArt;
