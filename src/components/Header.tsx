// src/components/Header.tsx

import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../assets/logo-racoon.png";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <svg className="logo-svg">
          <image className="logo-img" href={Logo} />
        </svg>
        <div className="logo-text">Racoon</div>
      </div>
      <nav className="nav">
        <div className="nav-link-p">
          <ScrollLink to="features" smooth={true} className="nav-link">
            Features
          </ScrollLink>
          <ScrollLink to="about" smooth={true} className="nav-link">
            About
          </ScrollLink>
        </div>
        <div className="btn-p">
          <RouterLink to="/login" className="btn btn-login">
            Login
          </RouterLink>
          <RouterLink to="/signup" className="btn btn-signup">
            Sign Up
          </RouterLink>
        </div>
        <Dropdown cities={["Login","Signup"]} showDropDown={false} toggleDropDown={undefined} citySelection={undefined}/>
      </nav>
    </header>
  );
};

export default Header;
