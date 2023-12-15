import React, { useContext, useState } from 'react';
import Marquee from 'react-fast-marquee';
import './Home.css';
import { PlacesContext } from '../../../PlaceContext/PlaceContext';
import Slider from '../../Slider/Slider';
import { FaAngleRight } from 'react-icons/fa6';
import Header from '../sharedpage/Header/Header';
import Footer from '../sharedpage/Footer/Footer';
import { FaAngleLeft, FaChevronLeft } from 'react-icons/fa';
const Home = () => {
  const { places } = useContext(PlacesContext);

  return (
    <>
      <Marquee speed={30} pauseOnHover>
        <div className=" relative transition-all duration-500 gap-2 lg:gap-5 flex w-[200vw]">
          {places.map(place => (
            <Slider key={place.id} place={place}></Slider>
          ))}
        </div>
      </Marquee>
      <div className="mt-12">
        <button className=" p-3 text-black bg-slate-200 rounded-full">
          <FaChevronLeft />
        </button>
        <button className="ms-5 p-3 text-black bg-slate-200 rounded-full">
          <FaAngleRight></FaAngleRight>
        </button>
      </div>
    </>
  );
};

export default Home;
