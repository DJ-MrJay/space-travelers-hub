import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReserve } from '../redux/rockets/rockets';

const RocketItem = ({ id, title, description, image, reserved }) => {
  const dispatch = useDispatch();

  return (
    <li className="grid grid-cols-4 mb-8 gap-5">
      <div className="col-span-1">
        <img src={image} alt="Rocket" />
      </div>
      <div className="col-span-3">
        <div className="text-xl">{title}</div>
        <div className="text-sm">
          {reserved && (
            <span className="bg-cyan-500 text-white px-2 rounded mr-3">
              Reserved
            </span>
          )}
          {description}
        </div>
        {!reserved && (
          <button
            type="button"
            className="bg-[#017bfe] mt-2 text-white rounded py-2 px-4"
            onClick={() => dispatch(reserveRocket(id))}
          >
            Reserve Rocket
          </button>
        )}
        {reserved && (
          <button
            type="button"
            className="border border-slate-500 mt-2 rounded  text-zinc-500 py-2 px-4"
            onClick={() => dispatch(cancelReserve(id))}
          >
            Cancel Reservation
          </button>
        )}
      </div>
    </li>
  );
};

RocketItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default RocketItem;
