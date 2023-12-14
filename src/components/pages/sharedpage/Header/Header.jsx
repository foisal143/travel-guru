import React from 'react';
import logo from '../../../../assets/Frame.svg';
import darkLogo from '../../../../assets/logo.png';
import { IoIosSearch } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="absolute md:px-12 flex justify-between items-center px-5 py-5 top-0 w-full">
      <div className="">
        <Link to="/">
          <img
            className="h-12"
            src={path === '/' || path === '/booking' ? logo : darkLogo}
            alt=""
          />
        </Link>
      </div>
      {path === '/' || path === '/booking' ? (
        <div className=" text-white w-1/4 bg-white/25 flex justify-between items-center px-3 h-10 rounded-md">
          <button className=" bg-transparent me-2  border-0 ">
            <IoIosSearch />
          </button>
          <input
            className=" bg-transparent flex-grow h-full  outline-none   "
            placeholder="Search your Destination..."
          />
        </div>
      ) : (
        ''
      )}
      <div
        className={`flex gap-10 ${
          path === '/' || path === '/booking' ? 'text-white' : 'text-black'
        }`}
      >
        <Link>News</Link>
        <Link>Destination</Link>
        <Link>Blog</Link>
        <Link>Contact</Link>
      </div>
      <Link to="/login">
        <button className="px-8 py-2 bg-[#F9A51A] rounded-md font-bold">
          Login
        </button>
      </Link>
    </nav>
  );
};

export default Header;
