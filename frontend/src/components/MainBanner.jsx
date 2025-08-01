import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

function MainBanner() {
  return (
    <div className='relative '>
        <img src={assets.main_banner_bg} alt="banner" className='w-full  hidden md:block' />
        <img src={assets.main_banner_bg_sm} alt="banner" className='w-full md:hidden ' />
        
        <div className='absolute inset-0 flex flex-col items-center justify-end md:items-start  md:justify-center pb-24 md:pd-0 mt-10 md:pl-18 lg:pl-24 '>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-110 leading-tight lg:leading-15'>Freshness You Can Trust, Saving You will Love!</h1>
      

        <div className='flex itmes-center mt-6 font-medium'>
            <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-[#4fbf8b] hover:bg-[#44ae7c] transition rounded text-white cursor-pointer'>
            Shop now
            <img className='md:hidden transition group-focus:translate-x-1' src={assets.white_arrow_icon} alt="arrow" />
            </Link>

             <Link to={"/products"} className='group hidden md:flex items-center gap-2 px-9 py-3  cursor-pointer'>
                Explore deals
            <img className=' transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt="arrow" />
            </Link>


        </div>
          </div>
    </div>
  )
}

export default MainBanner