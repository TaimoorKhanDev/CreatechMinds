import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import { BlogsCard } from './BlogsCard';

export const Blogs = ({ id }) => {
  return (
    <div id={id} className='text-white lg:px-24 px-4'>
      <div>
        <h2 className='text-4xl font-bold text-center leading-snug lg:w-4/6 mx-auto pt-20'>Our agile process is ability to adopt and respond to change. Agile organization view change as an opportunity, not a threat.</h2>


        {/* video player */}
        <a href="/">
          <div className="relative flex justify-center items-center cursor-pointer cs-video_block cs-style1 cs-video_open group">
            <iframe
              className="rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-80"
              width="1000"
              height="650"
              src="https://www.youtube.com/embed/gmp0istg5xo"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

        </a>


      </div>
      <div className='h-28'></div>

      {/* main blog */}
      <div className='relative '>
        <div className='flex flex-col lg:flex-row justify-between lg:items-center gap-12'>
          {/* content */}
          <div className='lg:w-1/3 space-y-5'>
            <h4 className='text-gray-200 font-semibold text-2xl'>Our Blog</h4>
            <h2 className='text-5xl font-bold mb-5 leading-snug text-white'>Explore recent </h2>
            <a href='' className='inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in'><span>View more Blogs</span> <BsArrowRightShort /> </a>
          </div>

          {/* card */}
          <div className='lg:w-2/3 my-8'>
            {/* Lines */}
            <div className='flex mb-10'>
              <div className='h-8 w-1/3 rounded-s-2xl bg-white'></div>
              <div className='h-8 w-1/2 bg-red-700'></div>
              <div className='h-8 w-1/3 bg-blue-700'></div>
              <div className='h-8 w-1/2 rounded-e-2xl bg-orange'></div>
            </div>

            {/* blogs card */}
            <BlogsCard />
          </div>

        </div>
      </div>
    </div>
  )
}
