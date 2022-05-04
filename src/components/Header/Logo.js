import { Link } from "react-router-dom";
import logo from "./../../assets/rentaru_logo.png";

const Logo = () => {
  return (
    <div className="logo flex justify-center">
      <Link to="/" className="logo-wrapper">
        <img src={logo} alt="Rentaru" />
      </Link>
    </div>
  );
};

export default Logo;
