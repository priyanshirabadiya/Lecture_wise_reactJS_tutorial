import React from "react";
import data from "../../../0_Home/5_Poular_products2/Data2";
import "./style.css";
import { ADD, Wish } from '../../../../Redux/Action/Action'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Popular_p = () => {
  const dispatch = useDispatch();

  const shopfilter = data.filter(item => item.dataf === 'toy')

  return (
    <div className="my-10 mx-1">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 top-class mt-10 w-full px-4">
        {shopfilter.map((value, ind, array) => {

          const { img2, img, name, price } = value;
          // const products = { value };

          const send = (addeditem) => {
            console.log(addeditem, "sendaddeditem");
            // trriger the function
            dispatch(ADD(addeditem))
          }

          const send1 = (wisheditem) => {
            console.log(wisheditem, "wisheditem");
            // trriger the function
            dispatch(Wish(wisheditem))
          }
          return (
            <div className="sm:h-[25rem] md:h-[24rem] lg:h-[26rem] w-[22.5rem] mb-20 main-data relative" key={ind}>
              <div className="img-data p-4 absolute bg-white rounded-lg">
                <div className="hover:rounded-lg">
                  <img src={img} alt="Image1" className="rounded-lg" />
                  <div className="sec-img p-4">
                    <img
                      src={img2}
                      alt="Image1"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="text-left mt-4">
                    <h1 className="text-gray-500">{name}</h1>
                    <p className="font-semibold">${price}.00</p>
                  </div>
                  <div className="opacity-0 dots">
                    <div className="tpproduct__thumb-bg-2">
                      <div className="tpproductactionbg ">
                        <Link to="" onClick={() => send(value)} className="add-to-cart">
                          <i className="fa-solid fa-basket-shopping" style={{ color: "#c2c2c2" }}></i>
                        </Link>
                        <a href="">
                          <i className="fa-solid fa-arrow-right-arrow-left" style={{ color: "#c2c2c2" }}></i>
                        </a>
                        <a href=""><i className="fa-regular fa-eye" style={{ color: "#c2c2c2" }}></i></a>
                        <Link to="" onClick={() => send1(value)} className="wishlist"><i className="fa-regular fa-heart" style={{ color: "#c2c2c2" }}></i></Link>
                      </div>
                    </div>
                    <div className="flex justify-between">
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
