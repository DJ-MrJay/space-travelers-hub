import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

const Header = () => (
  <div className="flex justify-between items-center px-5 py-3 border-zinc-300 border-b">
    <div className="flex gap-4 items-center">
      <img src={planet} alt="planetImage" width="52px" />
      <h3 className="text-3xl">Space Travelers&apos; Hub</h3>
    </div>
    <ul className="flex gap-8">
      <li className="text-[#017bfe]">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Rockets
        </NavLink>
      </li>
      <li className="text-[#017bfe]">
        <NavLink
          to="/missionspage"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Missions
        </NavLink>
      </li>
      <li className="-mx-4">|</li>
      <li className="text-[#017bfe]">
        <NavLink
          to="/myprofilepage"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          My Profile
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
