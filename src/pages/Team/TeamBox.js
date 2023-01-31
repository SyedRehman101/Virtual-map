import React from 'react';
import { FaFacebookF, FaTelegramPlane, FaTwitter } from "react-icons/fa";

const TeamBox = ({ photo, name, position }) => {
  return (
    <div className='team-box'>
      <div className="image">
        <a href="/team">
          <img src={photo} alt="" />
        </a>
      </div>
      <div className="content">
        <a className='name text-base-100 text-xl font-bold' href="/team">{name}</a>
        <p className="position text-base-100 mt-2 text-sm">{position}</p>
        <ul className='list-social'>
          <li><a href="/"><FaFacebookF className='text-base-100' /></a></li>
          <li><a href="/"><FaTwitter className='text-base-100' /></a></li>
          <li><a href="/"><FaTelegramPlane className='text-base-100' /></a></li>
        </ul>
      </div>
    </div>
  );
};

export default TeamBox;