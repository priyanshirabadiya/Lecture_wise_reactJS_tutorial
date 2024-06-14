import React from 'react';
import './style.css';
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
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Sign_in() {

    const Swal = require('sweetalert2');

    const signupschema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email required'),
        password: Yup.string()
            .min(3, 'Too short')
            .max(6, 'Password is strong')
            .required('Password required')
    });

    const loginschema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email required'),
        password: Yup.string()
            .min(3, 'Too short')
            .max(6, 'Password is strong')
            .required('Password required')
    });

    const signupForm = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: signupschema,
        onSubmit: (values) => {
            const setuser = JSON.parse(localStorage.getItem('users')) || [];
            setuser.push({ email: values.email, password: values.password });
            localStorage.setItem('users', JSON.stringify(setuser));
            // alert("Successfully registered");
            Swal.fire({
                title: "successfully register",
                icon: "success"
            });
        }
    });

    const loginForm = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginschema,
        onSubmit: (values) => {
            const setuser = JSON.parse(localStorage.getItem('users')) || [];
            const user = setuser.find(user => user.email === values.email && user.password === values.password);

            if (user) {
                Swal.fire({
                    title: "Successfully logged in",
                    icon: "success"
                });
            }

            if (!user) {
                Swal.fire({
                    icon: "error",
                    title: "Wrong details",
                    text: "Please enter the correct details",
                });
            }
        }
    });

    const onchangecolor = (form) => {
        if (form.touched.password && form.errors.password) {
            if (form.values.password.length > 6) {
                return { color: "green", fontSize: "14px" }
            } else {
                return { color: "red", fontSize: "14px" }
            }
        }
    };

    return (
        <>
            <div>
                <Header2 />
            </div>
            <div>
                <Pageheading pagename="Sign In" />
            </div>
            <div className="flex xl:flex-nowrap justify-center xl:justify-between mb-10 flex-wrap mx-10 mt-20">
                <form onSubmit={signupForm.handleSubmit}>
                    <div className="h-[750px] bg-[#F6F6F6] rounded md:mt-10 lg:mt-0">
                        <div className='rounded-t-lg relative'>
                            <img src={signinI2} className='rounded-t-lg' alt="" />
                        </div>
                        <div className='pt-10 ps-10 flex'>
                            <div>
                                <button type="button" className='p-4 rounded bg-white'><TbShoppingBagMinus className='text-[#d12531]' /></button>
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
                                            className='px-2 py-3 w-80 focus:border-none'
                                            placeholder='Username/email address'
                                            id="email"
                                            onBlur={signupForm.handleBlur}
                                            onChange={signupForm.handleChange}
                                            value={signupForm.values.email}
                                        />
                                    </div>
                                    <span>
                                        {signupForm.touched.email && signupForm.errors.email ? <p style={{ color: "red", fontSize: "14px" }} >{signupForm.errors.email}</p> : null}
                                    </span>
                                </div>
                                <div>
                                    <div className='bg-white py-1 mt-3 rounded flex -ms-12'>
                                        <GoKey className='m-4 me-0 text-gray-500' />
                                        <input
                                            type="password"
                                            name="password"
                                            className='px-2 py-3 w-80 focus:border-none focus:border-white focus:outline-none outline-white'
                                            placeholder='Password'
                                            id="password"
                                            onChange={signupForm.handleChange}
                                            value={signupForm.values.password}
                                            onBlur={signupForm.handleBlur}
                                        />
                                    </div>
                                    <span>
                                        {signupForm.touched.password && signupForm.errors.password ? <p style={onchangecolor(signupForm)} >{signupForm.errors.password}</p> : null}
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
                <form onSubmit={loginForm.handleSubmit}>
                    <div className="h-[750px] bg-[#F6F6F6] rounded">
                        <div className='rounded-t-lg relative'>
                            <img src={signinI} className='rounded-t-lg' alt="" />
                        </div>
                        <div className='pt-10 ps-10 flex'>
                            <div>
                                <button type="button" className='p-4 rounded bg-white'><FiLock className='text-[#d12531]' /></button>
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
                                        className='px-2 py-3 focus:border-none'
                                        placeholder='Username/email address'
                                        onChange={loginForm.handleChange}
                                        onBlur={loginForm.handleBlur}
                                        value={loginForm.values.email}
                                        id="email"
                                    />
                                </div>
                                <span>
                                    {loginForm.touched.email && loginForm.errors.email ? <p style={{ color: "red", fontSize: "14px" }} >{loginForm.errors.email}</p> : null}
                                </span>
                                <div className='bg-white py-1 mt-3 rounded flex -ms-12'>
                                    <GoKey className='m-4 me-0 text-gray-500' />
                                    <input
                                        type="password"
                                        name="password"
                                        className='px-2 py-3 focus:border-none focus:border-white focus:outline-none outline-white'
                                        placeholder='Password'
                                        onChange={loginForm.handleChange}
                                        onBlur={loginForm.handleBlur}
                                        value={loginForm.values.password}
                                        id="password"
                                    />
                                </div>
                                <span>
                                    {loginForm.touched.password && loginForm.errors.password ? <p style={onchangecolor(loginForm)} >{loginForm.errors.password}</p> : null}
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
    );
}


