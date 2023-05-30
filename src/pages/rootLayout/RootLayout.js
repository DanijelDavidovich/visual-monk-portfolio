import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation";
import background from "./rootImages/background.png";
import "./rootLayout.css";

const RootLayout = () => {
  return (
    <div className="root-container">
      {/* <img src={background} className="root-background" /> */}
      <div className="root-content">
        <Navigation className="navigation" />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
