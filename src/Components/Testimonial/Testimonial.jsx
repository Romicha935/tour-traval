import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const testimonialData = [
    {
        id:1,
        name: "Mahmud Hasan",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus, harum error fuga quos nihil?',
        img: 'https://i.ibb.co/BV6LCdd/instractor.jpg'
       
    },
    {
        id:2,
        name: "Smith",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus, harum error fuga quos nihil?',
        img:  'https://i.ibb.co/f0vCW6M/test3.jpg'
        
    },
    {
        id:3,
        name: "Mark Zuckerber",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellendus, harum error fuga quos nihil?',
        img: 'https://i.ibb.co/8P05LJ3/Mark-Zuckerberg.jpg'
    },
]
const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
  return (
    <div className='py-10 pl-32 px-10'>
        <div className='container'>
            {/*header section*/}
            < div className='text-center mb-20 max-w-[400px] mx-auto'>
                <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-seconsary'>Testimonial</p>
                <h1 className='text-3xl font-bold'>Testimonial</h1>
                <p className='text-xs text-gray-400'>{''} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus exercitationem recusandae architecto mollitia iure aut veritatis nobis deserunt asperiores </p>
            </div>
            {/*testimonial section */}
            < div className='grid grid-cols-1 mx-auto max-w-[800px] gap-6'>
             <Slider {...settings}>
                {testimonialData.map(({id,name,text,img})=> (          <div key={id} className='my-6'>
                       <div className='flex flex-col justify-center items-center gap-4 text-center mx-4 p-4 shadow-lg rounded-xl bg-primary/10 relative'>
                        <img className='h-16 w-16 rounded-full block object-cover' src={img} alt="" />
                        < h1 className='text-xl font-bold'>{name}</h1>
                        <p className='text-sm text-gray-500'>{text}</p>
                        <p className='text-black/20 text-9xl font-serif absolute top-15 right-0'> ’’ </p>
                       </div>
                    </div>
                ))}
             </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonial