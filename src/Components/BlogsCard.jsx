import React, { useEffect, useState } from 'react'

export const BlogsCard = () => {
            const [blogs,setBlogs]=useState([]);
            useEffect(()=>{ 
            fetch("blogpost.json").then(res=> res.json()).then(data=> setBlogs(data));
            },[])
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
        {
            blogs.slice(0,3).map(blog=> <div key={blog.id} className='relative cursor-pointer rounded-xl'>
            <img src={blog.image} alt='error image' />
            <div>
                <p className='px-3 mb-2 text-base'>{`${blog.date} ${blog.month} ${blog.year}`}</p>
                <h4 className='mb-4 text-lg font-semibold px-3'>{blog.title}</h4>
            </div>
            </div>)
        }
    </div>
  )
}
