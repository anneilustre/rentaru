import logo from "./../../assets/rentaru_logo.png";

const Logo = () => {
  return (
    <div className="logo flex justify-center">
      <div className="logo-wrapper">
        <img src={logo} alt="Rentaru" />
      </div>
    </div>
  );
};

export default Logo;
