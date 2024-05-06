import React, { useRef, useState } from 'react'
import t1 from '../../assets/team-1.jpg'
import t2 from '../../assets/team-2.jpg'
import t3 from '../../assets/team-3.jpg'
import t4 from '../../assets/team-4.jpg'
import Pageheading from '../../Commancomponents/Pageheading/Pageheading'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './style.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Header2 from '../../Commancomponents/2_Header2/Header2'
export default function About() {
    return (
        <div>
            <Header2 />
            <div>
                <Pageheading pagename="About Us" />
            </div>
            <div className="swiper mt-52 mb-52">
                <Swiper
                    spaceBetween={100}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="flex mx-20">
                            <img src={t1} alt="" className='me-5' />
                            <img src={t2} alt="" className='me-5' />
                            <img src={t3} alt="" className='me-5' />
                            <img src={t4} alt="" className='me-5' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={t1} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}
