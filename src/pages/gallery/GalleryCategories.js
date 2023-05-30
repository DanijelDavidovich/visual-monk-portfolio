import "./galleryCategories.css";
import { TbArrowBadgeRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";

const GalleryCategories = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handler1 = () => {
    setActiveLink(1);
  };
  const handler2 = () => {
    setActiveLink(2);
  };
  const handler3 = () => {
    setActiveLink(3);
  };
  return (
    <div className="gallery-categories-box">
      <Link
        to="/gallery/conceptArt"
        className="categories-element"
        onClick={handler1}
      >
        <TbArrowBadgeRight
          className={`categories-icons ${
            activeLink == 1 ? "categories-icons-active" : ""
          }`}
        />
        <p
          className={`categories-text ${
            activeLink == 1 ? "categories-text-active" : ""
          }`}
        >
          Concept Art
        </p>
      </Link>
      <Link
        to="/gallery/brending"
        className="categories-element"
        onClick={handler2}
      >
        <TbArrowBadgeRight
          className={`categories-icons ${
            activeLink == 2 ? "categories-icons-active" : ""
          }`}
        />
        <p
          className={`categories-text ${
            activeLink == 2 ? "categories-text-active" : ""
          }`}
        >
          Brending
        </p>
      </Link>
      <Link
        to="/gallery/logos"
        className="categories-element"
        onClick={handler3}
      >
        <TbArrowBadgeRight
          className={`categories-icons ${
            activeLink == 3 ? "categories-icons-active" : ""
          }`}
        />
        <p
          className={`categories-text ${
            activeLink == 3 ? "categories-text-active" : ""
          }`}
        >
          Logos
        </p>
      </Link>
    </div>
  );
};

export default GalleryCategories;
