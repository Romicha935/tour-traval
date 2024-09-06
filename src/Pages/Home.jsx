import React from 'react'
import seatour from '../assets/video/seatour.mp4'
import Hero from '../Components/Hero/Hero'
import Place from '../Components/Place/Place'
import BannerImg from '../Components/BannerImg/BannerImg'
import Blogs from './Blogs'
import Banner from '../Components/Banner/Banner'
import Banner2 from '../Components/Banner/Banner2'
import Testimonial from '../Components/Testimonial/Testimonial'
import Popup from '../Components/Popup/Popup'
//import bgImg from '../assets/img/cover-women.jpg'
const Home = () => {
  const [orderPopup,setOrderPopup] = React.useState(false)

  const handlePopup = () => {
    setOrderPopup(!orderPopup)
  }
  return (
    <div>
      
      <div>
        <div className='relative h-[600px]'>
          <video src={seatour} autoPlay
          loop
          muted className='absolute right-0 top-0 h-[600px] w-full object-cover z-[-1]'>
            <source src={seatour} type='video/mp4' />
          </video>
          <Hero/>
        </div>
        <Place handlePopup={handlePopup}/>
        <BannerImg />
        <Blogs/>
        <Banner/>
        <Banner2/>
        <Testimonial/>
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </div>
  )
}

export default Home