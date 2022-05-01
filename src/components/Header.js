import { FaSistrix } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "./../assets/rentaru_logo.png";

const Header = () => {
  return (
    <header className="flex items-center bg-sky-100 px-4 py-3">
      <div className="logo w-[200px] mr-4">
        <img src={logo} alt="Rentaru" className="max-w-[100%]" />
      </div>
      <div className="search mr-auto relative w-[200px]">
        <span className="absolute top-[12px] left-[9px] opacity-50 text-[21px]"><FaSistrix /></span>
        <input
          id="fullTextInput"
          type="text"
          placeholder="Search for a place"
          className="pl-8 pr-2 py-2 rounded-full border-solid"
        />
      </div>
      <nav className="nav my-auto">
        <ul className="flex items-center gap-4">
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
            <Link to="/lead" className="rounded-full bg-sky-600 p-3 text-gray-50">Help me find a place</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
