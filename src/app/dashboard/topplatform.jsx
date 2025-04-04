"use client"
import React from 'react'
import { useState } from 'react'
import { platforms } from './data'


function TopPlatform() {
    const initialDisplayCount = 4

    const [toggle, setToggle] = useState(false)


    const toggleDisplay = () =>{
        console.log("Hello")
        setToggle(!toggle)
    }

    const displayItems = toggle ? platforms : platforms.slice(0, initialDisplayCount)
  return (
    <div className='p-4 dark:bg-gray-800 dark:text-white text-white bg-[#FD6F41]'>
        <div className='flex justify-between pb-2'>
            <p className='text-lg font-bold  dark:text-white'>Category</p>
            <p className='text-lg text-white font-light cursor-pointer' onClick={() => toggleDisplay()}>
                {toggle ? "See Less" : "See All"}
            </p>
        </div>
        {displayItems.map((platform) =>{
            return(
                <div className='mt-10' key={platform.id}>
                    <div className='flex flex-col space-y-3' >
                        <p>{platform.name}</p>
                        {
                            platform.color === "purple" &&
                            <div className='w-[100%] h-4 bg-gray-200 rounded-xl animate-pulse'>
                            <div className={`w-[60%] bg-purple-500 h-4 rounded-xl`}> </div>
                            
                            </div>
                        }
                        {
                            platform.color === "blue" &&
                            <div className='w-[100%] h-4 bg-gray-200 rounded-xl animate-pulse'>
                            <div className={`w-[50%] bg-blue-300 h-4 rounded-xl`}/>
                            
                            </div>
                        }
                        {
                            platform.color === "yellow" &&
                            <div className='w-[100%] h-4 bg-gray-200 rounded-xl animate-pulse'>
                            <div className={`w-[40%] bg-yellow-400 h-4 rounded-xl`}/>
                            
                            </div>
                        }
                        {
                            platform.color === "red" &&
                            <div className='w-[100%] h-4 bg-gray-200 rounded-xl animate-pulse'>
                            <div className={`w-[30%] bg-red-400 h-4 rounded-xl`}/>
                            
                            </div>
                        }
                        <div className='flex justify-between font-light'>
                            <span>{platform.cost}</span>
                            <span>{platform.extra}</span>
                        </div>
                    </div>
                </div>
            )

        })}
        

      
    </div>
  )
}

export default TopPlatform
