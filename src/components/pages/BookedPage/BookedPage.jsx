import React, { useContext } from 'react';
import Header from '../sharedpage/Header/Header';
import { PlacesContext } from '../../../PlaceContext/PlaceContext';
import Resort from '../../Resort/Resort';
import GoogleMapReact from 'google-map-react';
import Map from '../../Map/Map';
const BookedPage = () => {
  const { place, places } = useContext(PlacesContext);

  const { resorts, longitude, latitude } = place;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div>
      <Header></Header>
      <div className="mt-24 p-12 flex overflow-hidden flex-col lg:flex-row gap-5">
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-bold">Stay in {place.name}</h3>
          <div>
            {resorts ? (
              resorts.map(resort => (
                <Resort key={resort.name} resort={resort}></Resort>
              ))
            ) : (
              <Resort resort={places[0]}></Resort>
            )}
          </div>
        </div>
        <div className="lg:w-1/2 h-[50vh]">
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: '' }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <Map lat={latitude} lng={longitude} text="My Marker" />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedPage;
