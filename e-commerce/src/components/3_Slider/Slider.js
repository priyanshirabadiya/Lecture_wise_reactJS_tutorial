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
            <SwiperSlide className='relative'><img src={img1} className='slider rounded object-cover' alt="" />
              <div className='texts absolute fonts-1 z-10 top-24 left-14 '>
                <p className='redC accesories ' >Accessories</p>
                <h1 className='res-font mt-2' >UP to <span className='redC'>40% off</span></h1>
                <h1 className='res-font' >latest Creation</h1>
                <button className='shop  sm:mt-2 md:mt-2 lg:mt-8 rounded' ><a href="">Shop Now <i className="fa-solid fa-arrow-right ms-3 " style={{ color: "#000000" }}></i></a></button>
              </div>

            </SwiperSlide>
            <SwiperSlide className='relative' ><img src={img2} className='slider rounded object-cover' alt="" />
              <div className='texts absolute fonts-1 z-10 top-24 left-14 '>
                <p className='redC accesories ' >Accessories</p>
                <h1 className='res-font mt-2' >UP to <span className='redC'>35% off</span></h1>
                <h1 className='res-font' >latest Creation</h1>
                <button className='shop  sm:mt-2 md:mt-2 lg:mt-8 rounded' ><a href="">Shop Now <i className="fa-solid fa-arrow-right ms-3 " style={{ color: "#000000" }}></i></a></button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='relative' ><img src={img3} className='slider rounded object-cover' alt="" />
              <div className='texts absolute fonts-1 z-10 top-24 left-14 '>
                <p className='redC accesories ' >Accessories</p>
                <h1 className='res-font mt-2' >UP to <span className='redC'>45% off</span></h1>
                <h1 className='res-font' >latest Creation</h1>
                <button className='shop  sm:mt-2 md:mt-2 lg:mt-8 rounded' ><a href="">Shop Now <i className="fa-solid fa-arrow-right ms-3 " style={{ color: "#000000" }}></i></a></button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

      </div>

    </>
  );
}
