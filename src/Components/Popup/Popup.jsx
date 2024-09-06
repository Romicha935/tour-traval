import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const Popup = ({orderPopup,setOrderPopup}) => {
  return (
    <div className='popup'>
        {orderPopup && 
        <div className='h-screen w-screen top-0 fixed bg-black/20 left-0 z-50 backdrop-blur-sm'>
            <div className='fixed left-1/2 -translate-x-1/2 translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md md:w-64 '>
                {/*header */}
                <div className='flex items-center justify-between'>
                <div className=''>
                        <h1>Book Your Trip</h1>
                    
                    </div>
                    <div>
                        <IoCloseOutline onClick={()=>setOrderPopup(false)}/>
                    </div>
                </div>
                {/*body */}
                <div className='mt-4'>
                    <input className='w-full rounded-full border border-gray-400 px-2 mb-4 py-2' type="text" placeholder='name ' />

                    <input className='w-full rounded-full border border-gray-400 px-2 mb-4 py-2' type="email" placeholder='email ' />

                    <input className='w-full rounded-full border border-gray-400 px-2 mb-4 py-2' type="text" placeholder='address' />
                    <div className='flex items-center justify-center'>
                    <button className='bg-gradient-to-r from-primary to-seconsary py-1 px-4 text-white rounded-full'>Book Now</button>
                    </div>
                </div>
                
            </div>
            </div>
            }
    </div>
  )
}

export default Popup