import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Home = ({id}) => {
  return (
    <div id={id} className='banner cs-style1' >
         {/* css shapes */}
         <div className='cs-shapes_1'></div>
         <div className='cs-shapes_1'></div>
         <div className='cs-shapes_1'></div>

         {/* banner content */}
         <div className='px-4 lg:px-24'>
          <h1 className='md:w-2/3 lg:text-8xl sm:text-6xl text-5xl mb-5 text-white font-bold lg:leading-snug sm:leading-snug leading-snug'>Creativity In Our Blood Line</h1>

          {/* banner btn and text */}
          <div className='text-white text-lg flex md:flex-row flex-col-reverse md:items-center items-start justify-between gap-8'>
            <div>
              <a href='' className='inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in'><span>Get a Quote</span> <BsArrowRightShort /> </a>
            </div>
            <div className='md:w-1/2  cursor-pointer z-50'>
              <p>we deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future</p>
            </div>
          </div>
         </div>
         
    </div>
  )
}

export default Home