import React, { useRef, useState } from 'react'
import t1 from '../../assets/team-1.jpg'
import t2 from '../../assets/team-2.jpg'
import t3 from '../../assets/team-3.jpg'
import t4 from '../../assets/team-4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './style.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Header2 from '../../2_Header2/Header2'
export default function About() {
    return (
        <div>
            <Header2 />
            <div>
                <div className="bg-img pb-52 lg:mt-0 xl:-mt-8 w-full bg-no-repeat relative">
                    <div className='flex flex-wrap w-40 justify-between top-10 absolute left-10' >
                        <a href="" className='home' >Home</a>
                        <div className='mt-3 ms-2' >
                            <div className='w-[3vw] border-b-2 border-[#e2e2e2] -me-2' ></div>
                        </div>
                        <p className='text-gray-400' >About Us</p>
                    </div>
                    <h1 className='top-20 left-10 absolute text-[42px] font-bold'>About Us</h1>
                </div>
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
