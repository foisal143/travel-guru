import React from 'react';
import { FaStar } from 'react-icons/fa';

const Resort = ({ resort }) => {
  const { name, price, rating, cancellation_policy, image } = resort;
  console.log(resort);
  return (
    <div className="flex my-5 gap-3">
      <img className="w-32 h-32" src={image} alt="" />
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p>4 guests 2 bedrooms 2 beds 2 baths</p>
        <p>Wif Air conditioning Kitchen</p>
        <p>{cancellation_policy}</p>
        <div className="flex justify-between">
          <span className="flex items-center gap-2 ">
            <FaStar className="text-[#F9A51A]"></FaStar> {rating}
          </span>
          <span className="font-semibold">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Resort;
