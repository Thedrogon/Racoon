import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import "remixicon/fonts/remixicon.css";
import "../styles/Header.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change background after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);
  return (
    <motion.header
      className={`header ${isScrolled ? "header-scrolled" : ""}`} // Add class based on scroll
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }} // Shortened duration
    >
      <div className="left">
        <div className="logo">
          <i className="logo-r ri-remix-run-fill"></i>
          <p className="logo-text">acoon</p>
        </div>
        <div className="right">
          <RouterLink to="/docs" className="router nav-link">
            Docs
          </RouterLink>
          <RouterLink to="/community" className="router nav-link">
            Community
          </RouterLink>
        </div>
      </div>
      <nav className="nav">
        <div className="nav-link-p">
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            About
          </ScrollLink>
        </div>
        <RouterLink to="/login" className="router btn btn-login">
          Login
        </RouterLink>
      </nav>
    </motion.header>
  );
};

export default Header;
