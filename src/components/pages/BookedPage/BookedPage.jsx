import React, { useContext } from 'react';
import Header from '../sharedpage/Header/Header';
import { PlacesContext } from '../../../PlaceContext/PlaceContext';
import Resort from '../../Resort/Resort';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
const BookedPage = () => {
  const { place, places } = useContext(PlacesContext);

  const { resorts, longitude, latitude } = place;

  return (
    <div>
      <Header></Header>
      <div className="mt-24 p-12 flex overflow-hidden flex-col lg:flex-row gap-5">
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-bold">Stay in {place?.name}</h3>
          <div>
            {resorts ? (
              resorts.map(resort => (
                <Resort key={resort?.name} resort={resort}></Resort>
              ))
            ) : (
              <Resort resort={places[0]}></Resort>
            )}
          </div>
        </div>
        <div className="lg:w-1/2 h-[50vh]">
          <div
            className="overflow-hidden"
            style={{ height: '100vh', width: '100%' }}
          >
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              scrollWheelZoom={false}
              className="w-[50vw] h-screen bg-no-repeat bg-cover"
            >
              <TileLayer
                className="bg-no-repeat bg-cover"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[
                  latitude ? latitude : 50,
                  longitude ? longitude : 60,
                ]}
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedPage;
