import React, { useContext, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import './Home.css';
import { PlacesContext } from '../../../PlaceContext/PlaceContext';
import Slider from '../../Slider/Slider';
import { FaAngleRight } from 'react-icons/fa6';

import { FaAngleLeft, FaChevronLeft } from 'react-icons/fa';
// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';
const Home = () => {
  const { places } = useContext(PlacesContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const handlerLeftMove = () => {};
  return (
    <>
      <Marquee speed={30} pauseOnHover>
        <div className="  transition-all duration-500 gap-2 lg:gap-5 flex w-[200vw]">
          {places.map(place => (
            <Slider key={place.id} place={place}></Slider>
          ))}
        </div>
      </Marquee>

      <div className="mt-12">
        <button
          onClick={handlerLeftMove}
          className=" p-3 text-black bg-slate-200 rounded-full"
        >
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
