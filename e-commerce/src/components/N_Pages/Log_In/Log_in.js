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

export default function Log_in() {
    const Swal = require('sweetalert2');

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validFlag, setValidFlag] = useState({ email: false, password: false });
    const [error, setError] = useState({ emailError: "", passwordError: "" });

    //REGEX
    const emailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,}$/;
    const strongPassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/;
    const mediumPassRegex = /^[a-zA-Z0-9]{6,}$/;

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        if (name === 'email') {
            setEmail(value);
            if (value === "") {
                setValidFlag(prev => ({ ...prev, email: false }));
                setError(prev => ({ ...prev, emailError: "" }));
            } else if (emailRegex.test(value)) {
                setValidFlag(prev => ({ ...prev, email: true }));
                setError(prev => ({ ...prev, emailError: "Your email is valid" }));
            } else {
                setValidFlag(prev => ({ ...prev, email: false }));
                setError(prev => ({ ...prev, emailError: "Email is not valid" }));
            }
        }

        if (name === 'password') {
            setPassword(value);
            if (value === "") {
                setValidFlag(prev => ({ ...prev, password: false }));
                setError(prev => ({ ...prev, passwordError: "" }));
            } else if (strongPassRegex.test(value)) {
                setValidFlag(prev => ({ ...prev, password: true }));
                setError(prev => ({ ...prev, passwordError: "Password is strong" }));
            } else if (mediumPassRegex.test(value)) {
                setValidFlag(prev => ({ ...prev, password: true }));
                setError(prev => ({ ...prev, passwordError: "Password is valid" }));
            } else {
                setValidFlag(prev => ({ ...prev, password: false }));
                setError(prev => ({ ...prev, passwordError: "Password is not valid" }));
            }
        }
    };

    const logindata = (e) => {
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

    const errorClasses = `flex items-center font-medium tracking-wide text-xs mt-1 ml-1 ${validFlag.email ? "text-green-500" : "text-red-700"}`;
    const errorClasses1 = `flex items-center font-medium tracking-wide text-xs mt-1 ml-1 ${validFlag.password ? "text-green-500" : "text-red-700"}`;

    return (
        <>
            <div>
                <Header2 />
            </div>
            <div>
                <Pageheading pagename="Log In" />
            </div>
            <div className="flex xl:flex-nowrap justify-center  mb-10 flex-wrap mx-10 mt-20">
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
                                        onChange={handleInputChange}
                                        className='px-2 py-3 focus:border-none'
                                        placeholder='Username/email address'
                                    />
                                </div>
                                <div>
                                    <span className={errorClasses}>
                                        {error.emailError}
                                    </span>
                                </div>


                                <div className='bg-white py-1 mt-3 rounded flex -ms-12'>
                                    <GoKey className='m-4 me-0 text-gray-500' />
                                    <div>
                                        <div>
                                            <input
                                                type="password"
                                                name="password"
                                                onChange={handleInputChange}
                                                className='px-2 py-3 focus:border-none focus:border-white focus:outline-none outline-white'
                                                placeholder='Password'
                                            />
                                        </div>
                                        <div>
                                            <span className={errorClasses1}>
                                                {error.passwordError}
                                            </span>
                                        </div>
                                    </div>
                                </div>
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
    );
}
