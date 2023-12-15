import React, { useContext } from 'react';
import { PlacesContext } from '../../PlaceContext/PlaceContext';

const Slider = ({ place }) => {
  const { handlerData } = useContext(PlacesContext);
  return (
    <div
      onClick={() => handlerData(place)}
      className=" inline w-1/4 lg:w-80 ms-2 bg-black relative cursor-pointer rounded-md shadow-md"
    >
      <img
        className=" lg:w-80 w-full h-full lg:h-96 rounded-md shadow-md"
        src={place.image}
        alt=""
      />
      <div className="w-full h-full bg-black absolute top-0 opacity-50"></div>
      <h3 className=" text-[8px] lg:text-3xl absolute bottom-3 mx-auto lg:left-5 left-1 md:left-2 font-semibold">
        {place.name}
      </h3>
    </div>
  );
};

export default Slider;
