import React from 'react';
import './create.css';
import bg from '../../assets/Images/create-bg.png'
import bg2 from '../../assets/Images/createbg2.png'

const Create = () => {
  return (
    <section className="create relative mt-10">
      <div className="lg:max-w-screen-xl w-full mx-auto p-4">
        <div className="create__main grid grid-cols-2 items-center">
          <div className="content p-6">
            <h4 className="heading text-base-100 font-bold text-3xl">
              Create your NFT portfolio
            </h4>
            <p className='py-6 text-base-100 text-sm'>Get udpated with news, tips & tricks</p>
            <a href="/" className='action-btn'><span>Join Now</span></a>
          </div>
          <img src={bg2} alt="" />
        </div>
      </div>
    </section >
  );
};

export default Create;