import React from "react";
import data from "./Data2";
import { Link } from 'react-router-dom'
import "./style.css";
const Popular_p = () => {
  return (
    <div className="my-10 mx-1">
      <div className="flex justify-between flex-wrap mx-5 ">
        <h1 className="text-2xl font-semibold">
          Popular <span className="font-normal text-red-600">Product</span>
        </h1>
        <ul className="flex font-semibold  justify-between flex-wrap max-w-[500px] w-full ">
          <li><a href="#" className="text-red-600 underline">All</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">On Sale</a></li>
          <li><a href="#">Best Rated</a></li>
        </ul>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-5 top-class mt-10 w-full px-4">
        {data.map((value, ind, array) => {
          return (
            <div className="sm:h-[25rem] md:h-[24rem] lg:h-[26rem] w-[18.5rem] main-data relative" key={ind}>
              <div className="img-data p-4 absolute bg-white rounded-lg">

                <div className="hover:rounded-lg ">
                  <div>
                    <Link to={`/product/${value.id}`} >
                      <img src={value.img} alt="Image1" className="rounded-lg" />
                      <div className="sec-img p-4">
                        <img
                          src={value.img2}
                          alt="Image1"
                          className="rounded-lg"
                        />
                      </div>
                    </Link>
                  </div>

                  <div className="text-left mt-4">
                    <h1 className="text-gray-500">{value.name}</h1>
                    <p className="font-semibold">{value.price}</p>
                  </div>
                  <div className="mt-4 opacity-0 dots">
                    <div className="tpproduct__thumb-bg">
                      <div className="tpproductactionbg">
                        <a href='#' className="add-to-cart"><i className="fa-solid fa-basket-shopping" style={{ color: "#c2c2c2" }}></i></a>
                        <a href="#"><i className="fa-solid fa-arrow-right-arrow-left" style={{ color: "#c2c2c2" }}></i></a>
                        <a href="#"><i className="fa-regular fa-eye" style={{ color: "#c2c2c2" }}></i></a>
                        <a href='#' className="wishlist"><i className="fa-regular fa-heart" style={{ color: "#c2c2c2" }}></i></a>
                      </div>
                    </div>
                    <div className="flex justify-between ">
                      <div className="flex">
                        <a href="" className="blue"></a>
                        <a href="" className="red"></a>
                        <a href="" className="orange"></a>
                        <a href="" className="purple"></a>
                      </div>
                      <div className='n-div' >
                        <ul className='flex -mt-1'>
                          <li>
                            <a href="#"><i className="fas fa-star"></i></a>
                            <a href="#"><i className="fas fa-star"></i></a>
                            <a href="#"><i className="fas fa-star"></i></a>
                            <a href="#"><i className="fas fa-star"></i></a>
                            <a href="#"><i className="far fa-star"></i></a></li>
                          <li><span>(81)</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular_p;
