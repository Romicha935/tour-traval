import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
//import { useActionData } from 'react-router-dom';


const Hero = () => {
    const [destination,setDestination] = useState('')
    const [priceValue, setPriceValue] = React.useState(150)
    const [date , setDate] = useState('')
    const [searchResults, setSearchResults] = useState(null);

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Animation easing
        });
      }, []);

      const handleSearch = () => {
   const results = {
    destination,
    date,
    price: priceValue
   }
        setSearchResults(results)
      }
  return (
    <div className='bg-black/20 h-full'>
        <div className='h-full flex  justify-center items-center p-4 bg-primary/10'>
            <div className='container grid grid-cols-1 gap-4'>
                {/*text content section */}
                <div className='text-white'>
                    <p data-aos='fade-up'>Our Packages</p>
                    <p data-aos='fade-up' data-aos-delay='400' className='font-bold text-3xl'>Search Your Destination</p>
                </div>
                {/*from section */}
                <div data-aos='fade-up' data-aos-delay='600' className='bg-white rounded-md p-4 relative'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4  py-3'>
                        <div>
                            <label htmlFor="destination" className='opacity-70 block'>Search Your Destination</label>
                            <input      id='destination'
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)} type="text" name='destination' placeholder='coxbazar' className='w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2'/>
                        </div>
                     
                        <div>
                            <label htmlFor="date" className='opacity-70'>
                             Date
                            </label>
                            <input  id='date'
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)} type="date" name='destination' className='w-full !placeholder-slate-400 bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2'/>
                          
                        </div>
                        <div>
                            <label htmlFor="price" className='opacity-70'>
                              <div className='w-full flex justify-between items-center'>
                              <p>Max Price</p>
                              <p className='font-bold text-xl'>${priceValue}</p>
                              </div>
                            </label>
                            <div className='bg-gray-100 rounded-full p-2 flex items-center justify-center'>
                            <input type="range" name='destination' id='destination' className='appearance-none w-full bg-gradient-to-r from-primary to-seconsary h-2 my-2 range rounded-full p-2' min='150'
                            max='1000' value={priceValue} step='10' onChange={(e)=>setPriceValue(e.target.value)}/>
                            </div>
                          
                        </div>
                    
                        
                    </div>

                    {/*button section */}
                    <button onClick={handleSearch} className='bg-gradient-to-r from-primary to-seconsary text-white hovar:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2'>Search Now</button>
                </div>
                  {/*search result  */}
                {searchResults && (
                        <div className='mt-8 bg-white space-y-3 p-4 rounded-md shadow-md'>
                        <div className='text-center space-y-2'>
                        <h2 className='text-xl font-bold'>Search Results</h2>
                            <p><strong>Destination:</strong> {searchResults.destination}</p>
                            <p><strong>Date:</strong> {searchResults.date}</p>
                            <p><strong>Max Price:</strong> ${searchResults.price}</p>
                        </div>
                        </div>
                    )}
            </div>
        </div>
    </div>
  )
}

export default Hero