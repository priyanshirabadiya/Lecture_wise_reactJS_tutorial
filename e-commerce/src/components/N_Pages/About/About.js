// import React, { useRef, useState } from 'react'
// import t1 from '../../assets/team-1.jpg'
// import t2 from '../../assets/team-2.jpg'
// import t3 from '../../assets/team-3.jpg'
// import t4 from '../../assets/team-4.jpg'
// import Pageheading from '../../Commancomponents/Pageheading/Pageheading'

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/pagination';

// import './style.css'

// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import Header2 from '../../Commancomponents/2_Header2/Header2'
// export default function About() {
//     return (
//         <div>
//             <Header2 />
//             <div>
//                 <Pageheading pagename="About Us" />
//             </div>
//             <div className="swiper mt-52 mb-52">
//                 <Swiper
//                     spaceBetween={100}
//                     centeredSlides={true}
//                     autoplay={{
//                         delay: 2500,
//                         disableOnInteraction: false,
//                     }}
//                     pagination={{
//                         clickable: true,
//                     }}
//                     navigation={true}
//                     modules={[Autoplay]}
//                     className="mySwiper"
//                 >
//                     <SwiperSlide>
//                         <div className="flex mx-20">
//                             <img src={t1} alt="" className='me-5' />
//                             <img src={t2} alt="" className='me-5' />
//                             <img src={t3} alt="" className='me-5' />
//                             <img src={t4} alt="" className='me-5' />
//                         </div>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <img src={t1} alt="" />
//                     </SwiperSlide>
//                 </Swiper>
//             </div>

//         </div>
//     )
// }

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import t1 from '../../assets/team-1.jpg'
import t2 from '../../assets/team-2.jpg'
import t3 from '../../assets/team-3.jpg'
import t4 from '../../assets/team-4.jpg'
import Header2 from '../../Commancomponents/2_Header2/Header2';
import Pageheading from '../../Commancomponents/Pageheading/Pageheading';
function Lastpart() {
    return (
        <div>
            <div>
                <Header2 />
                <Pageheading pagename="About Us" />
            </div>
            <div className='text-center mt-10'>
                <h1 className='text-4xl font-bold'>Meet with Team</h1>
            </div>

            <div className=' pt-10 mx-10 '>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //   clickable: true,
                    // }}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwipers"
                >
                    <SwiperSlide>
                        <div>
                            <img src={t1} alt="" className='rounded-md relative' />
                            <div className='bottom-0 absolute text-white font-bold p-10  ' >
                                <p className=''>Founder</p>
                                <p className='text-[1.5rem]'>Shubham P. Rabadiya</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <img src={t2} alt="" className='rounded-md' />
                            <div className='bottom-0 absolute text-white font-bold p-10 ' >
                                <p className=''>CEO</p>
                                <p className='text-[1.5rem]'>Jaimin V. Dholakiya</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <img src={t3} alt="" className='rounded-md' />
                            <div className='bottom-0 absolute text-white font-bold p-10 ' >
                                <p className=''>Designer</p>
                                <p className='text-[1.5rem]'>Midram H. Halim</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <img src={t4} alt="" className='rounded-md' />
                            <div className='bottom-0 absolute text-white font-bold p-10 ' >
                                <p className=''>developer</p>
                                <p className='text-[1.5rem]'>Rosalia D. Willson</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <img src={t1} alt="" className='rounded-md' />
                            <div className='bottom-0 absolute text-white font-bold p-10 ' >
                                <p className=''>Founder</p>
                                <p className='text-[1.5rem]'>Shubham P. Rabadiya</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <img src={t2} alt="" className='rounded-md' />
                            <div className='bottom-0 absolute text-white font-bold p-10 ' >
                                <p className=''>CEO</p>
                                <p className='text-[1.5rem]'>Jaimin V. Dholakiya</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='mx-10 mt-10'>
                <h1 className='text-4xl font-bold'>About our Story</h1>
            </div>

            <div className="mx-10 text-center mt-10 text-gray-400">
            Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services without costly customization or add ons. Get orders to your customers in lots of ways by offering shipping, pickup, delivery, and even QR code ordering.Expand your reach and sell more using seamless integrations with Google, Instagram, Facebook, and more. Built- in SEO tools make it easy for shoppers to find your business on search engines. Get access to the entire suite of integrated Square solutions to help you run your business. Integration between Square Online and all Square point of sale systems makes inventory management easy. Subscribe to Square Marketing and easily send email promotions to your customers using the contact information
            </div>
        </div>
    )
}
export default Lastpart;


