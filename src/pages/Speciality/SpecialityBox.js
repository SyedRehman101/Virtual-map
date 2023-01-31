import React from 'react';
import './speciality.css';

const SpecialityBox = ({ title, img, count, summry }) => {
  return (
    <div class="speciality-box">
      <div class="icon">
        <img src={img} alt="Cyfonii" />
      </div>
      <h5 class="text-base-100 text-xl font-bol">{title}</h5>
      <p className='text-base-100 py-4 text-sm'>{summry}</p>
      <h3 class="number text-4xl font-bold">{count}</h3>
    </div>
  );
};

export default SpecialityBox;