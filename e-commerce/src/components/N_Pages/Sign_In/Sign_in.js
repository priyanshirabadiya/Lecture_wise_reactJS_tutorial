import React, { useState } from 'react';
import './style.css';
import Header2 from '../../Commancomponents/2_Header2/Header2';
import Pageheading from '../../Commancomponents/Pageheading/Pageheading';
import signinI2 from '../../assets/signin-2.jpg';
import { GoKey } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { TbShoppingBagMinus } from "react-icons/tb";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, json } from 'react-router-dom';

export default function Sign_in() {
    const Swal = require('sweetalert2');

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validFlag, setValidFlag] = useState({ email: false, password: false }); // validFlag is used to change color of error
    const [error, setError] = useState({ emailError: "", passError: "" })

    //REGEX
    const emailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,}$/;
    const strongPassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/;
    const mediumPassRegex = /^[a-zA-Z0-9]{6,}$/;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const trimmedValue = value.trim();
        if (name === "email") {
            setEmail(trimmedValue);
            if (trimmedValue === "") {
                setValidFlag(prev => ({ ...prev, email: false }));
                setError(prev => ({ ...prev, emailError: "" }));
            } else if (emailRegex.test(trimmedValue)) {
                setValidFlag(prev => ({ ...prev, email: true }));
                setError(prev => ({ ...prev, emailError: "Email is valid" }));
            } else {
                setValidFlag(prev => ({ ...prev, email: false }));
                setError(prev => ({ ...prev, emailError: "Email is not valid" }));
            }
        }
        if (name === "password") {
            setPassword(trimmedValue);
            if (trimmedValue === "") {
                setValidFlag(prev => ({ ...prev, password: false }));
                setError(prev => ({ ...prev, passError: "" }));
            } else if (strongPassRegex.test(trimmedValue)) {
                setValidFlag(prev => ({ ...prev, password: true }));
                setError(prev => ({ ...prev, passError: "Password is valid" }));
            } else if (mediumPassRegex.test(trimmedValue)) {
                setValidFlag(prev => ({ ...prev, password: true }));
                setError(prev => ({ ...prev, passError: "Password is medium" }));
            }
            else if (trimmedValue.length < 6) {
                setValidFlag(prev => ({ ...prev, password: false }));
                setError(prev => ({ ...prev, passError: "Password must have at least 6 characters" }));
            } else {
                setValidFlag(prev => ({ ...prev, password: true }));
                setError(prev => ({ ...prev, passError: "Password is strong" }));
            }
        }
    }

    const registerData = (e) => {
        e.preventDefault();
        if (!email || !password) {
            Swal.fire({
                title: "Please fill all the details.",
                icon: "warning"
            });

        }
        const users = JSON.parse(localStorage.getItem("users")); //key name is users
        users.push({ email, password });
        console.log(users);
        localStorage.setItem("users", JSON.stringify(users));

        Swal.fire({
            title: "Successfully Registered",
            icon: "success"
        });

    };

    const errorClasses1 = `flex items-center font-medium tracking-wide text-xs mt-1 ml-1 ${validFlag.password ? "text-green-500" : "text-red-700"}`;
    const errorclass = `flex items-center font-medium tracking-wide text-xs mt-1 ml-1 ${validFlag.email ? "text-green-500" : "text-red-700"} `

    return (
        <>
            <div>
                <Header2 />
            </div>
            <div>
                <Pageheading pagename="Sign In" />
            </div>
            <div className="flex  justify-center  mb-10 flex-wrap mx-10 mt-20">
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
                                    <span className={errorclass} >
                                        {error.emailError}
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
                                    {<span className={errorClasses1}>
                                        {error.passError}
                                    </span>}
                                </div>
                                <div className="flex mt-5 justify-between -ms-12 n-check">
                                    <Link to='/login' className='underline text-[0.75rem] mt-2'>Already Have Account?</Link>
                                </div>
                                <div className='bg-[#F3EEE7] py-4 rounded mt-5 flex -ms-12 hover:bg-[black] hover:text-white hover:transition-all hover:duration-500 hover:ease-in-out justify-center'>
                                    <button type='submit'>Register here </button><IoIosArrowRoundForward className='mt-1 ms-2 h-7 w-6' />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </>
    );
}
