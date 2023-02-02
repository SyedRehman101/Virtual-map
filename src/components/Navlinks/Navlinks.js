import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlinks = () => {
  return (
    <ul className='w-full flex lg:flex-row flex-col lg:items-center gap-6 text-pure text-semibold'>
      <li>
        <NavLink to="/" className="uppercase">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" className="uppercase">About Us</NavLink>
      </li>
      <li><NavLink to="/nftmarket" className="uppercase">NFT Market</NavLink></li>
      <li>
        <NavLink to="/Portfolio" className="uppercase">Land Map</NavLink>
      </li>
      <li>
        <NavLink to="/staking" className="uppercase">Staking</NavLink>
      </li>
      <li>
        <NavLink to="/RoadMap" className="uppercase">Community</NavLink>
      </li>
      <li>
        <NavLink to="/TeamMember" className="uppercase">Doa</NavLink>
      </li>
      <li>
        <NavLink to="/Faqs" className="uppercase">Faqs</NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;