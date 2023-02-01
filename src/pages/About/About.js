import React from 'react';
import './about.css';
import img1 from '../../assets/Images/about_1.png'
import img2 from '../../assets/Images/about_2.png'
import img3 from '../../assets/Images/about_3.png'
import img4 from '../../assets/Images/about_4.png'
import img5 from '../../assets/Images/about_5.png'

const About = () => {
  return (
    <section id='about' className='about lg:py-28 py-8'>
      <div className="ab-shape"></div>
      <div className='lg:max-w-screen-xl mx-auto w-full lg:px-20 px-4'>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className='about-left'>
            <div className="images">
              <img src={img2} alt="" className="img2" />
              <img src={img1} alt="" className="img1" />
              <img src={img3} alt="" className="img3" />
              <img src={img4} alt="" className="img4" />
              <img src={img5} alt="" className="img5" />
            </div>
          </div>
          <div className="about-right">
            <div className="content">
              <h4 className="sub-heading"><span>About Us</span></h4>
              <h3 className="heading lg:text-6xl text-2xl text-base-100 font-bold leading-8">Hight Quality NFT Collections</h3>
              <p className='text-base-100'>Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself</p>
              <p className='text-base-100 py-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat</p>
              <a href="/about" className='action-btn'><span>More About Us</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;