import React from 'react'
import { PorfolioSlider } from './PortfolioSlider'
   

export const Project = ({id}) => {
  return (
    <div>
    <div id={id} className='text-center pb-14 lg:px-24 pt-20'>
      <h4 className='text-gray-200 font-semibold text-2xl'>Latest Projects</h4>
      <h2 className='text-5xl font-bold leading-snug text-white'>Portfolio to explore</h2> 
    </div>

          {/* Carousel card */}
          <div className='lg:px-24 px-4 overflow-hidden'>

          <PorfolioSlider />

          </div>

          <div className='md:h-24 h-12'></div>

    </div>
  )
}
