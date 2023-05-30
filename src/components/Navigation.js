import { Link } from "react-router-dom";
import "./navigation.css";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/about-me" className="links">
          About Me
        </Link>
        <Link to="/gallery" className="links">
          Gallery
        </Link>
        <Link to="/services" className="links">
          Services
        </Link>
        <Link to="contact" className="links">
          Contact
        </Link>
      </div>
      <div className="icons">
        <a href="https://www.instagram.com/dusan.psd/" target="_blank">
          <BsInstagram className="icon" />
        </a>
        <a href="https://www.facebook.com/dusan.djurdjevic95" target="_blank">
          <FaFacebookF className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAC-Vf38Bu-ImF8UUIFkmKfQU-BgGWbFy5qM&keywords=dušan%20đurđević&origin=RICH_QUERY_SUGGESTION&position=0&searchId=1ed04a25-3322-4513-95c5-85d08fcb58b2&sid=AMP"
          target="_blank"
        >
          <FaLinkedinIn className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
