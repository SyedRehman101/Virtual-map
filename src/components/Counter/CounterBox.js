import React from 'react';

const CounterBox = ({ icon, number, text }) => {
  return (
    <div className="couter-box">
      <div className="icon">
        {icon}
      </div>
      <h4 className="numb text-4xl font-bold text-base-100">{number}K</h4>
      <p className='text-base-100 text-sm'>{text}</p>
    </div>
  );
};

export default CounterBox;