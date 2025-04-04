"use client"
import React from 'react'
import "./dashboard.css"
import SearchIcon from '@mui/icons-material/Search';
import Datepicker from "tailwind-datepicker-react"
import DemoComponent from './datetime';
import bell from './images/solar-bell.jpg';
import dp from './images/dp.png';
import Image from 'next/image';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chart from './chart';
import Sales from './sales';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useGlobalState } from '../context';
import CloseIcon from '@mui/icons-material/Close';
import { CiSearch } from "react-icons/ci";



function Navbar() {
    const {showSideBar, setShowSideBar} = useGlobalState()

    const handleClick = () => {
        setShowSideBar(!showSideBar)
    }
  return (
    <nav className='ml-5 mt-4 max-md:ml-0 max-md:mt-7 flex place-content-evenly'>
        <div className='flex space-x-[17rem] max-md:space-x-[0rem] justify-between'>
            <div className='flex justify-between'>
                <h3 className='text-2xl mt-3 max-md:text-xl max-sm:mt-0 max-sm:text-sm max-md:ml-3'>Dashboard</h3>
               


            </div>
            
            <div className='mt-3 ml-auto flex space-x-7 max-md:space-x-4 max-md:hidden '>
                <div className='relative bg-white text-black dark:bg-gray-800 
                dark:text-white max-lg:hidden h-10'>
                    <SearchIcon className= "absolute top-1 left-2"/>
                    <input type="text" className='h-9 w-[18rem] rounded-xl p-3 pl-10 
                    max-md:w-[11rem] text-black bg-white dark:bg-gray-800 dark:text-white' placeholder='Search...'/>
                </div>

               
                



                <div className ="mt-0 flex space-x-5 pr-4">
                    <div className='rounded-full bg-white w-[42px] h-[40px] text-black dark:bg-gray-800 dark:text-white'>
                        <NotificationsNoneIcon className='cursor-pointer mt-2 text-[1.8rem] pl-2'/>

                    </div>
                    
                    <div className="rounded-2xl border-white bg-white pl-4 pr-4 pt-1 
                    flex space-x-2 max-md:hidden dark:bg-gray-800 dark:text-white text-black">
                        <Image src={dp} alt='dp' className='h-8 w-8 mt-1'/>
                        <div className="flex flex-col">
                            <div className='text-md font-semibold'>Justin Bergson</div>
                            <div className='text-sm flex'>
                                justin@gmail.com
                                

                            </div>
                        

                        </div>
                        <ExpandMoreIcon className='cursor-pointer'/>

                    </div>
                </div> 

                             
                
            </div>
        
            
        </div>

        <div className='md:hidden cursor-pointer ml-[10rem] mt-1'>
            {!showSideBar ?<MenuOpenIcon onClick = {() => handleClick()} className='fixed'/>: 
                <CloseIcon onClick = {() => handleClick()} className='fixed'/>}
        </div>
        

    </nav>
  )
}

export default Navbar
