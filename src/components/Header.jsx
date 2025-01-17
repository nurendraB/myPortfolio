import React from "react";
import { Link } from "react-scroll";
import logo from "/favicon.ico";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-dark text-white py-3 shadow-lg">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <motion.h1
            className="text-center d-flex align-items-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "50px", marginRight: "10px" }}
            />
            myPortfolio
          </motion.h1>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <motion.li
                  className="nav-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}>
                  <Link
                    className="btn nav-button text-white"
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    activeClass="active">
                    <motion.span whileHover={{ scale: 1.1 }}>About</motion.span>
                  </Link>
                </motion.li>
                <motion.li
                  className="nav-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}>
                  <Link
                    className="btn nav-button text-white"
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    activeClass="active">
                    <motion.span whileHover={{ scale: 1.1 }}>
                      Projects
                    </motion.span>
                  </Link>
                </motion.li>
                <motion.li
                  className="nav-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}>
                  <Link
                    className="btn nav-button text-white"
                    to="skills"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    activeClass="active">
                    <motion.span whileHover={{ scale: 1.1 }}>
                      Skills
                    </motion.span>
                  </Link>
                </motion.li>
                <motion.li
                  className="nav-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}>
                  <Link
                    className="btn nav-button text-white"
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    activeClass="active">
                    <motion.span whileHover={{ scale: 1.1 }}>
                      Services
                    </motion.span>
                  </Link>
                </motion.li>
                <motion.li
                  className="nav-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}>
                  <Link
                    className="btn nav-button text-white"
                    to="achievements"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    activeClass="active">
                    <motion.span whileHover={{ scale: 1.1 }}>
                      Achievements
                    </motion.span>
                  </Link>
                </motion.li>
                <motion.li
                  className="nav-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}>
                  <Link
                    className="btn nav-button text-white"
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-50}
                    activeClass="active">
                    <motion.span whileHover={{ scale: 1.1 }}>
                      Contact
                    </motion.span>
                  </Link>
                </motion.li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
