import React from 'react';
import Mobiles from '../src/images/Mobiles.png';
import Appliances from '../src/images/Appliances.jpg';
import Grocery from '../src/images/Grocery.png';
import Fashion from '../src/images/Fashion.png';
import Electronics from '../src/images/Electronics.png';
import Kitchen from '../src/images/Kitchen and Home.jpg';
import Toys from '../src/images/Toys and More.png';
import Travel from '../src/images/Travel.png';
import Bikes from '../src/images/Two Wheeler.png';

const Category = () => {
  return (
    <div>

      <div className='bg-gray-300 h-3'></div>
      <div className=''>
        <div className='flex bg-white mx-5'>
          <div className='ms-40'>
            <img className='w-30 h-20' src={Mobiles} alt='Mobiles'/>
            <p className='font-bold text-lg -mt-1'>Mobiles</p>
          </div>
          <div className='mx-6'>
            <img className='w-30 h-20' src={Appliances} alt='Appliances'/>
            <p className='font-bold text-lg -mt-1'>Appliances</p>
          </div>
          <div className='mx-6'>
            <img className='w-30 h-20' src={Grocery} alt='Grocery'/>
            <p className='font-bold text-lg -mt-1'>Grocery</p>
          </div>
          <div className='mx-6'>
            <img className='w-30 h-20'src={Fashion} alt='Fashion'/>
            <p className='font-bold text-lg -mt-1'>Fashion</p>
          </div>
          <div className='mx-6'>
            <img className='w-30 h-20' src={Electronics} alt='Electronics'/>
            <p className='font-bold text-lg -mt-1'>Electronics</p>
          </div>
          <div className='mx-6'>
            <img className='w-30 h-20  ms-5' src={Kitchen} alt='Electronics'/>
            <p className='font-bold text-lg -mt-1'>Kitchen & Home</p>
          </div>
          <div className='mx-6'>
            <img className='w-30 h-20 ms-3' src={Toys} alt='Electronics'/>
            <p className='font-bold text-lg -mt-1'>Toys & More</p>
          </div>
          <div className='mx-6'>
            <img className='w-30 h-20' src={Travel} alt='Electronics'/>
            <p className='font-bold text-lg -mt-1 ms-5'>Travel</p>
          </div>
          <div className='mx-6'>
            <img className='w-30 h-20' src={Bikes} alt='Electronics'/>
            <p className='font-bold text-lg -mt-1 ms-5'>Bikes</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Category
