import React, { useContext, useState } from 'react';
import Marquee from 'react-fast-marquee';
import './Home.css';
import { PlacesContext } from '../../../PlaceContext/PlaceContext';
import Slider from '../../Slider/Slider';
import { FaArrowRight } from 'react-icons/fa';
import Header from '../sharedpage/Header/Header';
import Footer from '../sharedpage/Footer/Footer';
const Home = () => {
  const { places } = useContext(PlacesContext);

  return (
    <>
      <Marquee speed={30} pauseOnHover>
        <div className=" relative transition-all duration-500 gap-5 flex w-[200vw]">
          {places.map(place => (
            <Slider key={place.id} place={place}></Slider>
          ))}
        </div>
      </Marquee>
      <div className="mt-12">
        <button className="me-5 btn btn-warning">L</button>
        <button className="btn btn-warning">R</button>
      </div>
    </>
  );
};

export default Home;
