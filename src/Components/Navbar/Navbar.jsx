import React, { useState } from 'react'
import logo from '../../assets/img/logo.png'
import { NavLink } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'

const dropdown = [
    {
        name: "Services",
        link: "/#services"
    },
    {
        name: "Top brands",
        link: "/#mobile-brands"
    },
    {
        name: "Location",
        link: "/#location"
    },
]
const Navbar = ({handlePopup}) => {
    const [showMenu,setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
  return (
    <div>
        <div className='fixed top-0 right-0 w-full bg-white text-black shadow-md z-[99999]'>
         <div className='bg-gradient-to-r from-primary to-seconsary text-white'>
         <div className='container py-1 sm:block'>
                <div className='flex justify-between px-4 '>
                    <p>20% off on next booking</p>
                    <p>Mobile No. +88 10396508945</p>
                </div>
            </div>
         </div>
         <div className='container py-3 sm:py-0'>
              <div className='flex justify-around'>
                {/* logo section */}
                <div>
                  
                    <img className=' h-16' src={logo} alt="" />
                   

                </div>
                {/*navlink section */}
                <div className='my-auto hidden md:block'>
                    <ul className='flex gap-6 '>
                    <li>
                        <NavLink to={'/'} onClick={()=> window.scrollTo(0, 0)}  className={({isActive,ispending})=> ispending? "pending" : isActive ? "text-[#0287a8] underline" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/blogs'} onClick={()=> window.scrollTo(0, 0)}className={({isActive,ispending})=> ispending? "pending" : isActive ? "text-[#0287a8] underline" : ""}>Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/places'} onClick={()=> window.scrollTo(0, 0)}className={({isActive,ispending})=> ispending? "pending" : isActive ? "text-[#0287a8] underline" : ""}>Best Places</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'} onClick={()=> window.scrollTo(0, 0)}className={({isActive,ispending})=> ispending? "pending" : isActive ? "text-[#0287a8] underline" : ""}>About</NavLink>
                    </li>
                    {/*dropdown section */}
                  <li className=' relative group cursor-pointer'>
                    <div className='dropdown group flex items-center'>
                        <span>Quick links</span>
                        <span>
                            <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
                        </span>
                    </div>
                    <div className='absolute -left-9 z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2'>
                        <ul>
                    {
                        dropdown.map((data)=> {
                          return(
                            <li key={data.name}>
                            <a className='inline-block w-full rounded-md p-2 hover:bg-primary/20' href={data.link}>{data.name}</a>
                               </li>
                          )
                      })

                    }
                        </ul>
                    </div>
                    <div>
                        
                    </div>
                  </li>
                    </ul>
                </div>
                {/*book now button */}
                <div className='my-auto flex items-center gap-4'>
                    <button onClick={()=>handlePopup()} className='
                    bg-gradient-to-r from-primary to-seconsary hover:bg-gradient-to-r hover:from-seconsary hover:to-primary translate-all duration-600 text-white px-3 py-1 rounded-full'>Book Now</button>
                    {/* mobile menubar */}
                    <div className='md:hidden block'>
                        {showMenu? (
                         <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer translate-all' size={30}/>
                        ):(
                        <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer translate-all' size={30}/>
                        )
                    }
                    </div>
                </div>
              </div>
         </div>
         <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu}/>
        </div>
    </div>
  )
}

export default Navbar