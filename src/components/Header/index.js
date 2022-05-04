import HeaderNav from "./HeaderNav";
import Logo from "./Logo";
import Search from "./Search";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <HeaderNav />
      <Search />
    </header>
  );
};

export default Header;
