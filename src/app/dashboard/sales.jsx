"use client"
import React from 'react'
import Image from 'next/image'
// import icon from '../images/icon.jpg'
// import greenArrow from '../images/line1.jpg'
// import smallGreen from '../images/smallGreen.png'


function Sales({icon, arrow, smallArrow, sale, color, name}) {
  return (
    <div className='flex space-x-1 h-[12rem] bg-white w-[14rem] pl-2 pr-2 pt-2 
    dark:bg-gray-800 dark:border-white dark:border-solid text-black 
    dark:rounded-2xl dark:border-2 max-md:p-3 dark:text-white'>
      <div className='flex flex-col space-y-3 dark:text-white'>
        
        <Image src={icon} alt ={"some"} className='dark:bg-black dark:text-black rounded-3xl fill-current dark:opacity-80  dark:mix-blend-difference'/>
        
        
        <h6 className='text-sm font-light'>{name}</h6>
        <h4 className='font-semibold text-xl'>${sale}</h4>
        <div className='flex space-x-2'>
            <div className=
            {
              color ? 'w-[4.5rem] flex space-x-1 h-7 rounded-[5rem] pt-1 pb-1 pl-2 pr-3 bg-green-100' : 
              'w-[4.5rem] flex space-x-1 h-7 rounded-[5rem] pt-1 pb-1 pl-2 pr-3 bg-red-100'

              }>
                <Image src={smallArrow} className='object-contain' alt='s'/>
                <h6 className={
                  color ? 'text-sm text-green-400 font-semibold mb-2' :  'text-sm text-red-400 font-semibold mb-2'
                  }>23.5%</h6>
                
                
            </div>
            <p className='text-sm font-light mt-1'>vs.</p>

        </div>

        
      </div>
      <div className='pt-2 flex flex-col'>
        <Image src={arrow} className='dark:bg-black dark:text-black dark:opacity-70' alt='th'/>
        <div className='mt-[5.48rem]'>
            <p className='text-sm font-light'>previous month</p>

        </div>

      </div>
    </div>
  )
}

export default Sales
