import React from 'react'
import pot from '../assets/lpot.png'
import './style.css'
export default function Pots() {
  return (
    <div>
      <div className="size-2 flex justify-center items-center flex-wrap ">
        <div className=''><img src={pot} alt="image not show" /></div>
        <div className='ms-5 para' >
          <div class="tpdealcontact__price mb-5 ">
            <span className='rd'>$49.00</span>
            <del className='ms-1' >$59.00</del>
          </div>
          <h4 class="tpdealcontact__title mb-10"><a href="/shop-details">Pro2 Abstract Folded Pots</a></h4>
          <p className='' >Elegant pink origami design three-dimensional view and decoration co-exist. Great for adding a decorative touch to any room’s decor. Wonderful accent piece for coffee tables or side tables.</p>
          <div className="progress">
            <div className="progress-bar mt-4" role="progressbar" aria-valuenow="70"
              aria-valuemin="0" aria-valuemax="100">
              <div className="sr-only"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
