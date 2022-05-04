import { FaSistrix } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "./../assets/rentaru_logo.png";

const Header = () => {
  return (
    <header className="flex items-center bg-sky-50 px-8 py-2">
      <div className="logo w-[200px] mr-4">
        <img src={logo} alt="Rentaru" className="max-w-[100%]" />
      </div>
      <div className="search mr-auto relative">
        <span className="absolute top-[12px] left-[9px] opacity-50 text-[20px]"><FaSistrix /></span>
        <input
          id="fullTextInput"
          type="text"
          placeholder="Search for a place"
          className="w-[210px] pl-8 pr-2 py-2 rounded-full border border-sky-200"
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
            <Link to="/lead" className="rounded-full bg-cta border border-cta py-3 px-4 text-white hover:bg-white hover:text-cta ">Help me find a place</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
