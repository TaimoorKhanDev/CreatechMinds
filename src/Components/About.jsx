import React from 'react'


const About = ({id}) => {
  return (
    <div id={id} className='text-white md:-mt-[100px] bg-gradient-to-r from-gray-600 from-[#161616] to-[#080808] lg:mx-24 md:py-20 mx-4 py-12 md:px-16 px-6 rounded-xl z-50 flex flex-col md:flex-row justify-between md:items-center gap-12 relative'>

          {/* left side text */}
          <div>
            <h2 className='text-5xl font-bold mb-5'>Our Fun Fact</h2>
            <p className='text-gray-300 '>Welcome to [Arino]!<br/>
At [Arino], we believe in the power of creativity and innovation. <br/>Our mission is to deliver exceptional digital solutions that empower businesses to thrive in the ever-evolving online landscape.</p>
          </div>

          {/* right side text */}
          <div className='md:w-3/5'>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-8'>
             <div className='flex h-auto items-center gap-3'>
              <h4 className='md:text-5xl text-3xl font-semibold'>40K</h4>
              <div>
                <span className='text-orange font-bold text-lg'>+</span>
                <p className='mb-2 text-sm leading-tight text-gray-300'>Global Happy Clients</p>
              </div>         
             </div>

             <div className='flex h-auto items-center gap-3'>
              <h4 className='md:text-5xl text-3xl font-semibold'>40K</h4>
              <div>
                <span className='text-orange font-bold text-lg'>+</span>
                <p className='mb-2 text-sm leading-tight text-gray-300'>Global Happy Clients</p>
              </div>         
             </div>

             <div className='flex h-auto items-center gap-3'>
              <h4 className='md:text-5xl text-3xl font-semibold'>40K</h4>
              <div>
                <span className='text-orange font-bold text-lg'>+</span>
                <p className='mb-2 text-sm leading-tight text-gray-300'>Global Happy Clients</p>
              </div>         
             </div>

             <div className='flex h-auto items-center gap-3'>
              <h4 className='md:text-5xl text-3xl font-semibold'>40K</h4>
              <div>
                <span className='text-orange font-bold text-lg'>+</span>
                <p className='mb-2 text-sm leading-tight text-gray-300'>Global Happy Clients</p>
              </div>         
             </div>



            </div>
          </div>
      </div>
  )
}

export default About