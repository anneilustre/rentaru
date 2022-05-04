import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <>
      <input type="checkbox" id="spNavBtn" hidden />
      <label for="spNavBtn" className="menu-sp"><FaBars /></label>
      <nav className="nav">
        <ul className="flex">
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/content">Support</Link>
          </li>
          <li>
            <Link to="/post-property-for-rent">Post for free</Link>
          </li>
          <li>
            <Link to="/lead" className="cta-pc">Help me find a place</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderNav;
