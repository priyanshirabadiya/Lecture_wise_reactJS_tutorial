import React, { useEffect, useState } from 'react'
import pot from '../../assets/lpot.png'
import l1 from '../../assets/l1.jpg'
import l2 from '../../assets/l2.jpg'
import l3 from '../../assets/l3.jpg'
import l4 from '../../assets/l4.jpg'
import l5 from '../../assets/l5.jpg'
import l6 from '../../assets/l6.jpg'
import './style.css'
export default function Pots() {

  const [count, setcounttime] = useState({
    days: 0,
    months: 0,
    minitues: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('May 4, 2024 00:00:00');

    const countlefttime = () => {
      const currentdate = new Date();
      const differenceseconds = (currentdate - targetDate) / 1000;

      const seconds = parseInt((differenceseconds) % 60);
      const minitues = parseInt((differenceseconds / 60) % 60);
      const hours = parseInt((differenceseconds / 3600) % 24);
      const days = parseInt((differenceseconds / 3600) / 24);

      setcounttime({ seconds, minitues, hours, days })
    }

    setInterval(countlefttime, 1000)
    // return () => clearInterval(interval);  
  }, []);

  return (
    <div className=' mx-9' >
      <div className="size-2 flex justify-center items-center flex-wrap ">
        <div className='nw-img'>
          <div className='relative' >
            <img src={pot} alt="image not show" className='md:mt-10 sm:mt-0 ' />
            <div className='absolute parent-component ' >
              <h5 class="tpdealproduct__offer-price text-center ">
                <p className='textforfrom text-center ' >From</p>
                $49</h5>
            </div>
          </div>
        </div>

        <div className='lg:ms-14 para' >
          <div className="tpdealcontact__price mb-5 ">
            <span className='rd'>$49.00</span>
            <del className='ms-1' >$59.00</del>
          </div>
          <h4 className="tpdealcontact__title mb-10"><a href="/shop-details">Pro2 Abstract Folded Pots</a></h4>
          <p className='' >Elegant pink origami design three-dimensional view and decoration co-exist. Great for adding a decorative touch to any room’s decor. Wonderful accent piece for coffee tables or side tables.</p>
          <div className="progress mt-3 ">
            <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div className="for-flex flex-wrap  flex  justify-center lg:justify-start w-full mt-5">
            <div className="box-1 sm:me-4 md:me-5">
              <h1 className='tpdealcontact__title-2 text-center' >{count.days}</h1>
              <h6 className='mt-3 text-center ' >Days</h6>
            </div>
            <div className="box-1 sm:me-4 md:me-5 ">
              <h1 className='tpdealcontact__title-2 text-center' >{count.hours}</h1>
              <h6 className='mt-3 text-center ' >Hours</h6>
            </div>
            <div className="box-1 sm:me-4 md:me-5">
              <h1 className='tpdealcontact__title-2 text-center' >{count.minitues}</h1>
              <h6 className='mt-3 text-center ' >Minute</h6>
            </div>
            <div className="box-1">
              <h1 className='tpdealcontact__title-2 text-center'>{count.seconds}</h1>
              <h6 className='mt-3 text-center' >Second</h6>
            </div>
            <div>
              <p className='l-n-text' >The offer has been <br />  in effect since this time. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className='align-middle text-center'>
          <h5 className="tpsectionarea__subtitle">Follow On</h5>
          <h4 className="tpsectionarea__title">
            <i className="fab fa-instagram"></i> ninico-shop</h4>
        </div>
        <div className="flex justify-between frapable mt-4  flex-wrap">
          <a href="" className='pe-1 mb-5' > <img className='rounded n-img ' src={l1} alt="" /></a>
          <a href="" className='pe-1 mb-5' > <img className='rounded n-img ' src={l2} alt="" /></a>
          <a href="" className='pe-1 mb-5' > <img className='rounded n-img ' src={l3} alt="" /></a>
          <a href="" className='pe-1 mb-5' > <img className='rounded n-img ' src={l4} alt="" /></a>
          <a href="" className='pe-1 mb-5' > <img className='rounded n-img ' src={l5} alt="" /></a>
          <a href="" className='' > <img className='rounded n-img ' src={l6} alt="" /></a>
        </div>
      </div>

    </div>
  )
}

