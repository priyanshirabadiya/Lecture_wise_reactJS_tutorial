import React, { useState, useEffect } from 'react'
import './style.css';
import I1 from '../assets/shape.jpg'
import Data2 from './Data2'

export default function Popular_p() {

  const [data2, stdata] = useState(Data2);

  useEffect(() => {
    stdata(Data2)
  }, [])

  return (
    <div>
      <div className='flex justify-between mt-14 flex-wrap'>
        <div className='flex' >
          <h4 className='text-2xl font-bold'>Popular</h4>
          <div>
            <span className='text-2xl leading-8 ms-2 TC ani' >Products
              <span className='mt-3'><img src={I1} alt="" className='' /></span>
            </span>
          </div>
        </div>
        <div>
          <ul className='flex justify-between wid w-96'>
            <li><a href="" style={{ color: "#d51243", borderBottom: "2px solid #d51243" }} >All</a></li>
            <li><a href="">Popular</a></li>
            <li><a href="">On sale</a></li>
            <li><a href="">Best Rated</a></li>
          </ul>
        </div>
      </div>
      <div className='grid-rows-1' >
        <div className="relative give-h ">
          <div className='f-1 flex justify-between flex-wrap cen com-1' >
            {data2.map((cvalue, ind) => {
              return (
                <div key={ind}>
                  <div className="incre">
                    <div className='' >
                      <div className='outer'>
                        <img src={cvalue.img} className='rounded' alt="" />
                        <div className='inner'>
                          <img src={cvalue.img2} className='rounded' alt="" />
                        </div>
                      </div>
                      <h3 className='mt-5'><a href="" className='gray-t'>{cvalue.name}</a></h3>
                      <h3 className='s-line'>{cvalue.price}</h3>
                    </div>
                    <div className="hoverable">
                      <div className="tpproduct__thumb-bg">
                        <div className="tpproductactionbg">
                          <a href='#' className="add-to-cart"><i className="fa-solid fa-basket-shopping" style={{ color: "#c2c2c2" }}></i></a>
                          <a href="#"><i className="fa-solid fa-arrow-right-arrow-left" style={{ color: "#c2c2c2" }}></i></a>
                          <a href="#"><i className="fa-regular fa-eye" style={{ color: "#c2c2c2" }}></i></a>
                          <a href='#' className="wishlist"><i className="fa-regular fa-heart" style={{ color: "#c2c2c2" }}></i></a>
                        </div>
                      </div>
                      <div className='flex  ' >
                        <a href="" className='blue'></a>
                        <a href="" className='red' ></a>
                        <a href="" className='orange' ></a>
                        <a href="" className='purple' ></a>
                      </div>
                      <div className='n-div' >
                        <ul className='flex ' ><li>
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
              )
            })}
          </div>
        </div>
        <div className="relative give-h2">
          <div className='f-1  flex justify-between flex-wrap cen twond com-1' >
            {data2.map((cvalue, ind) => {
              return (
                <div key={ind}>
                  <div className="incre">
                    <div className='' >
                      <div className='outer'>
                        <img src={cvalue.img3} className='rounded' alt="" />
                        <div className='inner'>
                          <img src={cvalue.simg} className='rounded' alt="" />
                        </div>
                      </div>
                      <h3 className='mt-5'><a href="" className='gray-t'>{cvalue.name}</a></h3>
                      <h3 className='s-line'>{cvalue.price}</h3>
                    </div>
                    <div className="hoverable">
                      <div className="tpproduct__thumb-bg">
                        <div className="tpproductactionbg">
                          <a href='#' className="add-to-cart"><i className="fa-solid fa-basket-shopping" style={{ color: "#c2c2c2" }}></i></a>
                          <a href="#"><i className="fa-solid fa-arrow-right-arrow-left" style={{ color: "#c2c2c2" }}></i></a>
                          <a href="#"><i className="fa-regular fa-eye" style={{ color: "#c2c2c2" }}></i></a>
                          <a href='#' className="wishlist"><i className="fa-regular fa-heart" style={{ color: "#c2c2c2" }}></i></a>
                        </div>
                      </div>
                      <div className='flex  ' >
                        <a href="" className='blue'></a>
                        <a href="" className='red' ></a>
                        <a href="" className='orange' ></a>
                        <a href="" className='purple' ></a>
                      </div>
                      <div className='n-div' >
                        <ul className='flex ' ><li>
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
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
