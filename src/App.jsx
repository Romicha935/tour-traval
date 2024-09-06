import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Outlet, Route, Router, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Blogs from './Pages/Blogs'
import BlogDetails from './Pages/BlogDetails'
import Popup from './Components/Popup/Popup'

function App() {
  const [orderPopup,setOrderPopup] = useState(false)

  const handlePopup = () => {
    setOrderPopup(!orderPopup)
  }

  return (
    <div>
     <Navbar handlePopup={handlePopup}></Navbar>
     <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
     <Outlet></Outlet>
     <Footer/>
    
    </div>
  )
}

export default App
