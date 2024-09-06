import React from 'react'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const navbarLinks = [
    {
        name:"Home",
        link: "/"
    },
    {
        name:"About",
        link: "/about"
    },
    {
        name:"Blogs",
        link: "/blogs"
    },
    {
        name:"Best Places",
        link: "/places"
    },
]
const ResponsiveMenu = ({showMenu, setShowMenu}) => {
  return (
    <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed buttom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}>
        <div className='Navbar_card'>
           {/*top section */}
         <div>
         <div className='flex justify-start items-center gap-4'>
            <FaUser className='text-gray-500' size={50}/>
            <div className='text-gray-500'>
                <h1>Hello User</h1>
                <p className='text-sm'>Premiun User</p>
            </div>
           </div>
         </div>
           {/*Navlinks section */}
           <div className='text-black mt-12'>
            <ul className='space-y-4 text-xl'>
                {navbarLinks.map(({name,link})=> (
                    <li key={name}>
                        <Link onClick={()=>setShowMenu(false)} className='mb-5 inline-block' to={link}>
                        {name}
                        </Link>
                    </li>
                ))}
            </ul>
           </div>
        </div>

    </div>
  )
}

export default ResponsiveMenu