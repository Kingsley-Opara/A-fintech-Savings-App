"use client"
import { GlobalStateProvider } from '../context';
import Image from 'next/image';
import SideMenu from './sidebar'
import React from 'react'
import Main from './main'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'
import { useEffect } from 'react';

function Dashboard() {
  const [showSideBar, setShowSideBar] = useState(false)
  // console.log(showSideBar)


  return (


  <main className="min-h-screen dark:bg-gray-900 dark:text-white bg-gray-100 text-black">
    <GlobalStateProvider>
      <div className='relative flex'>
        <div className='w-1/20'>
          <SideMenu show = {showSideBar}/>

        </div>
        
        <Main className='flex-1'/>
      </div>

    </GlobalStateProvider>
    

     

  </main>
      
  )
}

export default Dashboard

