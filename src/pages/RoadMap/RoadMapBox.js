import React from 'react';

const RoadMapBox = ({ className, time, title, summary }) => {
  return (
    <div className={`roadmap-box ${className ? className : ''} ease-in-out duration-200`}>
      <div className="time">{time}</div>
      <div className="content">
        <h5 className='title text-base-100 text-xl'>{title}</h5>
        <p className='text text-base-100 text-sm leading-7'>{summary}</p>
      </div>
    </div>
  );
};

export default RoadMapBox;