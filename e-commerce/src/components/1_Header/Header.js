import React, { useState, useEffect } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import logo from '../assets/logo.png';
import flag from '../assets/flag.png';
import './header.css';
import './responsive.css';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import Thirddropdown from './3_Dropdown/Dropdown';
import { PiShoppingCartThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { BsSuitHeart } from "react-icons/bs";
import Cate from '../Commancomponents/2_Header2/2_Newcatagories/Cate';

export default function Header() {
  const [isOpen, setIsopen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const data = useSelector((state) => state.cartreducer.carts)
  const data2 = useSelector((state) => state.wishlistreducer1.wish)
  // console.log(data, "data");

  const [isSticky, setIsSticky] = useState(false);
  // const [toggle, setoggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const ToggleSidebarfnew = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }

  return (
    <>
      {isSticky ? (
        <div className='mt-3 w-full nav-1 sticky'>
          <div className='flex w-full mx-10 justify-between'>
            <div className='flex'>
              <div>
                <div className=" mt-3">
                  <nav className="navbar navbar-expand-lg navbar-light bg-white ">
                    <div className=" p-2">
                      <div className="btn-primary-fnew side-icon -mt-1 " onClick={ToggleSidebarfnew} >
                        <i className="fa-solid fa-bars"></i>
                      </div>
                    </div>
                  </nav>
                  <div className={`sidebarfnew ${isOpen == true ? 'active' : ''}`}>
                    <div className="sd-header h-[3rem] font-bold bg-[#D51243] text-white  ">
                      <h4 className="mb-0 text-center w-full ">Close</h4>
                      <div className="btn-primary-fnew" onClick={ToggleSidebarfnew}><i className="fa fa-times"></i></div>
                    </div>
                    <div className="sd-body">
                      <div className='' >
                        <p className='w-full text-center text-[0.9rem] mt-5 font-bold ' >What Are You Looking For?</p>
                      </div>

                      <div className='-z-[90] ' >
                        <Accordion defaultExpanded className='bg-black mt-10 ' >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                          >
                            <Typography>Home</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography>
                              <ul>
                                <li className='font-bold border-b-[0.002rem] pb-3 ' > <Link to="/" > Wooden Home </Link></li>
                              </ul>
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        <div className='-z-10' >
                          <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel2-content"
                              id="panel2-header"
                            >
                              <Typography>Shop</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                <ul>
                                  <li className='font-bold border-b-[0.002rem] pb-3 ' > <Link to="/shop">Shop</Link></li>
                                  <li className='font-bold border-b-[0.002rem] pb-3 ' ><Link to="/shop2">Shop 2</Link></li>
                                  <li className='font-bold border-b-[0.002rem] pb-3 ' ><a href="#">Shop Details</a></li>
                                  <li className='font-bold border-b-[0.002rem] pb-3 ' ><a href="#">Shop Details 2</a></li>
                                  <li className='font-bold border-b-[0.002rem] pb-3 ' ><Link to="/shop_details">Shop Location</Link></li>
                                  <li className='font-bold border-b-[0.002rem] pb-3 ' ><Link to="/cart">Cart</Link></li>
                                  <li className='font-bold border-b-[0.002rem] pb-3 ' ><Link to="/Sign_inandLog_in">Sign In</Link></li>
                                  <li className='font-bold border-b-[0.002rem] pb-3 ' ><Link to="/checkout">Checkout</Link></li>
                                  <li className='font-bold border-b-[0.002rem] pb-3 ' ><Link to="/wishlist">Wishlist</Link></li>
                                  <li className='font-bold border-b-[0.002rem] pb-3 ' ><Link to="/ProductTrack">Product Track</Link></li>
                                </ul>
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </div>
                        <div>
                          <Accordion  >
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel2-content"
                              id="panel2-header"
                            >
                              <Typography>Pages</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                <ul className='font-bold' >
                                  <li className='font-bold border-b-[0.002rem] pb-3 ' > <Link to="/shop"  >Shop</Link></li>
                                  <li className='font-bold  border-b-[0.002rem] pb-3 ' ><Link to="/shop2">Shop 2</Link></li>
                                  <li className='font-bold  border-b-[0.002rem] pb-3 ' ><a href="#">Shop Details</a></li>
                                  <li className='font-bold  border-b-[0.002rem] pb-3 '><a href="#">Shop Details 2</a></li>
                                  <li className='font-bold  border-b-[0.002rem] pb-3 '><Link to="/shop_details">Shop Location</Link></li>
                                  <li className='font-bold  border-b-[0.002rem] pb-3 '><Link to="/cart">Cart</Link></li>
                                  <li className='font-bold  border-b-[0.002rem] pb-3 '><Link to="/Sign_inandLog_in">Sign In</Link></li>
                                  <li className='font-bold  border-b-[0.002rem] pb-3 '><Link to="/checkout">Checkout</Link></li>
                                  <li className='font-bold  border-b-[0.002rem] pb-3 '><Link to="/wishlist">Wishlist</Link></li>
                                  <li className='font-bold  border-b-[0.002rem] pb-3 '><Link to="/ProductTrack">Product Track</Link></li>
                                </ul>
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </div>
                        <div className='m-4 mt-5 ' >
                          <Link>Contact</Link>
                        </div>
                        <div className='m-4 mt-5 ' >
                          <div className='flex' >
                            <div className='m-1 ms-0' >
                              <svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="User"><g><path d="M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z"></path><path d="M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z"></path></g></g></svg>
                            </div>
                            <Link to="/Sign_inandLog_in" >Login / Register</Link>
                          </div>
                        </div>
                        <div className='m-4 mt-5 flex'>
                          <div className='m-1 me-2 ms-0' >
                            <svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 16 16" height="5px" width="5px" xmlns="http://www.w3.org/2000/svg" style={{ color: "white", height: "16px", width: "15px" }}><path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"></path></svg>
                          </div>
                          <Link to="/wishlist" >Wishlist</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>




              </div>
              <div className='h-10 mt-2 me-20 with-dropdown '>
                <img src={logo} alt="" />
              </div>
              <div className=''><Thirddropdown /></div>
            </div>
            <div>
              <div className='h-10 mt-2 center-logo'>
                <img src={logo} alt="" />
              </div>
            </div>
            <div className='flex '>
              <div className='mt-3 ms-3'>
                <Link to="/cart">
                  <PiShoppingCartThin style={{ height: "23px", width: "23px" }} />
                </Link>
                <span className="tp-product-count-2">{data.length}</span>
              </div>
              <div className='ms-3 mt-3 fa-lg' >
                <Link to="/signin" >
                  <CiUser />
                </Link>
              </div>
              <div className='mt-3 ms-3'>
                <Link to="/wishlist" >
                  <BsSuitHeart style={{ height: "20px", width: "20px", color: "gray" }} />
                </Link>
                <span className="tp-product-count-2">{data2.length}</span>
              </div>
              <div>
                <div className="search-info-1 p-relative rounded border">
                  <button className="header-search-icon">
                    <i className="fa-solid fa-magnifying-glass" style={{ color: "#5d5f5f", paddingRight: "7px" }}></i>
                  </button>
                  <input placeholder="Search products..." type="text" />
                </div>
              </div>
            </div>
          </div>
        </div >
      ) :
        <div className='relative flex justify-between mt-5 lg:mx-14 sm:mx-10 mx-10 md:mx-14   nav-2'>
          <div className='logo-div mt-5 flex'>
            <div className=" z-50 ">
              <nav className="navbar navbar-expand-lg navbar-light bg-white ">
                <div className="">
                  <div className="btn-primary-fnew side-icon" onClick={ToggleSidebarfnew} >
                    <i class="fa-solid fa-bars fa-lg" ></i>
                  </div>
                </div>
              </nav>
              <div className={`sidebarfnew ${isOpen == true ? 'active' : ''}`}>
                <div className="sd-header h-[3rem] font-bold bg-[#D51243] text-white  ">
                  <h4 className="mb-0 text-center w-full ">Close</h4>
                  <div className="btn-primary-fnew" onClick={ToggleSidebarfnew}><i className="fa fa-times"></i></div>
                </div>
                <div className="sd-body">
                  <div className='' >
                    <p className='w-full text-center text-[0.9rem] mt-5 font-bold ' >What Are You Looking For?</p>
                  </div>

                  <div className='-z-[90] ' >
                    <Accordion defaultExpanded className='bg-black mt-10 ' >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography>Home</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          <ul>
                            <li className='font-bold border-b-[0.002rem] pb-3 ' > <Link to="/" > Wooden Home </Link></li>
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <div className='-z-10' >
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2-content"
                          id="panel2-header"
                        >
                          <Typography>Shop</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <ul>
                              <li className='font-bold border-b-[0.002rem] pb-3 ' > <Link to="/shop">Shop</Link></li>
                              <li className='font-bold border-b-[0.002rem] pb-3 ' ><Link to="/shop2">Shop 2</Link></li>
                              <li className='font-bold border-b-[0.002rem] pb-3 ' ><a href="#">Shop Details</a></li>
                              <li className='font-bold border-b-[0.002rem] pb-3 ' ><a href="#">Shop Details 2</a></li>
                              <li className='font-bold border-b-[0.002rem] pb-3 ' ><Link to="/shop_details">Shop Location</Link></li>
                              <li className='font-bold border-b-[0.002rem] pb-3 ' ><Link to="/cart">Cart</Link></li>
                              <li className='font-bold border-b-[0.002rem] pb-3 ' ><Link to="/Sign_inandLog_in">Sign In</Link></li>
                              <li className='font-bold border-b-[0.002rem] pb-3 ' ><Link to="/checkout">Checkout</Link></li>
                              <li className='font-bold border-b-[0.002rem] pb-3 ' ><Link to="/wishlist">Wishlist</Link></li>
                              <li className='font-bold border-b-[0.002rem] pb-3 ' ><Link to="/ProductTrack">Product Track</Link></li>
                            </ul>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                    <div>
                      <Accordion  >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2-content"
                          id="panel2-header"
                        >
                          <Typography>Pages</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <ul className='font-bold' >
                              <li className='font-bold border-b-[0.002rem] pb-3 ' > <Link to="/shop"  >Shop</Link></li>
                              <li className='font-bold  border-b-[0.002rem] pb-3 ' ><Link to="/shop2">Shop 2</Link></li>
                              <li className='font-bold  border-b-[0.002rem] pb-3 ' ><a href="#">Shop Details</a></li>
                              <li className='font-bold  border-b-[0.002rem] pb-3 '><a href="#">Shop Details 2</a></li>
                              <li className='font-bold  border-b-[0.002rem] pb-3 '><Link to="/shop_details">Shop Location</Link></li>
                              <li className='font-bold  border-b-[0.002rem] pb-3 '><Link to="/cart">Cart</Link></li>
                              <li className='font-bold  border-b-[0.002rem] pb-3 '><Link to="/Sign_inandLog_in">Sign In</Link></li>
                              <li className='font-bold  border-b-[0.002rem] pb-3 '><Link to="/checkout">Checkout</Link></li>
                              <li className='font-bold  border-b-[0.002rem] pb-3 '><Link to="/wishlist">Wishlist</Link></li>
                              <li className='font-bold  border-b-[0.002rem] pb-3 '><Link to="/ProductTrack">Product Track</Link></li>
                            </ul>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                    <div className='m-4 mt-5 ' >
                      <Link>Contact</Link>
                    </div>
                    <div className='m-4 mt-5 ' >
                      <div className='flex' >
                        <div className='m-1 ms-0' >
                          <svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="User"><g><path d="M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z"></path><path d="M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z"></path></g></g></svg>
                        </div>
                        <Link to="/Sign_inandLog_in" >Login / Register</Link>
                      </div>
                    </div>
                    <div className='m-4 mt-5 flex'>
                      <div className='m-1 me-2 ms-0' >
                        <svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 16 16" height="5px" width="5px" xmlns="http://www.w3.org/2000/svg" style={{ color: "white", height: "16px", width: "15px" }}><path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"></path></svg>
                      </div>
                      <Link to="/wishlist" >Wishlist</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='f-icon -mt-1'>
              <img src={logo} alt="" className='top-0 left-0' />
            </div>
          </div>
          <div className='s-icon mt-3'>
            <img src={logo} alt="" className='top-0 left-0' />
          </div>
          <div className='flex' >
            <form action="#">
              <div className="search-info p-relative rounded">
                <button className="header-search-icon">
                  <i className="fa-solid fa-magnifying-glass" style={{ color: "#5d5f5f", paddingRight: "7px" }}></i>
                </button>
                <input placeholder="Search products..." type="text" />
              </div>
            </form>

            <div className='three-cart flex' >
              <div className="dropdown ms-9 border rounded">
                <button className="dropbtn rounded-md flex"> <img src={flag} alt="" /><b>English</b><i className="fa-solid fa-angle-down fa-sm" style={{ color: "#D1D1D3" }}></i></button>
                <div className="dropdown-content z-10">
                  <a href="#">Arabic</a>
                  <a href="#">Spanish</a>
                  <a href="#">Mandarin</a>
                </div>
              </div>
              <div className="s-selector">
                <select className='border h-12 rounded ms-3' >
                  <option style={{ padding: "50px" }}>USD</option>
                  <option style={{ padding: "50px" }}>YEN</option>
                  <option>EURO</option>
                </select>
              </div>
              <div className='mt-3 ms-3'>
                <Link to="/cart">
                  <span className='relative new-cart ' >
                    <PiShoppingCartThin style={{ height: "23px", width: "23px" }} />
                  </span>
                </Link>
                <span className="tp-product-count-1">{data.length}</span>
              </div>
              <div className='ms-3 mt-3 fa-lg' >
                <Link to="/signin" >
                  <CiUser />
                </Link>
              </div>
              <div className='mt-[0.8rem] ms-3'>
                <Link to="/wishlist" >
                  <BsSuitHeart style={{ height: "20px", width: "20px", color: "gray" }} />
                </Link>
                <span className="tp-product-count-1">{data2.length}</span>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
