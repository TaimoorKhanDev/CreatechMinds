import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";

export const Contact = ({id}) => {
  return (
    <div id={id} className='lg:px-24 pt-36'>
      <div className='relative bg-[url(https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-cover h-96 rounded-xl'>


        {/* cta text */}
        <div className='h-full flex items-center justify-center'>
          <div className='lg:w-1/2 mx-auto text-center px-4'>
            <h2 className='lg:text-5xl text-3xl text-white font-bold lg:leading-snug leading-normal mb-6'>Let's discuss something <span className='italic'> cool </span>together</h2>
            <a href='' className='inline-flex items-center gap-2 font-semibold text-white hover:text-orange transition-all duration-300 ease-in'><span >Get a Quote</span> <BsArrowRightShort /> </a>
          </div>
        </div>
      </div>
    </div>
  )
}
