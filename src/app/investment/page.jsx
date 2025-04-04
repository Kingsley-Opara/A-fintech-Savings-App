"use client"
import { GlobalStateProvider } from '../context';
import MainPage from './MainPage';
import React from 'react'
import { useState } from 'react'

import SideMenu from '../dashboard/sidebar';

function Dashboard() {
  const [showSideBar, setShowSideBar] = useState(false)
  // console.log(showSideBar)


  return (


  <main className="min-h-screen dark:bg-gray-900 dark:text-white bg-gray-100 text-black w-full">
    <GlobalStateProvider>
        <div className='relative flex'>
            <div className='w-1/20'>
                <SideMenu show = {showSideBar}/>

            </div>
            <MainPage className='flex-1'/>
            
        </div>




    </GlobalStateProvider>
    

     

  </main>
      
  )
}

export default Dashboard

