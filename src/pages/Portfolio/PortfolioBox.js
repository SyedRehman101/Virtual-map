import React from 'react';


const PortfolioBox = ({ step, icon, title, summary }) => {
  return (
    <div class="portfolio-box">
      <div class="step">Step {step}</div>
      <div class="icon mr-8">
        <img src={icon} alt="Cyfonii" />
      </div>
      <div class="content">
        <h5 class="title text-base-100 text-xl mb-2">{title}</h5>
        <p className='text-base-100 text-sm'>{summary}</p>
      </div>
    </div>
  );
};

export default PortfolioBox;