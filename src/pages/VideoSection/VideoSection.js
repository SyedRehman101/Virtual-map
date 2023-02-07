import React from 'react';
import './video_section.css';
import vidoeBg from '../../assets/Images/video_background.png';
import thumb1 from '../../assets/Images/about_1.png';
import thumb2 from '../../assets/Images/about_2.png';
import thumb3 from '../../assets/Images/about_3.png';
import thumb4 from '../../assets/Images/about_4.png';
import { Link } from 'react-router-dom';

const VideoSection = () => {
  return (
    <section className='video'>
      <div className="video-shape"></div>
      <div className='lg:max-w-screen-xl mx-auto w-full p-4 z-50 relative'>
        <div class="block-text text-center">
          <h6 class="sub-heading"><span>Our Speciality</span></h6>
          <h3 class="heading lg:text-4xl text-2xl text-base-100 font-bold leading-normal">Our Metaverse Creators in Action</h3>
          <p class="text-base-100 pt-4">Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself</p>
        </div>
        <div className="mt-10">
          <div className='video-main p-8 flex justify-center items-center relative'>
            <img className='lg:h-[600px] lg:w-[1010px] w-full vidoe-bg' src={vidoeBg} alt="" />
            <div className='video-container'>
              <iframe autoplay style={{ clipPath: 'polygon(3% 0px, 97% 0px, 100% 5%, 100% 95%, 97% 100%, 3% 100%, 0px 95%, 0px 5%)' }} width="990" height="560" src="https://www.youtube-nocookie.com/embed/KLOcj5qvOio?controls=0&amp;start=10;&amp;loop=1;&amp;autoplay=1;&amp;mute=1;&amp;title=0" title="0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className='vidoe-thumb absolute'>
              <ul>
                <li><Link to="/"><img src={thumb1} alt="" srcset="" /></Link></li>
                <li><Link to="/"><img src={thumb2} alt="" srcset="" /></Link></li>
                <li><Link to="/"><img src={thumb3} alt="" srcset="" /></Link></li>
                <li><Link to="/"><img src={thumb4} alt="" srcset="" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section >
  );

};


export default VideoSection;