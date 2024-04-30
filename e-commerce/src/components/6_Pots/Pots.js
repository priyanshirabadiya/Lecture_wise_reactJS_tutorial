import React from 'react'
import pot from '../assets/lpot.png'
import l1 from '../assets/l1.jpg'
import l2 from '../assets/l2.jpg'
import l3 from '../assets/l3.jpg'
import l4 from '../assets/l4.jpg'
import l5 from '../assets/l5.jpg'
import l6 from '../assets/l6.jpg'
import './style.css'
export default function Pots() {
  return (
    <div>
      <div className="size-2 flex justify-center items-center flex-wrap ">
        <div className=''><img src={pot} alt="image not show" /></div>
        <div className='lg:ms-14 para' >
          <div class="tpdealcontact__price mb-5 ">
            <span className='rd'>$49.00</span>
            <del className='ms-1' >$59.00</del>
          </div>
          <h4 class="tpdealcontact__title mb-10"><a href="/shop-details">Pro2 Abstract Folded Pots</a></h4>
          <p className='' >Elegant pink origami design three-dimensional view and decoration co-exist. Great for adding a decorative touch to any room’s decor. Wonderful accent piece for coffee tables or side tables.</p>
          <div className="progress mt-3 ">
            <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div className="for-flex flex w-full mt-5">
            <div className="box-1 sm:me-4 md:me-5">
              <h1 className='tpdealcontact__title-2' >-131</h1>
              <h6 className='mt-2 ms-4 absolute' >Days</h6>
            </div>
            <div className="box-1 sm:me-4 md:me-5 ">
              <h1 className='tpdealcontact__title-2 ms-2' >- 22</h1>
              <h6 className='mt-2 ms-3 absolute' >Hours</h6>
            </div>
            <div className="box-1 sm:me-4 md:me-5">
              <h1 className='tpdealcontact__title-2 ms-2' >- 50</h1>
              <h6 className='mt-2 ms-4 absolute' >Minute</h6>
            </div>
            <div className="box-1">
              <h1 className='tpdealcontact__title-2 ms-2' >- 41</h1>
              <h6 className='mt-2 ms-2 absolute' >Second</h6>
            </div>
            <div>
              <p className='l-n-text' >Remains until the <br /> end of the offer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className='align-middle text-center'>
          <h5 class="tpsectionarea__subtitle">Follow On</h5>
          <h4 class="tpsectionarea__title">
            <i class="fab fa-instagram"></i> ninico-shop</h4>
        </div>
        <div className="flex justify-between frapable mt-4 flex-wrap">
          <a href="" className='p-3' > <img className='rounded n-img ' src={l1} alt="" /></a>
          <a href="" className='p-3' > <img className='rounded n-img ' src={l2} alt="" /></a>
          <a href="" className='p-3' > <img className='rounded n-img ' src={l3} alt="" /></a>
          <a href="" className='p-3' > <img className='rounded n-img ' src={l4} alt="" /></a>
          <a href="" className='p-3' > <img className='rounded n-img ' src={l5} alt="" /></a>
          <a href="" className='p-3' > <img className='rounded n-img ' src={l6} alt="" /></a>
        </div>
      </div>

    </div>
  )
}
