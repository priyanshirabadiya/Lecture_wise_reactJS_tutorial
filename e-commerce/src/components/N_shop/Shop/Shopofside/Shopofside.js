import React from 'react';
import data2 from '../../../0_Home/5_Poular_products2/Data2';

export default function Shopofside() {
    const kidsdata = data2.filter(item => item.wear === 'kids')
    return (
        <div>
            {kidsdata.map((value, ind, arr) => {
                const { img, price, name } = value;

                return (
                    <>
                        <div className='mx-10 mt-10 flex flex-wrap justify-center '>
                            <div>
                                <img className='h-[25vw] w-[25vw] mb-5  ' src={img} alt="" />
                            </div>
                            <div className='m-8' >
                                <div className="  font-bold ">{name}</div>
                                <div className=" my-2 text-[#D51243] font-bold text-lg ">${price}.00</div>
                                <p className='w-[60vw] text-wrap ' >Sed ut perspiciatis unde omnis iste natus error sit volup tatem accusa ntium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam volup tatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione volup tatem sequi nesciunt.

                                    Once that's determined, you need to come up with a name and set up a legal structure, such as a corporation. Next, set an ecommerce site with a payment gateway. For instance, a small business owner who runs a dress shop can set up a website promoting their clothing and other related products online and allow customers to make payments with a credit card or through a payment processing service, such as PayPal.</p>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}
