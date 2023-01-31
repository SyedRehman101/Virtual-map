import React from 'react';
import { data } from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import "swiper/css/pagination";
import 'swiper/css';
import './projects.css'


const Projects = () => {
  return (
    <section className='project relative py-20'>
      <div className="pr-shape"></div>

      <div className="max-w-screen-xl mx-auto">
        <div class="block-text text-center">
          <h6 class="sub-heading"><span>Our Speciality</span></h6>
          <h3 class="heading lg:text-4xl text-2xl text-base-100 font-bold leading-normal">OUR COLLECTION</h3>
        </div>

        <div className='mt-8'>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            isNext={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="projectSlider"
            breakpoints={{
              1100: {
                slidesPerView: 4
              },
              850: {
                slidesPerView: 3
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
              data.map(item => (
                <SwiperSlide>
                  <div className="project-box">
                    <div className="image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="content">
                      <a className='title text-xl text-base-100' href="/nft">{item.name}</a>
                    </div>
                  </div>

                  <div className="px-2 text-light text-sm font-medium mt-3 absolute bottom-2 right-0">
                    <span>{item?.date}</span>
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

export default Projects;