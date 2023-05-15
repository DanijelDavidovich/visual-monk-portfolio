import MailBox from "./MailBox";
import "./homePage.css";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { useState } from "react";

const HomePage = () => {
  const [visibility, setVisibility] = useState(false);
  const visibilityEnter = () => {
    setVisibility(true);
  };
  const visibilityClose = () => {
    setVisibility(false);
  };
  return (
    <div className="container">
      <div className="logo-container">
        <div className="main-logo">logo</div>
        <div className="heading-logo">
          <p className="heading-text">Visual Monk</p>
        </div>
        <div>
          <p className="text-logo">
            Design and creative technology with some years of experience.
          </p>
        </div>
      </div>
      <div className="mail">
        <MailBox opacity={visibility} closeHandler={visibilityClose} />
        <button className="mail-button" onClick={visibilityEnter}>
          <HiOutlineChatAlt2 className="mail-icon" />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
