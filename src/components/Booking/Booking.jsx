import { useContext } from 'react';
import { PlacesContext } from '../../PlaceContext/PlaceContext';
import { Link } from 'react-router-dom';

const Booking = () => {
  const { place } = useContext(PlacesContext);

  return (
    <div className="hero-content flex-col w-2/3 mx-auto">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Origin</span>
            </label>
            <input
              type="text"
              placeholder="Your origin "
              className="input text-black input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Destination</span>
            </label>
            <input
              type="text"
              value={place.name ? place.name : "Cox's Bazar"}
              className="input text-black input-bordered"
              required
            />
          </div>
          <div className="text-black flex gap-5">
            <div>
              <label className="label" htmlFor="from">
                From
              </label>
              <input
                type="date"
                name="date"
                id=""
                className="border p-2 rounded-md bg-slate-100 border-slate-200"
              />
            </div>
            <div>
              <label className="label" htmlFor="from">
                To
              </label>
              <input
                type="date"
                name="date"
                id=""
                className="border p-2 rounded-md bg-slate-100 border-slate-200"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <Link to="/booked">
              {' '}
              <button className="px-8 text-center py-2 mx-auto w-full bg-[#F9A51A] flex justify-center items-center gap-3 text-black rounded-md font-bold">
                Start Booking
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
