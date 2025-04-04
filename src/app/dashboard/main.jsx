"use client"
import React, { useEffect } from 'react'
import "./dashboard.css"
import Chart from './chart';
import Sales from './sales';
import Navbar from './navbar';
import icon from './images/icon.jpg'
import greenArrow from './images/line1.jpg'
import smallGreen from './images/smallGreen.png'
import icon2 from './images/icon2.jpg'
import line2 from './images/line2.jpg'
import smallRed from './images/smallRed.jpg'
import icon3 from './images/icon3.jpg'
import icon4 from './images/icon4.jpg'
import LastOrders from './lastOrders';
import TopPlatform from './topplatform';
import { useState } from 'react';



// const datepicker = new Datepicker()

function Main() {
  const exp = 1278
  const sal = 10000
  const gre = 700
  const rem = 500
  const [expenses, setExpenses] = useState(0)
  const [salary, setSalary] = useState(0)
  const [gregories, setGregories] = useState(0)
  const [remibursement, setRemibursement] = useState(0)

  useEffect(()=>{
    
    setTimeout(()=>{
      if(expenses < exp){
        setExpenses(expenses + 100)
      }
    }, 300)

    setTimeout(()=>{
      if(salary < sal){
        setSalary(salary + 1000)
      }
    }, 300)

    setTimeout(()=>{
      if(gregories < gre){
        setGregories(gregories + 100)
      }
    }, 300)
    setTimeout(()=>{
      if(remibursement < rem){
        setRemibursement(remibursement + 100)
      }
    }, 300)
    

  })


  return (
    <main className=''>
        <Navbar/>
       
        <section>
            <div className='flex space-x-12 max-md:flex-col max-sm:items-center max-lg:space-x-8'>
                <Chart/>
                <div className='mt-[7rem] flex flex-col space-y-4 max-md:space-y-12'>
                  <div className='flex max-sm:flex-col max-sm:space-y-10 max-md:space-x-9 max-sm:space-x-0 space-x-6'>
                      <Sales icon = {icon} arrow={greenArrow} smallArrow={smallGreen} sale = {expenses} color ={true} name={'Total Expenses'}/>
                      <Sales icon = {icon2} arrow={line2} smallArrow={smallRed} sale = {salary} color ={false} name={'Total Income'}/>
                  </div>
                  <div className='flex max-sm:flex-col max-sm:space-y-10 max-md:space-x-9 max-sm:space-x-0 space-x-6'>
                    <Sales icon = {icon3} arrow={line2} smallArrow={smallRed} sale = {gregories} color ={false} name={'Total Spent On Greogries'}/>
                    <Sales icon = {icon4} arrow={greenArrow} smallArrow={smallGreen} sale = {remibursement} color ={true} name={'Total Remibursement'}/>
                  </div>

                </div>

                

            </div>
        
        </section>
        <section className='flex mt-10 space-x-5 max-md:flex-col space-y-10 snap-x '>
          <div className="w-[44rem] ml-6 max-md:w-[36rem] max-sm:w-[20rem] scroll-ml-6 max-lg:w-[30rem]">
            <LastOrders/>

          </div>
          <div className='w-[30rem] bg-[#FD6F41] max-md:w-[36rem] dark:text-white max-sm:w-[20rem]'>
            <TopPlatform/>

          </div>
          
          <div>
      
          </div>
          
        </section>
   
        
    </main>
  )
}

export default Main
