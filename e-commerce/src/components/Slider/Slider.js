// import React, { useRef, useState } from 'react';
// import './slider.css'
// import './responsive.css'
// import  img1 from '../assets/banner-1.jpg'
// import  img2 from '../assets/banner-2.jpg'
// import  img3 from '../assets/banner-3.jpg'
// import img4 from '../assets/banner-4.jpg'
// import img5 from '../assets/banner-5.jpg'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// export default function Slider() {
//   return (

//     <div className="flex side-boxes right-0 w-screen">
//     <div className='swiper-div ' >
//        <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide><img src={img1} className='slider rounded object-cover' alt="" /></SwiperSlide>
//         <SwiperSlide><img src={img2} className='slider rounded object-cover' alt="" /></SwiperSlide>
//         <SwiperSlide><img src={img3} className='slider rounded object-cover' alt="" /></SwiperSlide>
//       </Swiper>
//     </div>
//     <div className="two-box">
//       <div className="first  ">
//         <img src={img4} className='rounded object-cover' alt="" />
//       </div>
//       <div className="sec">
//       <img src={img5} className='rounded object-cover' alt="" />
//       </div>
//     </div>
//     </div>
//   )
// }

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
// import img4 from '../assets/banner-4.jpg'
// import img5 from '../assets/banner-5.jpg'

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
            <SwiperSlide><img src={img1} className='slider rounded object-cover' alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} className='slider rounded object-cover' alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} className='slider rounded object-cover' alt="" /></SwiperSlide>
          </Swiper>
        </div>
        {/* <div className="two-box ms-52">
          <div className="first  ">
            <img src={img4} className='rounded object-cover' alt="" />
          </div>
          <div className="sec">
            <img src={img5} className='rounded object-cover' alt="" />
          </div>
        </div> */}
      </div>
    </>
  );
}
