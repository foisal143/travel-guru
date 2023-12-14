import React, { useContext } from 'react';
import { PlacesContext } from '../../PlaceContext/PlaceContext';

const Slider = ({ place }) => {
  const { handlerData } = useContext(PlacesContext);
  return (
    <div
      onClick={() => handlerData(place)}
      className="inline ms-2 bg-black relative cursor-pointer rounded-md shadow-md"
    >
      <img
        className="w-80  h-96 rounded-md shadow-md"
        src={place.image}
        alt=""
      />
      <div className="w-full h-full bg-black absolute top-0 opacity-50"></div>
      <h3 className="text-3xl absolute bottom-3 mx-auto left-5 font-semibold">
        {place.name}
      </h3>
    </div>
  );
};

export default Slider;
