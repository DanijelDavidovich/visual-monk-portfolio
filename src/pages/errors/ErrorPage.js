import Navigation from "../../components/Navigation";
import "./errorPage.css";
import { BiError } from "react-icons/bi";

const ErrorPage = () => {
  return (
    <div>
      <Navigation />
      <div className="error-container">
        <div className="error-header">
          <BiError className="error-icon" />
          <h3 className="error-number">Error 404</h3>
          <h3>Page not found!</h3>
        </div>
        <p className="error-text">Go back to one of the options offered in the navigation bar...</p>
      </div>
    </div>
  );
};

export default ErrorPage;
