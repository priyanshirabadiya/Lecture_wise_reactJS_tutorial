import React from 'react';
import Pageheading from '../../Commancomponents/Pageheading/Pageheading';
import Header2 from '../../Commancomponents/2_Header2/Header2';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

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


export default function Checkout() {
    const cartData = useSelector((state) => state.cartreducer.carts);
    const quantities = useSelector((state) => state.cartreducer.quantities);

    let Subtotal = 0;
    cartData.forEach((item) => {
        const quantity = quantities[item.value.id] || 1;
        Subtotal += item.value.price * quantity;
    });

    let Taxes = 9.00;


    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (
        <>
            <Header2 />
            <Pageheading pagename="Checkout" />
            <form className='border mt-4 mx-2' action='https://formspree.io/f/mnqeyqab' method="POST">
                <div className='flex mx-14 ' >
                    <div className='w-[50%] mt-10 mx-5' >
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
                                        name="text"
                                        id="first_name"
                                        className="border border-gray-300 text-gray-900 text-base block w-full p-2.5 focus:ring-1 focus:ring-[#D51243]"
                                        required
                                    />

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
                                        name="text"
                                        id="last_name"
                                        className="border border-gray-300 text-gray-900 text-base  block w-full p-2.5 focus:ring-1 focus:ring-[#D51243]"
                                        required
                                    />
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
                                        required
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
                                    <input
                                        type="text"
                                        name="text"
                                        id="Address2"
                                        className=" focus:ring-1 focus:ring-[#D51243] border border-gray-300 text-gray-900 text-base  block w-full p-2.5 mb-5"
                                        required
                                        placeholder="Street address"
                                    />
                                    <input
                                        type="text"
                                        name="text"
                                        id="Address"
                                        className=" focus:ring-1 focus:ring-[#D51243] border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                                        required
                                        placeholder="Apartment,suite,unit,etc.(optional)"
                                    />
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
                                        name="text"
                                        id="Town"
                                        className=" focus:ring-1 focus:ring-[#D51243] border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                                        required
                                        placeholder="Town / City"
                                    />
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
                                        name="text"
                                        id="State_name"
                                        className=" focus:ring-1 focus:ring-[#D51243] border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                                        required
                                    />
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
                                        name="text"
                                        id="Zip_code"
                                        className=" focus:ring-1 focus:ring-[#D51243] border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                                        placeholder="Postcode / Zip"
                                        required
                                    />
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
                                        type="text"
                                        name="text"
                                        id="email"
                                        className=" focus:ring-1 focus:ring-[#D51243] border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div className="col-span-6 ">
                                    <label
                                        htmlFor="Phone_num"
                                        className="block mb-2 text-base text-gray-400"
                                    >Phone
                                    </label>
                                    <input
                                        type="text"

                                        id="Phone_num"
                                        className=" focus:ring-1 focus:ring-[#D51243] border border-gray-300 text-gray-900 text-base  block w-full p-2.5"
                                        placeholder="Phone Number"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-4 border-[#F5C9D4] ms-5 mt-10 w-[50%]">
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
                                        <div className='text-[1rem] text-gray-500 w-[50%]'>{item.value.name}</div>
                                        <div className='text-[1rem] text-gray-500 w-[50%]'>${(item.value.price * (quantities[item.value.id] || 1)).toFixed(2)}</div>
                                    </div>
                                    <hr className='mt-3' />
                                </div>
                            ))}
                            <div className='flex mt-3'>
                                <div className='text-[1rem] text-gray-500 w-[50%] font-bold '>Order Total price with Tax</div>
                                <div className='text-[1rem] text-gray-500 w-[50%] font-bold '>${(Subtotal + (Subtotal * Taxes / 100)).toFixed(2)}</div>
                            </div>
                            <div className='mt-5' >
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="bg-white">
                                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" className="bg-white" >
                                        <Typography className=''>
                                            <div className='font-bold text-[0.95rem]' >Direct Bank Transfer</div>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                        <Typography>
                                            <div className='font-bold text-[0.95rem]' > Cheque Payment</div>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                                        <Typography>
                                            <div className='font-bold text-[0.95rem]' >PayPal</div></Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
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
