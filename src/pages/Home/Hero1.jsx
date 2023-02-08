import React from 'react'
import buddha from '../../assets/buddha.jpg'

function Hero1() {
  return (
    <div className='min-h-screen w-screen overflow-hidden z-0 relative'>
        <div className='w-full h-full absolute '>
            {/* <img className='w-full' src={'https://ktla.com/wp-content/uploads/sites/4/2022/10/GettyImages-805157508.jpg?strip=1'}/> */}
            <img className='w-full' src={buddha}/>
        </div>
        <div className='w-full h-full absolute bg-gradient-to-b from-blue2/50 to-blue2/50'></div>
        <div className='w-full h-screen absolute text-center flex items-center justify-center z-10 poppins px-16'>
            <h1 className='text-[7rem] tracking-wider max-w- saonara text-center font-bold leading-[12rem] text-white font-bold'>HOLIDAY INN EXPRESS & SUITES</h1>
        </div>
    </div>
  )
}

export default Hero1