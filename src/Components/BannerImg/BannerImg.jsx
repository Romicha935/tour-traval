import React from 'react'
import img from '../../assets/img/cover-women.jpg'

const BannerImg = () => {
    const bgImg = {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%", // Ensure it takes the full width
     
    }
  return (
    <div data-aos='zoom-in' className='py-5  w-full' style={{...bgImg,height: "400px", }}>
    
    </div>
  )
}

export default BannerImg