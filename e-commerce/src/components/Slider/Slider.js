import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css'
import './responsive.css'
import img1 from '../assets/banner-1.jpg'
import img2 from '../assets/banner-2.jpg'
import img3 from '../assets/banner-3.jpg'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <div className="main">
        <div className="swiper-div">

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className='relative  ' ><img src={img1} className='slider rounded object-cover' alt="" />
              <div className='texts absolute fonts-1 z-10 top-24 left-14 '>
                <p className='redC' >Accessories</p>
                <h1 className='res-font' >UP to <span className='redc' > 40% off</span></h1>
              </div>

            </SwiperSlide>
            {/* <SwiperSlide><img src={img2} className='slider rounded object-cover' alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} className='slider rounded object-cover' alt="" /></SwiperSlide> */}
          </Swiper>
        </div>

      </div>

    </>
  );
}
