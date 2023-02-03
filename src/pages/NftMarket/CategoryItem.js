import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import category from './data/category';
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper";

const CategoryItem = () => {
  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={20}
      className="brandSlider"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}

      modules={[Autoplay]}
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
        category.map(item => (
          <SwiperSlide>
            <div className="category-item">
              <Link to="/"><img src={item.icon} alt="" />{item.name}</Link>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default CategoryItem;