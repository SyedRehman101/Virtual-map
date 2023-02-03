import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { BsFillCaretDownFill, BsGithub, BsGoogle, BsLinkedin, BsPinterest, BsSkype, BsTwitch, BsTwitter } from "react-icons/bs";

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
        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="cursor-pointer uppercase">Community <BsFillCaretDownFill className='inline' /></label>
          <div tabIndex={0} className="dropdown-content menu p-6 mt-7 shadow-lg bg-primaryDark rounded-box  w-[150px]">
            <div className='flex justify-between mb-6'>
              <button><FaYoutube className='text-3xl' /></button>
              <button><BsTwitter className='text-3xl' /></button>
            </div>
            <div className='flex justify-between mb-6'>
              <button><BsGithub className='text-3xl' /></button>
              <button><BsGoogle className='text-3xl' /></button>
            </div>
            <div className='flex justify-between mb-6'>
              <button><BsLinkedin className='text-3xl' /></button>
              <button><BsPinterest className='text-3xl' /></button>
            </div>
            <div className='flex justify-between mb-2'>
              <button><BsSkype className='text-3xl' /></button>
              <button><BsTwitch className='text-3xl' /></button>
            </div>
          </div>
        </div>
      </li>
      <li>
        <NavLink to="/dao" className="uppercase">Doa</NavLink>
      </li>
      <li>
        <NavLink to="/Faqs" className="uppercase">Faqs</NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;