import React from 'react'
import img1 from '../../assets/img/boart.jpg'
import img2 from '../../assets/img/taj mahal.jpeg'
import img3 from '../../assets/img/underwater.jpeg'
import img4 from '../../assets/img/los angels.jpg'
import img5 from '../../assets/img/coxbazar.jpg'
import img6 from '../../assets/img/los vigas.jpeg'
import { IoLocateSharp } from 'react-icons/io5'

const PlaceData =[
    {
       img: img1,
       title: "Boart",
       location: "USA",
       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, earum!',
       price:100,
       type: "Cultural Relax"
      
    },
    {
        img: img2,
        title: "Taj Mahal",
        location: "India",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, earum!',
        price:6700,
        type: "Cultural Relax"
       
     },
     {
        img: img3,
        title: "Underwater",
        location: "US",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, earum!',
        price:300,
        type: "Cultural Relax"
       
     },
    {
        img: img4,
        title: "Los Angels ",
        location: "United States",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, earum!',
        price:100,
        type: "Cultural Relax"
       
     },
     {
        img: img5,
        title: "CoxBazar",
        location: "Bangladesh",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, earum!',
        price:100,
        type: "Cultural Relax"
       
     },
     {
        img: img6,
        title: "Los Vigas",
        location: "California",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, earum!',
        price:100,
        type: "Cultural Relax"
       
     }
]

const Place = ({handlePopup}) => {
  return (
    <div className='bg-gray-50 py-10 '>
    
        <div className='container pt-16 mx-auto '>
        <h1 className='text-3xl  font-bold my-8 border-l-8 border-primary/50 py-2 pl-2'>Best Places to Visit</h1>
           <div className=''>
           <div className='flex flex-wrap justify-center gap-6 '>
            {PlaceData.map((item,idx)=> (
                <div className='shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer max-w-xs w-full' key={idx}>
                    <div className='overflow-hidden'>
                        <img className='mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110' src={item.img} alt="" />
                    </div>
                    <div className='space-y-2 p-3'>
                        <h1 className='line-clamp-1 font-bold text-xl'>{item.title}</h1>
                        <div className='flex items-center gap-4 border-t-2 y-3 !mt-3'>
                         <IoLocateSharp/>
                         <span>{item.location}</span>
                        </div>
                        <p className='line-clamp-2'>{item.description}</p>
                        <div className='flex items-center justify-between border-t-2 y-3 !mt-3'>
                            <div className='opacity-70 '>
                                <p>{item.type}</p>
                            </div>
                            <div>
                                <p className='text-2xl font-bold'>${item.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
           </div>
           </div>
        </div>
        
    </div>
  )
}

export default Place