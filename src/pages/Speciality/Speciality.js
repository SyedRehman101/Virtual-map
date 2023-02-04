import React from 'react';
import ReactPlayer from 'react-player';
import vidoeBg from '../../assets/Images/video_background.png';
import 'video-react/dist/video-react.css';

const Speciality = () => {
  return (
    <section className='speciality'>
      <div className="sp-shape"></div>
      <div className='lg:max-w-screen-xl mx-auto w-full p-4 z-50 relative'>
        <div class="block-text text-center">
          <h6 class="sub-heading"><span>Our Speciality</span></h6>
          <h3 class="heading lg:text-4xl text-2xl text-base-100 font-bold leading-normal">Complete Solutions for your NFT</h3>
          <p class="text-base-100 pt-4">Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself</p>
        </div>
        <div className="mt-10 ">
          <div className='p-8 flex justify-center items-center relative'>
            <img src={vidoeBg} alt="" />
            <div className='absolute top-8 left-22'>
              <ReactPlayer
                playing={true}
                url={`https://player.vimeo.com/video/795913269?h=6c95ed637f&badge=0&autopause=0&player_id=0&app_id=58479`}
                width="920px" height="640px"
                controls={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Speciality;