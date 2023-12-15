import React, { createContext, useEffect, useState } from 'react';
export const PlacesContext = createContext(null);
const PlaceContext = ({ children }) => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch('https://travel-bd-server-pi.vercel.app/places')
      .then(res => res.json())
      .then(data => setPlaces(data.destinations))
      .catch();
  }, []);
  const [place, setplace] = useState({});
  const handlerData = pl => {
    setplace(pl);
  };
  const placesAll = {
    places,
    handlerData,
    place,
  };
  return (
    <PlacesContext.Provider value={placesAll}>
      {children}
    </PlacesContext.Provider>
  );
};

export default PlaceContext;
