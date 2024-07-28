import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { GiPumpkinLantern } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [show, setShow] = useState(false)

  const handleToggle = () => {
    setShow ((prev)=>!prev)
  }
  return (
    <>
        <div className='flex justify-between px-20 py-5 shadow-sm bg-gray-800 text-white items-center '>
          <div className='flex justify-normal items-center gap-4'>
          <GiPumpkinLantern color='orange' size='50'/>
            <h1 className='text-[20px] font-thin tracking-wider '>RottenPlumpkin</h1>
          </div>

          <div>
            <NavLink to='' className='sm:hidden '><FaHome size='30'/></NavLink>
            {show ? <button onClick={handleToggle} className='hidden sm:flex sm:ml-8'><IoClose size='30'  /></button> : <button onClick={handleToggle} className='hidden sm:flex sm:ml-8'><VscThreeBars size='30'  /></button>
          } 
            
            <div>

            
            </div>
            
          </div>
          
        </div>
        {show && <div className='bg-gray-700 w-[32%] right-0 py-2 absolute hidden sm:flex'>
            <div className='flex flex-col text-white px-2'>
            <NavLink to=''>Home</NavLink>
            <NavLink to=''>Follow Us</NavLink>
            <NavLink to=''>More About Us</NavLink>
            </div>
          </div>}

          
    </>
  )
}

export default Header
