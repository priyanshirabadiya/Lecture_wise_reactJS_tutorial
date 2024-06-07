import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { IoListOutline } from "react-icons/io5";
import { LiaTableSolid } from "react-icons/lia";
import './style.css'
import Header2 from '../../Commancomponents/2_Header2/Header2'
import Pageheading from '../../Commancomponents/Pageheading/Pageheading';
import data from "../../0_Home/5_Poular_products2/Data2";
import { ADD, Wish } from "../../../Redux/Action/Action";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Shop2() {
  const dispatch = useDispatch();

  const [filteredData, setfilterdata] = useState(data)
  // 2 step = set value true or false
  const [filter, setfilter] = useState({
    women: false,
    men: false,
    kids: false
  })

  // 3 step = filterdata
  function filterdata() {
    let filtersdata = data;

    let activefilter = Object.keys(filter).filter(key => filter[key])
      // console.log(filter[key]);  //filter only those value whose value is true
      
    // console.log(filter);
    // Object kids: false
    // men: false
    // women: false

    if (activefilter.length > 0) {
      filtersdata = filtersdata.filter(item => activefilter.includes(item.wear));

      // First Product({ name: 'Product1', wear: 'women' }):

      // item.wear is 'women'.
      // Check activefilter.includes('women'): true.
      // Include this product in the filtersdata array.

    }
    setfilterdata(filtersdata);
  }

  useEffect(() => {
    filterdata();
  }, [filter]);

  // 1 step
  const handleonchage = (e) => {
    const { name, checked } = e.target;
    setfilter((prevfilter) => ({
      ...prevfilter,
      [name]: checked
    }));
  };

  return (
    <>
      <div>
        <Header2 />
      </div>
      <Pageheading pagename="Shop" />
      <div className="f-class flex flex-wrap lg:flex-nowrap">
        <div className="sf-class">
          <div className="mx-7 mt-10 flex flex-wrap justify-between">
            <div className='flex'>
              <p className='font-bold text-lg'>10</p>
              <span className='font-bold text-gray-500 m-[0.2rem] mt-[0.5px]'>Item On List</span>
            </div>
            <div className="select-div flex flex-wrap">
              <div className="flex md:flex-nowrap">
                <select name="" id="" className='chosen-single form-select me-5 h-12'>
                  <option value="">Sort by(default)</option>
                  <option value="">Newest</option>
                  <option value="">Oldest</option>
                </select>
                <select name="" id="" className='chosen-single form-select h-12'>
                  <option value="">All</option>
                  <option value="">10 per Page</option>
                  <option value="">20 per Page</option>
                  <option value="">30 per Page</option>
                </select>
              </div>
              <div className='icon-div'><a href=""><IoListOutline className='h-6 mt-[12px] w-10 text-[#d12321]' /></a></div>
              <div className='icon-div'><a href=""><LiaTableSolid className='h-6 mt-[12px] -ms-2 w-10 text-[#3f3e3e]' /></a></div>
            </div>
          </div>

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
              <ul className="flex font-semibold justify-between flex-wrap max-w-[500px] w-full">
                <li><a href="#" className="text-red-600 underline">All</a></li>
                <li><a href="#">Popular</a></li>
                <li><a href="#">On Sale</a></li>
                <li><a href="#">Best Rated</a></li>
              </ul>
            </div>
            <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 top-class mt-10 w-full px-4">
              {filteredData.map((value, ind) => {
                const { name, price, img, img2 } = value;
                const products = { value };

                const send = (products) => {
                  dispatch(ADD(products));
                }

                const send1 = (products) => {
                  dispatch(Wish(products));
                }

                return (
                  <div className="sm:h-[25rem] md:h-[24rem] lg:h-[26rem] w-[18.5rem] main-data relative" key={ind}>
                    <div className="img-data p-4 absolute bg-white rounded-lg">
                      <div className="hover:rounded-lg">
                        <img src={img} alt="Image1" className="rounded-lg" />
                        <div className="sec-img p-4">
                          <img src={img2} alt="Image1" className="rounded-lg" />
                        </div>
                        <div className="text-left mt-4">
                          <h1 className="text-gray-500">{name}</h1>
                          <p className="font-semibold">${price}.00</p>
                        </div>
                        <div className="mt-4 opacity-0 dots">
                          <div className="tpproduct__thumb-bg">
                            <div className="tpproductactionbg">
                              <Link to="" onClick={() => send(products)} className="add-to-cart"><i className="fa-solid fa-basket-shopping" style={{ color: "#c2c2c2" }}></i></Link>
                              <a href="#"><i className="fa-solid fa-arrow-right-arrow-left" style={{ color: "#c2c2c2" }}></i></a>
                              <a href="#"><i className="fa-regular fa-eye" style={{ color: "#c2c2c2" }}></i></a>
                              <Link to="" onClick={() => send1(products)} className="wishlist"><i className="fa-regular fa-heart" style={{ color: "#c2c2c2" }}></i></Link>
                            </div>
                          </div>
                          <div className="flex justify-between">
                            <div className="flex">
                              <a href="" className="blue"></a>
                              <a href="" className="red"></a>
                              <a href="" className="orange"></a>
                              <a href="" className="purple"></a>
                            </div>
                            <div className='n-div'>
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
        </div>

        {/* sidebar categories */}
        <div className='w-[25vw] mt-10'>
          <h3 className='font-bold mt-2 mx-10'>Category</h3>
          <hr className='mt-3 mb-3 mx-10' />
          <div className='ms-10'>
            <div className='mt-1'>
              <input type='checkbox' name='kids' id="f-select" onChange={handleonchage} /><label className='text-[0.9rem] text-[gray] ms-4 cursor-pointer' htmlFor='f-select'>Kids</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='men' id="f-select2" onChange={handleonchage} /><label className='text-[0.9rem] text-[gray] ms-4 cursor-pointer' htmlFor='f-select2'>Men</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='women' id="f-select3" onChange={handleonchage} /><label className='text-[0.9rem] text-[gray] ms-4 cursor-pointer' htmlFor='f-select3'>Women</label>
            </div>
            <h3 className='font-bold mt-3 ms-5'>Filter</h3>
            <hr className='mt-3 mb-3 mx-5' />
            <div>
              <input type="range" className='w-[16vw]' id="volume" name="volume" min="0" max="100" /><br />
              <label htmlFor="volume">100$</label>
            </div>
            <h3 className='font-bold mt-3 ms-5'>Color</h3>
            <hr className='mt-3 mb-3 mx-5' />
            <div className='mt-1'>
              <input type='checkbox' name='black' id="f-select4" /><label className='text-[0.9rem] text-[gray] ms-4 cursor-pointer' htmlFor='f-select4'>Black</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='blue' id="f-select5" /><label className='text-[0.9rem] text-[gray] ms-4 cursor-pointer' htmlFor='f-select5'>Blue</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='gray' id="f-select9" /><label className='text-[0.9rem] text-[gray] ms-4 cursor-pointer' htmlFor='f-select9'>Gray</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='green' id="f-select6" /><label className='text-[0.9rem] text-[gray] ms-4 cursor-pointer' htmlFor='f-select6'>Green</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='red' id="f-select7" /><label className='text-[0.9rem] text-[gray] ms-4 cursor-pointer' htmlFor='f-select7'>Red</label>
            </div>

            <h3 className='font-bold mt-3 ms-5'>Brand</h3>
            <hr className='mt-3 mb-3 mx-5' />
            <div className='mt-1'>
              <input type='checkbox' name='adidas' id="f-select11" /><label className='text-[0.9rem] text-[gray] ms-4 cursor-pointer' htmlFor='f-select11'>Adidas</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='balenciaga' id="f-select12" /><label className='text-[0.9rem] text-[gray] ms-4 cursor-pointer' htmlFor='f-select12'>Balenciaga</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='balmain' id="f-select13" /><label className='text-[0.9rem] text-[gray] ms-4 cursor-pointer' htmlFor='f-select13'>Balmain</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='burberry' id="f-select14" /><label className='text-[0.9rem] text-[gray] ms-4 cursor-pointer' htmlFor='f-select14'>Burberry</label>
            </div>
            <div className='mt-1'>
              <input type='checkbox' name='chloe' id="f-select15" /><label className='text-[0.9rem] text-[gray] ms-4 cursor-pointer' htmlFor='f-select15'>Chloe</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
