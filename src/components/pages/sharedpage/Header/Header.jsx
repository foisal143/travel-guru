import React, { useContext, useState } from 'react';
import logo from '../../../../assets/Frame.svg';
import darkLogo from '../../../../assets/logo.png';
import { IoIosSearch } from 'react-icons/io';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { AtuhContext } from '../../../../UserContext/UserContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const path = location.pathname;
  const { logout, user } = useContext(AtuhContext);
  const handlerLogout = () => {
    logout()
      .then(() => {})
      .catch(er => console.log(er.message));
  };
  return (
    <nav className="absolute z-10 md:px-12 flex justify-between items-center px-5 py-5 top-0 w-full gap-5 lg:gap-0">
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
        <div className=" text-white lg:w-1/4 bg-white/25 flex justify-between items-center px-3 h-10 rounded-md">
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
        className={`flex flex-col text-center  lg:w-fit w-full absolute ${
          isOpen ? 'top-20 p-5  ' : '-top-96'
        } lg:static right-0 duration-500  bg-white  lg:bg-transparent  lg:flex-row gap-3 lg:gap-10 ${
          path === '/' || path === '/booking'
            ? 'text-black lg:text-white'
            : 'text-black '
        }`}
      >
        <Link>News</Link>
        <Link>Destination</Link>
        <Link>Blog</Link>
        <Link>Contact</Link>
        {/* small devaice profile section */}
        <div className="lg:hidden block">
          <span className=" font-bold me-3">{user && user.displayName}</span>
          {user ? (
            <button
              onClick={handlerLogout}
              className="px-8 py-2 bg-[#F9A51A] rounded-md font-bold"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="px-8 py-2 bg-[#F9A51A] rounded-md font-bold">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="lg:block hidden">
        <span className=" font-bold me-3">{user && user.displayName}</span>
        {user ? (
          <button
            onClick={handlerLogout}
            className="px-8 py-2 bg-[#F9A51A] rounded-md font-bold"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="px-8 py-2 bg-[#F9A51A] rounded-md font-bold">
              Login
            </button>
          </Link>
        )}
      </div>
      <span
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden text-xl cursor-pointer ${
          path === '/' || path === '/booking' ? 'text-white' : 'text-black'
        }`}
      >
        {isOpen ? <FaXmark /> : <FaBars></FaBars>}
      </span>
    </nav>
  );
};

export default Header;
