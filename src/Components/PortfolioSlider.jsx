import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

export const PorfolioSlider = ({id}) => {

        const data = [
          {title:"Colorful Art Work", subtitle:"See Details", image:"https://www.contentwriting101.com/wp-content/uploads/2020/09/Build-Your-Portfolio.png"},
          {title:"Colorful Art Work", subtitle:"See Details", image:"https://th.bing.com/th/id/R.9ee2671d743fc13de66e7a08f18170d2?rik=KgaEMa0Aeb2eKg&pid=ImgRaw&r=0"},
          {title:"Colorful Art Work", subtitle:"See Details", image:"https://th.bing.com/th/id/OIP.vm1dYvfYFUwu5dnjb9RiwgHaE0?rs=1&pid=ImgDetMain"},
          {title:"Colorful Art Work", subtitle:"See Details", image:"https://th.bing.com/th/id/R.328bc2b65ac23046a0fa5ad7c822c528?rik=FbsGNyFmBabxxA&pid=ImgRaw&r=0"},
          {title:"Colorful Art Work", subtitle:"See Details", image:"https://th.bing.com/th/id/OIP.yckFkG7V9rOV3sVRT3W3ywHaEo?rs=1&pid=ImgDetMain"}
        ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
     <div id={id}> 
      <Slider {...settings}>
      {
        data.map((item, index) =><Link key={index} to="/" className='relative'>
          <div className='absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl'></div>
          <div>
            <img src={item.image} alt='error image' />
          </div>
          <div className='absolute top-0 left-0 hover:bg-orange/80 w-full h-full flex items-center justify-center rounded-2xl cursor-pointer'>
            <div className='text-center'>
              <h2 className='text-2xl font-semibold mb-1 text-white'>{item.title}</h2>
              <p className='text-white'>{item.subtitle}</p>
            </div>
          </div>
        </Link>)
      }
      </Slider>
      </div>
  );
};
