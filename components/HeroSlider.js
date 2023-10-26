import React from 'react';
//import swiper react components
import { Swiper,SwiperSlide } from 'swiper/react'
//import swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
//import required modules

import { EffectFade,Autoplay } from 'swiper'

import Img1 from '../assets/img/heroSlider/1.jpg' 
import Img2 from '../assets/img/heroSlider/2.jpg' 
import Img3 from '../assets/img/heroSlider/3.jpg' 
import ScrollToTop from './ScrollToTop';

const slides=[
  {
    title:'Your Luxury Hotel for Vacation',
    bg:Img1,
    btnText:'See Our Rooms',
  },
  {
    title:'Your Luxury Hotel for Vacation',
    bg:Img2,
    btnText:'See Our Rooms',
  },
  {
    title:'Your Luxury Hotel for Vacation',
    bg:Img3,
    btnText:'See Our Rooms',
  },
]

const HeroSlider = () => {

  
  return (
    <div>
    <Swiper modules={[EffectFade,Autoplay]} effect={'fade'} Loop={true} autoplay={{ delay:3000,disableOnInteraction:false }} className='heroSlider h-[400px] lg:h-[660px] bg-black'>
      {
        slides.map((slide,index)=>{

          //destructure slide
          const {title,btnText}= slide;
          return(
            <SwiperSlide className='h-full  relative flex justify-center items-center' key={index}>
              <div className='z-20 text-white text-center'>
                <div className='uppercase font-tertiary tracking-[6px] mt-5 lg:mt-0 mb-5'>Just Enjoy And Relax</div>
                <h1 className='font-primary text-[32px] uppercase max-w-[920px] lg:text-[68px] leading-tight mb-6'>
                  {title}
                </h1>
                <button className='btn btn-large btn-primary mx-auto h-full lg:h-[50px]'>
                  {btnText}
                </button>
              </div>
              <div className='absolute top-0 w-full h-full'>
                <img className='object-cover h-full w-full' src={slide.bg} alt='room photos'/>
              </div>

              {/* overlay */}
              <div className='absolute w-full h-full bg-black/70'>

              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
    <ScrollToTop/>
    </div>
  )
};

export default HeroSlider;
