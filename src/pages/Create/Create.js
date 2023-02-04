import React from 'react';
import './create.css';
import footer_main from '../../assets/Images/footer_main.png'

const Create = () => {
  return (
    <section className="create relative mt-10">
      <div className="lg:max-w-screen-xl w-full mx-auto p-4">
        <div className="create__main grid grid-cols-2 items-center">
          <div className="content p-6">
            <h4 className="heading text-base-100 font-bold text-3xl">
              Join Our Community
            </h4>
            <p className='py-6 text-base-100 text-xl'>Start Exploring the Metaverse Today</p>
            <button className='btn btn-secondary btn-lg hover:btn-warning'><span>Join Now</span></button>
          </div>
          <img className='w-1/3' src={footer_main} alt="" />
        </div>
      </div>
    </section >
  );
};

export default Create;