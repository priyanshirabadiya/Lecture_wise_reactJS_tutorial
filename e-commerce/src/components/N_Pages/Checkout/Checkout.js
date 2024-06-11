import React from 'react';
import Pageheading from '../../Commancomponents/Pageheading/Pageheading';
import Header2 from '../../Commancomponents/2_Header2/Header2';
import { useSelector } from 'react-redux';
import './style.css';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `0px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'white',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '0px solid rgba(0, 0, 0, .125)',
}));

const placeorder = Yup.object({
    email: Yup.string().required('Enter an email'),
    fname: Yup.string().required('Enter firstname'),
    lname: Yup.string().required('Enter Lastname'),
    address: Yup.string().required('Enter Address'),
    city: Yup.string().required('Enter City/Town'),
    state: Yup.string().required('Enter State/County'),
    zip: Yup.string().required('Enter Postcode/Zip'),
    number: Yup.string().required('Enter Contact-number'),
})

export default function Checkout() {
    const navigate = useNavigate();

    const { values, errors, handleChange, handleSubmit, handleBlur, touched } = useFormik({
        initialValues: {
            email: "",
            fname: "",
            lname: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            number: "",
            cartdata: "",
            cartdatasec: "",
            cartdatathir: ""
        },
        validationSchema: placeorder,
        onSubmit: (values) => {
            fetch('https://formspree.io/f/mzbnlokz', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json', // is the header value, which specifies that the client expects JSON data in the response.
                    //headername 
                    'Content-Type': 'application/json' // is the header value, which indicates that the data being sent is JSON.
                    //headername 
                },
                body: JSON.stringify(values)
            }).then(response => {
                if (response) {
                    Swal.fire({
                        title: "Done!",
                        text: "Your order is Placed",
                        icon: "success"
                    });
                    }
                navigate('/');
            });
        }
    });

    const cartData = useSelector((state) => state.cartreducer.carts);
    const quantities = useSelector((state) => state.cartreducer.quantities);

    let Subtotal = 0;
    cartData.forEach((item) => {
        const quantity = quantities[item.id] || 1;
        Subtotal += item.price * quantity;
    });

    let Taxes = 9.00;

    const [expanded, setExpanded] = React.useState('panel1');

    const handleAccordionchange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
            <Header2 />
            <Pageheading pagename="Checkout" />
            <form className='border mt-4 mx-2' onSubmit={handleSubmit}>
                <div className='flex flex-wrap lg:flex-nowrap justify-center sm:mx-2 md:mx-14 ' >
                    <div className=' w-full md:w-[50%] mt-10 mx-5' >
                        <div>
                            <div className="grid grid-cols-12 gap-x-6 gap-y-6">
                                {/* First Row  */}
                                <div className="countries-selection col-span-12">
                                    <label
                                        htmlFor="countries"
                                        className="block mb-2 text-base text-gray-400"
                                    >
                                        Country
                                    </label>
                                    <select
                                        id="countries"
                                        className="text-gray-900 text-base border  block w-full p-2.5 "
                                    >
                                        <option defaultValue >Choose a country</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="FR">France</option>
                                        <option value="DE">Germany</option>
                                    </select>
                                </div>
                                {/* Seconde Row */}
                                <div className="col-span-6 ">
                                    <label
                                        htmlFor="first_name"
                                        className="block mb-2 text-base text-gray-400"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="fname"
                                        id="first_name"
                                        className="border border-gray-300 text-gray-900 text-base block w-full p-2.5 focus:ring-1 focus:ring-[#D51243]"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.fname}
                                    />
                                    {touched.fname && errors.fname ? (
                                        <p style={{ color: "#D51243", fontSize: "14px" }} >{errors.fname}</p>
                                    ) : null}
                                </div>
                                <div className="col-span-6 ">
                                    <label
                                        htmlFor="last_name"
                                        className="block mb-2 text-base text-gray-400"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lname"
                                        id="last_name"
                                        className="border border-gray-300 text-gray-900 text-base  block w-full p-2.5 focus:ring-1 focus:ring-[#D51243]"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.lname}
                                    />
                                    {touched.lname && errors.lname ? (
                                        <p style={{ color: "#D51243", fontSize: "14px" }} >{errors.lname}</p>
                                    ) : null}
                                </div>
                                {/* Third Row */}
                                <div className="col-span-12">
                                    <label
                                        htmlFor="Company_Name"
                                        className="block mb-2 text-base text-gray-400"
                                    >
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        name="text"
                                        id="Company_Name"
                                        className=" focus:ring-1 focus:ring-[#D51243] border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                                    />
                                </div>

                                {/* Forth  Row */}

                                <div className="col-span-12">
                                    <label
                                        htmlFor="Address"
                                        className="block mb-2 text-base text-gray-400"
                                    >
                                        Address
                                    </label>
                                    <textarea
                                        type="text"
                                        name="address"
                                        id="Address"
                                        className=" focus:ring-1 focus:ring-[#D51243] border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                                        placeholder="Apartment,suite,unit,etc.(optional)"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.address}
                                    />
                                    {touched.address && errors.address ? (
                                        <p style={{ color: "#D51243", fontSize: "14px" }} >{errors.address}</p>
                                    ) : null}
                                </div>

                                {/* Fifth  Row */}

                                <div className="col-span-12">
                                    <label
                                        htmlFor="Town"
                                        className="block mb-2 text-base text-gray-400"
                                    >
                                        Town / City
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        id="Town"
                                        className=" focus:ring-1 focus:ring-[#D51243] border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                                        placeholder="Town / City"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.city}
                                    />
                                    {touched.city && errors.city ? (
                                        <p style={{ color: "#D51243", fontSize: "14px" }} >{errors.city}</p>
                                    ) :
                                    null}
                                </div>

                                {/* Sixth Row  */}

                                <div className="col-span-6 ">
                                    <label
                                        htmlFor="State_name"
                                        className="block mb-2 text-base text-gray-400"
                                    >
                                        State / County
                                    </label>
                                    <input
                                        type="text"
                                        name="state"
                                        id="State_name"
                                        className=" focus:ring-1 focus:ring-[#D51243] border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.state}
                                    />
                                    {touched.state && errors.state ? (
                                        <p style={{ color: "#D51243", fontSize: "14px" }} >{errors.state}</p>
                                    ) :
                                        null}
                                </div>
                                <div className="col-span-6 ">
                                    <label
                                        htmlFor="Zip_code"
                                        className="block mb-2 text-base text-gray-400"
                                    >
                                        Postcode / Zip
                                    </label>
                                    <input
                                        type="text"
                                        name="zip"
                                        id="Zip_code"
                                        className=" focus:ring-1 focus:ring-[#D51243] border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                                        placeholder="Postcode / Zip"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.zip}
                                    />
                                    {touched.zip && errors.zip ? (
                                        <p style={{ color: "#D51243", fontSize: "14px" }} >{errors.zip}</p>
                                    ) :
                                        null}
                                </div>
                                {/* Seventh Row */}
                                <div className="col-span-6 ">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-base text-gray-400"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className=" focus:ring-1 focus:ring-[#D51243] border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.email}
                                    />
                                    {touched.email && errors.email ? (
                                        <p style={{ color: "#D51243", fontSize: "14px" }} >{errors.email}</p>
                                    ) :
                                        null}
                                </div>
                                <div className="col-span-6 ">
                                    <label
                                        htmlFor="Phone_num"
                                        className="block mb-2 text-base text-gray-400"
                                    >Phone
                                    </label>
                                    <input
                                        type="text"
                                        name="number"
                                        id="Phone_num"
                                        className=" focus:ring-1 focus:ring-[#D51243] border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                                        placeholder="Phone Number"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.number}
                                    />
                                    {touched.number && errors.number ? (
                                        <p style={{ color: "#D51243", fontSize: "14px" }} >{errors.number}</p>
                                    ) :
                                        null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-4 border-[#F5C9D4] ms-5 mt-10 w-full md:w-[50%]">
                        <div className='p-5 px-10 '>
                            <h1 className='text-[2rem] text-[#D51243] '>Your Order</h1>
                            <hr className='mt-2' />
                            <div className='flex mt-3'>
                                <div className='text-[1rem] text-gray-500 w-[50%] font-bold'>Product</div>
                                <div className='text-[1rem] text-gray-500 w-[50%] font-bold'>Total</div>
                            </div>
                            <hr className='mt-3' />
                            {cartData.map((item, index) => (
                                <div key={index}>
                                    <div className='flex mt-3'>
                                        <div className='text-[1rem] text-gray-500 w-[50%]' name="cartdata" >{item.name}</div>
                                        <div className='text-[1rem] text-gray-500 w-[50%]' name="cartdatasec" >${(item.price * (quantities[item.id] || 1)).toFixed(2)}</div>
                                    </div>
                                    <hr className='mt-3' />
                                </div>
                            ))}
                            <div className='flex mt-3'>
                                <div className='text-[1rem] text-gray-500 w-[50%] font-bold '>Order Total price with Tax</div>
                                <div className='text-[1rem] text-gray-500 w-[50%] font-bold ' name="cartdatathir">${(Subtotal + (Subtotal * Taxes / 100)).toFixed(2)}</div>
                            </div>
                            <div className='mt-5' >
                                <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionchange('panel1')} className="bg-white">
                                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className="bg-white" >
                                        <Typography className=''>
                                            <div className='font-bold text-[0.95rem] text-black ' >Direct Bank Transfer</div>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography  >
                                            <p className=' text-black' >
                                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
                                            </p>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionchange('panel2')}>
                                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                        <Typography>
                                            <div className='font-bold text-[0.95rem] text-black ' > Cheque Payment</div>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                        <p className=' text-black' >
                                            Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                            </p>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionchange('panel3')}>
                                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                        <Typography>
                                            <div className='font-bold text-[0.95rem] text-black' >PayPal</div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <p className='text-black' >
                                            Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
                                            </p>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-9 mb-5 flex align-middle justify-center'>
                    <button type='submit' className="banner-animation w-[50%]  px-10 bg-[#D51243] h-[3rem] items-center font-bold text-white rounded text-[0.8rem]" to="/">Place order</button >
                </div>
            </form>
        </>
    );
}


