import React, { useState } from "react";
import data from "./Data2";
import { Link } from 'react-router-dom'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD, Wish } from "../../../Redux/Action/Action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Popular_p = () => {
  const dispatch = useDispatch();

  const newdata = data.filter(item => item.wear === 'kids')
  const [filterdata, setfiltereddata] = useState(newdata)

  const changefilter = (item) => {

    // console.log(item , "item");  

    if (item === 'All') {
      setfiltereddata(data.filter(item => item.wear === 'kids'));
    }
    else if (item === 'Popular') {
      setfiltereddata(data.filter(item => item.wear === 'women'))
    }
    else if (item === 'Onsale') {
      setfiltereddata(data.filter(item => item.sale === 'onsale'))
    }
    else if (item === 'rated') {
      setfiltereddata(data.filter(item => item.rate === 'best'))
    }
    else {
      setfiltereddata(newdata);
    }
  }

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
      <div className="flex justify-between flex-wrap mx-5">
        <h1 className="text-2xl font-semibold">
          Popular <span className="font-normal text-red-600">Product</span>
        </h1>
        <ul className="flex font-semibold justify-between flex-wrap max-w-[500px] w-full ">
          <li><button onClick={() => changefilter('All')} defaultChecked className="focus:text-red-600 focus:underline">All</button></li>
          <li><button onClick={() => changefilter('Popular')} className="focus:text-red-600 focus:underline" >Popular</button></li>
          <li><button onClick={() => changefilter('Onsale')} className="focus:text-red-600 focus:underline" >On Sale</button></li>
          <li><button onClick={() => changefilter('rated')} className="focus:text-red-600 focus:underline" >Best Rated</button></li>
        </ul>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-5 top-class mt-10 w-full px-4">
        {filterdata.map((product, ind, array) => {

          const { id, img, img2, name, price } = product;

          const send = (addeditem) => {
            // console.log(addeditem, "sendaddeditem");
            // trriger the function
            dispatch(ADD(addeditem))
          }

          const send1 = (wisheditem) => {
            // console.log(wisheditem, "wisheditem");
            // trriger the function
            dispatch(Wish(wisheditem));
          }

          return (
            <div className="sm:h-[25rem] md:h-[24rem] lg:h-[26rem] w-[18.5rem] main-data relative" key={ind}>
              <div className="img-data p-4 absolute bg-white rounded-lg">
                <div className="hover:rounded-lg ">
                  <div>
                    <Link to={`/product/${id}`} >
                      <img src={img} alt="Image1" className="rounded-lg" />
                      <div className="sec-img p-4">
                        <img
                          src={img2}
                          alt="Image1"
                          className="rounded-lg"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="text-left mt-4">
                    <h1 className="text-gray-500">{name}</h1>
                    <p className="font-semibold">${price}.00</p>
                  </div>
                  <div className="mt-4 opacity-0 dots">
                    <div className="tpproduct__thumb-bg">
                      <div className="tpproductactionbg">
                        <Link to="" onClick={() => send(product)} className="add-to-cart"><i className="fa-solid fa-basket-shopping" style={{ color: "#c2c2c2" }}></i></Link>
                        <a href=""><i className="fa-solid fa-arrow-right-arrow-left" style={{ color: "#c2c2c2" }}></i></a>
                        <a href=""><i className="fa-regular fa-eye" style={{ color: "#c2c2c2" }}></i></a>
                        <Link to="" onClick={() => send1(product)} className="wishlist"><i className="fa-regular fa-heart" style={{ color: "#c2c2c2" }}></i></Link>
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
                            <a href="#"><i className="far fa-star"></i></a>
                          </li>
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
