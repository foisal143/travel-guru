import React, { useContext } from 'react';
import Header from '../../components/pages/sharedpage/Header/Header';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Footer from '../../components/pages/sharedpage/Footer/Footer';
import { FaArrowRight } from 'react-icons/fa';
import { PlacesContext } from '../../PlaceContext/PlaceContext';

const Main = () => {
  const { place } = useContext(PlacesContext);
  const { description, name } = place;
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      <Header></Header>
      <div className="  overflow-hidden min-h-screen px-5 lg:px-12 flex flex-col lg:flex-row pt-40 bg-image">
        <div className=" lg:w-2/5 px-5">
          <h3 className="text-7xl font-bold">{name ? name : 'Coxs Bazar'}</h3>
          <p className="my-5 text-white/75">
            {description
              ? description
              : "Cox's Bazar, home to the world's longest natural sea beach, captivates with pristine shores and adventurous exploration. Enjoy Laboni Beach, Inani Beach, and Himchari National Park for a perfect blend of relaxation and nature in Chittagong Division."}
          </p>
          {path === '/' && (
            <Link to="/booking">
              <button className="px-8 py-2 bg-[#F9A51A] flex items-center gap-3 text-black rounded-md font-bold">
                Booking Now <FaArrowRight />
              </button>
            </Link>
          )}
        </div>

        <div className=" lg:w-[60%] mt-20 lg:mt-0">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
