import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";

export const Services = ({id}) => {
  return (
    <div id={id}  className='text-white lg:px-24 px-4 mt-10'>
         <div className='h-36'></div>

         {/* services section  */}
         <div className='lg:flex lg:justify-between items-starts'>
               {/* content */}
               <div className='lg:w-1/3 space-y-5'>
                <h4 className='text-gray-200 font-semibold text-2xl'>What We Can Do</h4>
                <h2 className='text-5xl font-bold mb-5 leading-snug'>Services we can help you with</h2>
                <a href='' className='inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in'><span>See all services</span> <BsArrowRightShort /> </a>
               </div>

               {/* services cards  */}

               <div className='lg:w-2/3 my-8'>
                <div  className='flex flex-wrap'>
                <div className='lg:w-1/4 hidden lg:block'></div>
                <div className='service-card'>
                  <a href='/' className='rounded-2xl block relative'>
                    <img src='https://th.bing.com/th/id/OIP.Tu2IBxdUCA07r6wgzhEHywHaFp?w=1620&h=1234&rs=1&pid=ImgDetMain' alt='error image' className='rounded-2xl' />
                    <div className='absolute bg-dark left-0 top-0 opacity-50 h-full w-full rounded-2xl'></div>
                    {/* text  */}
                    <div className='absolute top-1/3 left-4 right-0'>
                      <span className='w-3 h-3 block rounded-full bg-orange mb-2'></span>
                      <h2 className='text-2xl font-bold text-white'>
                        UI/UX Design
                      </h2>
                    </div>
                  </a>

                </div>

                <div className='lg:w-1/4 hidden lg:block'></div>

                <div className='service-card'>
                  <a href='/' className='rounded-2xl block relative'>
                    <img src='https://th.bing.com/th/id/OIP.5A1YtQ48t3vvYZ7_TYkHOAHaHa?w=900&h=900&rs=1&pid=ImgDetMain' alt='error image' className='rounded-2xl' />
                    <div className='absolute bg-dark left-0 top-0 opacity-50 h-full w-full rounded-2xl'></div>
                    {/* text  */}
                    <div className='absolute top-1/3 left-4 right-0'>
                      <span className='w-3 h-3 block rounded-full bg-orange mb-2'></span>
                      <h2 className='text-2xl font-bold text-white'>
                        React JS Project
                      </h2>
                    </div>
                  </a>

                </div>
                <div className='service-card'>
                  <a href='/' className='rounded-2xl block relative'>
                    <img src='https://5.imimg.com/data5/YH/MJ/XL/SELLER-62572419/silver-pack-500x500.jpg' alt='error image' className='rounded-2xl' />
                    <div className='absolute bg-dark left-0 top-0 opacity-50 h-full w-full rounded-2xl'></div>
                    {/* text  */}
                    <div className='absolute top-1/3 left-4 right-0'>
                      <span className='w-3 h-3 block rounded-full bg-orange mb-2'></span>
                      <h2 className='text-2xl font-bold text-white'>
                        Digital Marketing
                      </h2>
                    </div>
                  </a>

                </div>
                <div className='service-card'>
                  <a href='/' className='rounded-2xl block relative'>
                    <img src='https://th.bing.com/th/id/OIP.JgZTixgY5htCWowt6_mr1QHaFj?rs=1&pid=ImgDetMain' alt='error image' className='rounded-2xl'/>
                    <div className='absolute bg-dark left-0 top-0 opacity-50 h-full w-full rounded-2xl'></div>
                    {/* text  */}
                    <div className='absolute top-1/3 left-4 right-0'>
                      <span className='w-3 h-3 block rounded-full bg-orange mb-2'></span>
                      <h2 className='text-2xl font-bold text-white'>
                        Technology
                      </h2>
                    </div>
                  </a>

                </div>
                </div>



               </div>

         </div>

         <div className='h-36'></div>
    </div>
  )
}
