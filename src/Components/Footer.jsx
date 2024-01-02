import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
export const Footer = () => {
  return (
    <div className='lg:px-24 px-4 text-white'>
        {/* footer top */}
        <div className='flex flex-col md:flex-row flex-wrap justify-between items-start gap-12'> 
            {/* logo text */}
            <div className='space-y-4 lg:w-1/3'>
            <a href='#home' className='text-white text-3xl font-bold'>
            <span className='text-orange'>CreaTech</span>Minds
          </a>
          <p className='text-gray-300'>Welcome to CreaTechMind sed ut perspiciae omunda omnis iste natus error sitort voluptatem accusantium.</p>

          {/* social icons */}
          <div className='flex gap-5 text-white'>
            <a href='/' className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300'><FaLinkedin className='w-5 h-5'/></a>
            <a href='/' className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300'><IoLogoInstagram className='w-5 h-5'/></a>
            <a href='/' className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300'><RiTwitterXFill className='w-5 h-5'/></a>
            <a href='/' className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300'><TiSocialFacebook className='w-5 h-5'/></a>
          </div>
            </div>

            {/* service */}
            <div className='space-y-4'>
                <h3 className='text-xl font-semibold'>Services</h3>
                <div className='space-y-3 text-gray-300'> 
                    <a href='/' className='block'>UI/UX Design</a>
                    <a href='/' className='block'>Web Development</a>
                    <a href='/' className='block'>Digital Marketing</a>
                    <a href='/' className='block'>React Development</a>
                </div>
            </div>
            {/* contact */}
            <div className='space-y-4'>
            <h3 className='text-xl font-semibold'>Contact Us</h3>
            <div className='space-y-3 text-gray-300'>
                <p>+44 454 7800 112</p>
                <p>engrxada@gmail.com</p>
                <p>6th road prince boys hostel, Rawalpindi</p>
               
            </div>
              
            </div>
              {/* subscrible */}
              <div className='space-y-4 lg:w-96'>
            <h3 className='text-xl font-semibold'>Subscribe</h3>
            <div className='space-y-3 text-gray-300'>
                <div className=' w-full'>
                    <input type='email' placeholder='example@gmail.com' className='newsletter_input'/>
                    <button className='newsletter_btn'>
                      <span>Send</span>
                    </button>
                </div>
            </div>
            </div>
         

        </div>
        <div className='h-12'></div>
        <hr className='border-gray-300'/>
        <div className='h-8'></div>

        {/* copyright text */}
        <div className='flex flec-col sm:flex-row justify-center pb-7'>
            <p>Copyright © 2024 Engr Taimoor Khan</p>
            <p>Terms of Use | Privacy Policy</p>
        </div>
    </div>
  )
}
