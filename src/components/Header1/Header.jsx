import React from 'react'
import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='fixed saonara px-16 py-4 top-0 left-0 z-10 flex w-full items-center justify-between'>
        <div className='w-28'>
            <img className='w-full' src={Logo}/>
        </div>
        <div className='flex gap-4 text-lg font-light'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>About</NavLink>
            <NavLink to='/'>Location</NavLink>
            <NavLink to='/'>Rooms</NavLink>
            <NavLink to='/'>Amenities</NavLink>
            <NavLink to='/'>Packages</NavLink>
        </div>
    </div>
  )
}

export default Header