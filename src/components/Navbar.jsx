import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import 'remixicon/fonts/remixicon.css';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Navbar = ({ onSearchClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginStatus === 'true');
  }, []);

  const handleToggle = () => {
    if (isLoggedin) {
      localStorage.setItem('isLoggedIn', 'false');
      setIsLoggedIn(false);
      navigate('/'); // Optional: redirect after logout
    }
  };

  return (
    <motion.div
      animate={{ y: 50, transition: { duration: 1 } }}
      className="rounded-lg px-6 py-4 w-[95%] mx-auto backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg"
    >
      {/* Top section with logo and hamburger */}
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-32 lg:w-40" />
        </Link>

        {/* Hamburger Button (Mobile Only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black text-3xl lg:hidden transform-transition duration-500 ease-in"
        >
          <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-8 text-sm lg:text-base">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'hover:text-blue-400')}>
            Home
          </NavLink>
          <NavLink
            to="/BBMerchandise"
            className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'hover:text-blue-400')}
          >
            BB Merchandise
          </NavLink>
          <NavLink
            to="/raisedright"
            className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'hover:text-blue-400')}
          >
            Raised Right
          </NavLink>
          <NavLink
            to="/RaisedRightElite"
            className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'hover:text-blue-400')}
          >
            Raised Right Elite
          </NavLink>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex gap-4">
          <button className="border border-white/50 hover:bg-white/10 transition-all rounded-full px-4 py-2">
            <i className="ri-shopping-bag-3-line text-2xl"></i>
          </button>
          <button
            className="border border-white/50 hover:bg-white/10 transition-all rounded-full px-4 py-2"
            onClick={onSearchClick}
          >
            <i className="ri-search-line text-2xl"></i>
          </button>

          {/* Login / Logout icon desktop */}
          {isLoggedin ? (
            <button
              onClick={handleToggle}
              className="border border-white/50 hover:bg-white/10 transition-all rounded-full px-4 py-2"
              title="Logout"
            >
              <i className="ri-logout-box-line text-2xl"></i>
            </button>
          ) : (
            <NavLink
              to="/login"
              className="border border-white/50 hover:bg-white/10 transition-all rounded-full px-4 py-2"
              title="Login"
            >
              <i className="ri-login-box-line text-2xl"></i>
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 mt-6 text-center lg:hidden transition-all">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'hover:text-blue-400')}
          >
            Home
          </NavLink>
          <NavLink
            to="/BBMerchandise"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'hover:text-blue-400')}
          >
            BB Merchandise
          </NavLink>
          <NavLink
            to="/raisedright"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'hover:text-blue-400')}
          >
            Raised Right
          </NavLink>
          <NavLink
            to="/RaisedRightElite"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'hover:text-blue-400')}
          >
            Raised Right Elite
          </NavLink>

          {/* Mobile Icons */}
          <div className="flex justify-center gap-6 mt-4">
            <i className="ri-shopping-bag-3-line text-2xl cursor-pointer"></i>
            <i className="ri-search-line text-2xl cursor-pointer" onClick={onSearchClick}></i>

            {/* Login / Logout icon mobile */}
            {isLoggedin ? (
              <div
                className="text-2xl cursor-pointer"
                onClick={() => {
                  handleToggle();
                  setMenuOpen(false);
                }}
                title="Logout"
              >
                <i className="ri-logout-box-line"></i>
              </div>
            ) : (
              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="text-2xl"
                title="Login"
              >
                <i className="ri-login-box-line"></i>
              </NavLink>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
