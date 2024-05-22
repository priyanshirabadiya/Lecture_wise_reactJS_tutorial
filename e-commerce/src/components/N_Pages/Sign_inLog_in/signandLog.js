import React, { useState } from 'react';
import './style.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import Header2 from '../../Commancomponents/2_Header2/Header2';
import Pageheading from '../../Commancomponents/Pageheading/Pageheading';
import signinI from '../../assets/signin.jpg';
import signinI2 from '../../assets/signin-2.jpg';
import { FiLock } from "react-icons/fi";
import { GoKey } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { TbShoppingBagMinus } from "react-icons/tb";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";

export default function Sign_in() {

    const Swal = require('sweetalert2');

    const [signUpData, setSignUpData] = useState({ email: "", password: "" });
    const [loginData, setLoginData] = useState({ email: "", password: "" });

    const [signUpError, setSignUpError] = useState({ emailError: "", passwordError: "" });
    const [loginError, setLoginError] = useState({ emailError: "", passwordError: "" });

    //REGEX
    const emailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,}$/;
    const strongPassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/;
    const mediumPassRegex = /^[a-zA-Z0-9]{6,}$/;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignUpData(prev => ({ ...prev, [name]: value }));
        if (name === 'email') {
            if (value === "") {
                setSignUpError(prev => ({ ...prev, emailError: "" }));
            } else if (emailRegex.test(value)) {
                setSignUpError(prev => ({ ...prev, emailError: "Your email is valid" }));
            } else {
                setSignUpError(prev => ({ ...prev, emailError: "Email is not valid" }));
            }
        }
        if (name === 'password') {
            if (value === "") {
                setSignUpError(prev => ({ ...prev, passwordError: "" }));
            } else if (strongPassRegex.test(value)) {
                setSignUpError(prev => ({ ...prev, passwordError: "Password is strong" }));
            } else if (mediumPassRegex.test(value)) {
                setSignUpError(prev => ({ ...prev, passwordError: "Password is valid" }));
            } else if (value.length < 6) {
                setSignUpError(prev => ({ ...prev, passwordError: "Password must have at least 6 characters" }));
            } else {
                setSignUpError(prev => ({ ...prev, passwordError: "Password is strong" }));
            }
        }
    };

    const handleInputChange2 = (e) => {
        const { name, value } = e.target;
        setLoginData(prev => ({ ...prev, [name]: value }));
        const trimvalue = value.trim();
        if (name === 'email') {
            if (trimvalue === "") {
                setLoginError(prev => ({ ...prev, passwordError: "" }))
            } else if (emailRegex.test(trimvalue)) {
                setLoginError(prev => ({ ...prev, emailError: "Your email is valid" }));
            } else {
                setLoginError(prev => ({ ...prev, emailError: "Email is not valid" }));
            }
        }

        if (name === 'password') {
            if (trimvalue === "") {
                setLoginError(prev => ({ ...prev, passwordError: "" }));
            } else if (strongPassRegex.test(trimvalue)) {
                setLoginError(prev => ({ ...prev, passwordError: "Password is strong" }));
            } else if (mediumPassRegex.test(trimvalue)) {
                setLoginError(prev => ({ ...prev, passwordError: "Password is valid" }));
            } else if (trimvalue.length < 6) {
                setLoginError(prev => ({ ...prev, passwordError: "Password must have at least 6 characters" }));
            } else {
                setLoginError(prev => ({ ...prev, passwordError: "Password is strong" }));
            }
        }
    }
    const registerData = (e) => {
        e.preventDefault();
        const { email, password } = signUpData;
        if (!email || !password) {
            Swal.fire({
                title: "Please fill all the details.",
                icon: "warning"
            });
            return;
        }
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));

        Swal.fire({
            title: "Successfully Registered",
            icon: "success"
        });
    };

    const logindata = (e) => {
        const { email, password } = loginData;
        e.preventDefault();

        if (!email || !password) {
            Swal.fire({
                title: "Please fill all the details.",
                icon: "warning"
            });
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (!user) {
            Swal.fire({
                icon: "error",
                title: "Wrong details",
                text: "Please enter the correct details",
            });
        } else {
            Swal.fire({
                title: "Successfully Logged In",
                icon: "success"
            });
        }
    };
    
    const getSignUpEmailErrorClass = () => {
        if (signUpError.emailError === "Email is not valid") return "text-red-500";
        if (signUpError.emailError === "Your email is valid") return "text-green-500";
        return "text-red-700";
    };

    const getSignUpPasswordErrorClass = () => {
        if (signUpError.passwordError === "Password is strong") return "text-green-500";
        if (signUpError.passwordError === "Password is valid") return "text-yellow-500";
        if (signUpError.passwordError === "Password must have at least 6 characters" || signUpError.passwordError === "Password is not valid") return "text-red-500";
        return "text-red-700";
    };

    const getLoginEmailErrorClass = () => {
        if (loginError.emailError === "Email is not valid") return "text-red-500";
        if (loginError.emailError === "Your email is valid") return "text-green-500";
        return "text-red-700";
    };

    const getLoginPasswordErrorClass = () => {
        if (loginError.passwordError === "Password is strong") return "text-green-500";
        if (loginError.passwordError === "Password is valid") return "text-yellow-500";
        if (loginError.passwordError === "Password must have at least 6 characters" || loginError.passwordError === "Password is not valid") return "text-red-500";
        return "text-red-700";
    };

    const signUpEmailErrorClass = `flex items-center font-medium tracking-wide text-xs mt-1 ml-1 ${getSignUpEmailErrorClass()}`;
    const signUpPasswordErrorClass = `flex items-center font-medium tracking-wide text-xs mt-1 ml-1 ${getSignUpPasswordErrorClass()}`;
    const loginEmailErrorClass = `flex items-center font-medium tracking-wide text-xs mt-1 ml-1 ${getLoginEmailErrorClass()}`;
    const loginPasswordErrorClass = `flex items-center font-medium tracking-wide text-xs mt-1 ml-1 ${getLoginPasswordErrorClass()}`;

    return (
        <>
            <div>
                <Header2 />
            </div>
            <div>
                <Pageheading pagename="Sign In" />
            </div>
            <div className="flex xl:flex-nowrap justify-center xl:justify-between mb-10 flex-wrap mx-10 mt-20">
                <form onSubmit={registerData}>
                    <div className="h-[750px] bg-[#F6F6F6] rounded md:mt-10 lg:mt-0 ">
                        <div className='rounded-t-lg relative'>
                            <img src={signinI2} className='rounded-t-lg' alt="" />
                        </div>
                        <div className='pt-10 ps-10 flex'>
                            <div>
                                <button className='p-4 rounded bg-white'><TbShoppingBagMinus className='text-[#d12531]' /></button>
                            </div>
                            <div>
                                <div className='ms-2'>
                                    <h3 className='font-bold'>Sign Up</h3>
                                    <p className='text-[0.9rem] leading-6 mt-2 text-gray-500 w-[35vw]'>
                                        Your personal data will be used to support your experience throughout this website, to manage access to your account.
                                    </p>
                                </div>
                                <div>
                                    <div className='bg-white py-1 mt-5 rounded flex -ms-12'>
                                        <CiMail className='m-4 me-0' />
                                        <input
                                            type="email"
                                            name="email"
                                            onChange={handleInputChange}
                                            className='px-2 py-3 w-80 focus:border-none'
                                            placeholder='Username/email address'
                                        />
                                    </div>
                                    <span className={signUpEmailErrorClass} >
                                            {signUpError.emailError}
                                    </span>
                                </div>
                                <div>
                                    <div className='bg-white py-1 mt-3 rounded flex -ms-12'>
                                        <GoKey className='m-4 me-0 text-gray-500' />
                                        <input
                                            type="password"
                                            name="password"
                                            onChange={handleInputChange}
                                            className='px-2 py-3 w-80 focus:border-none focus:border-white focus:outline-none outline-white'
                                            placeholder='Password'
                                        />
                                    </div>
                                    <span className={signUpPasswordErrorClass}>
                                        {signUpError.passwordError}
                                    </span>
                                </div>
                                <div className="flex mt-5 justify-between -ms-12 n-check">
                                    <a href="" className='underline text-[0.75rem] mt-2'>Already Have Account?</a>
                                </div>
                                <div className='bg-[#F3EEE7] py-4 rounded mt-5 flex -ms-12 hover:bg-[black] hover:text-white hover:transition-all hover:duration-500 hover:ease-in-out justify-center'>
                                    <button type='submit'>Register here </button><IoIosArrowRoundForward className='mt-1 ms-2 h-7 w-6' />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                {/* login data */}
                <form onSubmit={logindata}>
                    <div className="h-[750px] bg-[#F6F6F6] rounded">
                        <div className='rounded-t-lg relative'>
                            <img src={signinI} className='rounded-t-lg' alt="" />
                        </div>
                        <div className='pt-10 ps-10 flex'>
                            <div>
                                <button className='p-4 rounded bg-white'><FiLock className='text-[#d12531]' /></button>
                            </div>
                            <div>
                                <div className='ms-2'>
                                    <h3 className='font-bold'>Login Here</h3>
                                    <p className='text-[0.9rem] leading-6 mt-2 text-gray-500 w-[35vw]'>
                                        Your personal data will be used to support your experience throughout this website, to manage access to your account.
                                    </p>
                                </div>
                                <div className='bg-white py-1 mt-5 rounded flex -ms-12'>
                                    <LuUser2 className='m-4 me-0 text-gray-500' />
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleInputChange2}
                                        className='px-2 py-3 focus:border-none'
                                        placeholder='Username/email address'
                                    />
                                </div>
                                <span className={loginEmailErrorClass}>
                                    {loginError.emailError}
                                </span>

                                <div className='bg-white py-1 mt-3 rounded flex -ms-12'>
                                    <GoKey className='m-4 me-0 text-gray-500' />
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleInputChange2}
                                        className='px-2 py-3 focus:border-none focus:border-white focus:outline-none outline-white'
                                        placeholder='Password'
                                    />
                                </div>
                                <span className={loginPasswordErrorClass}>
                                    {loginError.passwordError}
                                </span>
                                <div className="flex mt-5 justify-between -ms-12 n-check">
                                    <div>
                                        <input type="checkbox" className='h-3 w-3' id='check' />
                                        <label htmlFor="check" className='ms-2 text-sm text-gray-500'>Remember me</label>
                                    </div>
                                    <a href="" className='underline text-[0.75rem] mt-2'>Forget password</a>
                                </div>
                                <div className='bg-[#d51243] py-4 text-white rounded mt-5 flex -ms-12 hover:bg-[#b1101a] hover:transition-all hover:duration-500 hover:ease-in-out justify-center cursor-pointer'>
                                    <button type='submit'>Login Now </button><FaArrowRightLong className='mt-1 ms-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

