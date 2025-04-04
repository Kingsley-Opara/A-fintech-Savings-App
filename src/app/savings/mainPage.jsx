"use client"
import React from 'react'
import Navbar from '../dashboard/navbar'
import { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import SavingsTable from './savingsTable';
import SavingForm from './savingForm';
import LineChart from './lineChart';

function MainPage() {
    const [savings, setSavings] = useState(500000)
    const [show, setShow] = useState(false)

    const handleClicking = () =>{
        setShow(!show)
        const form = document.getElementById('formSection')
        console.log(show)
        if(show){
            form.classList.remove('hidden')

        }
        else{
            form.classList.add('hidden')
        }
        

    }
  return (
    <main className='ml-4 w-[90%] relative h-fit max-sm:ml-1'>
        <Navbar/>
        <section className='flex ml-5 mt-10 max-md:flex-col space-y-6'>


            <div className='w-1/2 max-sm:w-full'>
            
                <div className='bg-[#FD6F41] text-white p-10 rounded-xl w-[80%] max-md:w-fit'>
                    <div className='ml-[30%] self-center place-content-center flex flex-col space-y-5'>
                        <p className='text-3xl'>Total Savings</p>
                        <p className='text-xl'>${savings}</p>

                    </div>

                </div>
                <div className='mt-6 flex space-x-12'>
                    <div className=''>
                        <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 
                        hover:bg-gradient-to-bl cursor-pointer 
                        focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 
                        font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            <div className='flex space-x-2'>
                                <p>Add Cards</p>
                                <CiCirclePlus/>
                            </div>
                        </button>
                    </div>
                    <div onClick={()=>(handleClicking())}>
                        <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 
                        hover:bg-gradient-to-bl cursor-pointer 
                        focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 
                        font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        
                        >
                            <div className='flex space-x-2'>
                                <p>Add Money</p>
                                <CiCirclePlus/>
                            </div>
                        </button>
                    </div>


                </div>
            </div>
            <div className='flex-1'>
                <SavingsTable/>

            </div>
        </section>
        <section className='mt-10'>
            <LineChart/>
        </section>

        <section className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden' id='formSection'>
            <SavingForm setShow={setShow} show={show}/>

        </section>

      
    </main>
  )
}

export default MainPage
