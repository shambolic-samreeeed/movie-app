import React from 'react'
import {NavLink} from 'react-router-dom'
import { GiPumpkinLantern } from "react-icons/gi";

const Header = () => {
  return (
    <>
        <div className='flex justify-between px-20 py-5 shadow-sm bg-gray-800 text-white items-center '>
          <div className='flex justify-normal items-center gap-4'>
          <GiPumpkinLantern color='orange' size='50'/>
            <h1 className='text-[20px] font-thin tracking-wider'>RottenPlumpkin</h1>
          </div>

          <div>
            <NavLink to=''>Home</NavLink>
          </div>
        </div>
    </>
  )
}

export default Header
