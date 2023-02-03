import React from 'react';
import { BsInbox } from "react-icons/bs";
import stakingBg from '../../assets/Nft-Market_img/hero_bg.jpeg';
import thumb from '../../assets/Images/cta_thumb.png';

const Participant = () => {
  return (
    <section className='participant'>
      <div className='lg:max-w-screen-xl w-full mx-auto'>
        <div className="content staking-heading">
          <span className="text-xl">How it Works</span>
          <h2 className="text-5xl font-bold text-base-100 mt-4">
            How To Participate
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-8">
          <div className="single-work">
            <BsInbox className='text-6xl text-blue-600' />
            <h2 className='text-pure text-3xl font-bold py-6'>Submit KYC</h2>
            <p className='text-sky-200 text-lg'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores non provident.</p>
          </div>

          <div className="single-work">
            <BsInbox className='text-6xl text-blue-600' />
            <h2 className='text-pure text-3xl font-bold py-6'>Varify Wallet</h2>
            <p className='text-sky-200 text-lg'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores non provident.</p>
          </div>

          <div className="single-work">
            <BsInbox className='text-6xl text-blue-600' />
            <h2 className='text-pure text-3xl font-bold py-6'>Start Staking</h2>
            <p className='text-sky-200 text-lg'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores non provident.</p>
          </div>
        </div>



        <div className='mt-16'>
          <div className="card" style={{ backgroundImage: `linear-gradient(0deg, #090919, rgba(9, 10, 26, 0.8)), url(${stakingBg})` }}>
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div className='text-center'>
                <img src={thumb} alt="" />
              </div>

              <div className='flex items-center'>
                <div className='text-left'>
                  <h2 className='text-pure text-4xl font-bold'>Apply For IGO</h2>
                  <p className='py-6 text-pure text-lg'>Get access to huge set of tools to seamlessly handle your game's integration with blockchain.</p>
                  <button className='text-pure rounded-full apply-btn hover:text-pure'>Apply Now</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Participant;