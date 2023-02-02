import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import 'swiper/css';
import igos_projects from '../../pages/Staking/data/igos';
import { FaFacebookF, FaTelegramPlane, FaTwitter } from 'react-icons/fa';

const StakingProject = () => {
  return (
    <section className='staking-project py-20 relative'>
      <div className="lg:max-w-screen-xl w-full mx-auto">
        <div className="section_head flex justify-between items-end">
          <div className="content staking-heading">
            <span className='text-xl'>Projects</span>
            <h2 className='text-4xl font-bold text-base-100 mt-4'>Upcoming IGOs</h2>
          </div>

          <div className="action_btn">
            <button className='text-2xl fond-bold text-base-100'>View More</button>
          </div>
        </div>

        <div className="mt-8">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            isNext={true}
            className="projectSlider"
            breakpoints={{
              1100: {
                slidesPerView: 3
              },
              850: {
                slidesPerView: 2
              },
              650: {
                slidesPerView: 2
              },
              200: {
                slidesPerView: 1
              }
            }}
          >
            {
              igos_projects.map(item => (
                <SwiperSlide>
                  <div className="igs-project-box p-6 rounded-3xl bg-darkBlue">
                    <div className="card_top flex justify-between">
                      <img className='w-20 h-full rounded-lg' src={item.thumbnail} alt={item.title} />
                      <div>
                        <h2 className='text-xl font-bold text-base-100'>{item.title}</h2>
                        <p className='text-sm mt-2 text-base-300'>Registration in:</p>
                      </div>
                      <img className='w-8 h-full' src={item.icon} alt="" />
                    </div>

                    <div className='flex justify-between py-8'>
                      <button className='border-none btn btn-sm rounded-full bg-primary hover:text-base-100'>Total Rise {item.total_raise}K</button>
                      <button className='hover:text-base-100 border-none btn btn-sm rounded-full bg-primary'>Valu {item.valu}M</button>
                      <button className='hover:text-base-100 border-none btn btn-sm rounded-full bg-primary'>Min Allu ${item.min_allo}</button>
                    </div>

                    <div className='mb-8'>
                      <label className='text-md text-base-100'>{item.percent}%</label>
                      <progress className="progress h-4 progress-info w-full mt-2" value={item.percent} max="100"></progress>

                      <div className='flex justify-between mt-2'>
                        <span className='text-base-100 text-lg'>0/87,074 MECHA</span>
                        <span className='text-base-100 text-lg'>0 USD</span>
                      </div>
                    </div>

                    <div className="card_bottom flex justify-between items-center">
                      <button className='btn btn-outline btn-sm rounded-full btn-info'>Participate</button>

                      <div className='social-icon flex gap-4'>
                        <li><a href="/"><FaFacebookF className='text-base-100 text-xl' /></a></li>
                        <li><a href="/"><FaTwitter className='text-base-100 text-xl' /></a></li>
                        <li><a href="/"><FaTelegramPlane className='text-base-100 text-xl' /></a></li>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }

          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default StakingProject;