"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import logo from "./images/logo.png"
import divide from "./images/divide.png"
import exclaim from "./images/exclaim.png"
import { FaCartArrowDown } from "react-icons/fa";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useGlobalState } from '../context';
import { CiLight } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
import { MdInventory2 } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import Link from 'next/link';

function SideMenu({}) {
  const {theme, toggleTheme, showSideBar, setShowSideBar} = useGlobalState()

  
  const handleToggle = () =>{
    toggleTheme()


  }
  return (
    <Sidebar
    width='95px'
    className={
      showSideBar ? 'scrollbar-hide top-0 left-0 z-50 max-md:w-[40px]  h-[300vh] dark:bg-gray-800 dark:text-white bg-white': 
      'h-[400vh] max-md:w-[40px] max-md:hidden dark:bg-gray-800 dark:text-white bg-white  scrollbar-hide'}

    
    >
          <Menu className={`dark:bg-gray-800 bg-white dark:text-white ${showSideBar ? 'h-[400vh]': 'h-[500vh]'}`}>
            <MenuItem className='pt-4'  component={<Link href={"/dashboard"} />}>
              <MdDashboard className='text-xl text-[#FD6F41]'/>
              
              


            </MenuItem>
            <MenuItem className='' component={<Link href={"/savings"}/>}>
              <div data-tooltip-id="my-tooltip">
                <FaCartArrowDown className='text-xl'/>
                <Tooltip id="my-tooltip" place="top" content="Savings" />
              </div>
            </MenuItem>
            <MenuItem className='' component={<Link href={"/investment"} />}>
              <div data-tooltip-id="my-investment">
                <MdInventory2 className='text-xl'/>
                
                <Tooltip id="my-investment" place="top" content="Investment" />
              </div>
            </MenuItem>
            <MenuItem className=''>
              <div data-tooltip-id="my-remibursement">
                <IoChatbubbleEllipsesOutline className='text-xl'/>
                <Tooltip id="my-remibursement" place="top" content="Remibursement" />
              </div>
              
            </MenuItem>
            <div className='mt-10'>
              <p className='text-sm text-gray-700 dark:text-gray-200 ml-2'>Others</p>
              <MenuItem className=''>
                <div data-tooltip-id="my-account">
                  <RiAccountCircleLine className='text-xl'/>
                  <Tooltip id="my-account" place="top" content="Account" />
                </div>
              </MenuItem>
              <MenuItem className=''>
                <div data-tooltip-id="my-payments">
                  <MdOutlinePayments className='text-xl'/>
                  <Tooltip id="my-payments" place="top" content="Payments" />
                </div>

              </MenuItem>


            </div>
            

            <div className=' mt-10 self-center ml-3 rounded-3xl bg-white w-fit  flex flex-col 
            space-y-2 p-2 dark:bg-black h-full shadow-md'>
                <CiLight className='text-gray-500 text-2xl cursor-pointer' onClick = {() => handleToggle()}/>
                <DarkModeIcon className='text-gray-500 cursor-pointer' onClick = {() => handleToggle()}/>

            </div>
            

        </Menu>

        {/* <Menu
        rootStyles={{
          [`.${menuClasses.container}`]: {
            backgroundColor: "#FAFAFA"

          }
        }}
        className='mt-6 relative'
        >
          <button className='h-20 w-9 rounded-2xl bg-white ml-[1rem] '> 
            <Image src={star} alt='star' className='h-6 w-6 absolute top-2 left-[1.5rem]'/>
          </button>
          

        </Menu> */}
    </Sidebar>
  )
}

export default SideMenu
