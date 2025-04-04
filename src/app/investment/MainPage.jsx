import React from 'react'
import Navbar from '../dashboard/navbar'
import PieChart from './PieChart'
import { BsCashStack } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import portfolio from "@/app/investment/images/portfolio.png"
import Image from 'next/image';
import { GiSwapBag } from "react-icons/gi";

function MainPage() {
  return (
    <main className='ml-4 w-[90%]'>
        <Navbar/>
        <section className='flex flex-col mt-10 ml-6'>

            <div className='flex space-x-6 max-md:flex-col'>
                <div className='w-3/5 bg-white dark:bg-black shadow-md'><PieChart/></div>
                <div className='flex-1 bg-white dark:bg-black shadow-md p-4 max-md:mt-8'>
                    <div>
                        <p className='text-gray-400 dark:text-gray-200 text-sm mt-1'>
                            Your Total Asset Portfolio
                        </p>
                        <div className='flex space-x-3'>
                            <p>$200,000</p>
                            <FaArrowTrendUp/>
                        </div>
                        <div className='p-1 h-fit w-fit text-black dark:text-white mt-5'>
                            <div className='pt-2'>
                                <p className='text-lg'>Current plan</p>
                            </div>
  
                            <Image src={portfolio} alt='some' className='mt-4 mx-auto'/>

                        </div>

                    </div>
                </div>
                

            </div>

            <div className='grid lg:grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1'>

                <div className='bg-white shadow-md dark:bg-black text-black dark:text-white mt-10 p-6' >
                    <div className='flex flex-col space-y-3' >
                        <div className='flex place-content-between '>
                            <div className='flex space-x-4 '>
                                <GiSwapBag/>
                                <p>Investment</p>
                            </div>
                            <p className='ml-auto'>98.6%</p>

                        </div>
                        <div className=''>
                            
                            <p>Invest</p>
                        </div>
                        
                        
                        <div className='w-[100%] h-4 bg-gray-200 rounded-xl animate-pulse'>
                            <div className={`w-[60%] bg-green-500 h-4 rounded-xl`}> </div>
                        </div>

                        <div className=''>
                            
                            <p>Price</p>
                        </div>
                        
                        
                        <div className='w-[100%] h-4 bg-gray-200 rounded-xl animate-pulse'>
                            <div className={`w-[60%] bg-green-500 h-4 rounded-xl`}> </div>
                        </div>

                        <div className='flex'>
                            <div>
                                <p>Invest</p>
                                <p>Price</p>

                            </div>
                            <div className='ml-auto'>
                                <p>$5,800</p>
                                <p>$10,000</p>

                            </div>

                        </div>

                        
                            
                    </div>
                </div>

                <div className='bg-white shadow-md dark:bg-black text-black dark:text-white mt-10 p-6' >
                    <div className='flex flex-col space-y-3' >
                        <div className='flex place-content-between '>
                            <div className='flex space-x-4 '>
                                <BsCashStack/>
                                <p>Cash</p>
                            </div>
                            <p className='ml-auto'>85.6%</p>

                        </div>
                        <div className=''>
                            
                            <p>Total</p>
                        </div>
                        
                        
                        <div className='w-[100%] h-4 bg-gray-200 rounded-xl animate-pulse'>
                            <div className={`w-[60%] bg-green-500 h-4 rounded-xl`}> </div>
                        </div>

                        <div className=''>
                            
                            <p>Withdraw</p>
                        </div>
                        
                        
                        <div className='w-[100%] h-4 bg-[#FD6F41] rounded-xl animate-pulse'>
                            <div className={`w-[60%] bg-green-500 h-4 rounded-xl`}> </div>
                        </div>

                        <div className='flex'>
                            <div>
                                <p>Total</p>
                                <p>Withdraw</p>

                            </div>
                            <div className='ml-auto'>
                                <p>$75,800</p>
                                <p>$20,000</p>

                            </div>

                        </div>

                        
                            
                    </div>
                </div>

                <div className='bg-white shadow-md dark:bg-black text-black dark:text-white mt-10 p-6' >
                    <div className='flex flex-col space-y-3' >
                        <div className='flex place-content-between '>
                            <div className='flex space-x-4 '>
                                <BsCashStack/>
                                <p>Win rate</p>
                            </div>
                            <p className='ml-auto'>95.6%</p>

                        </div>

                        
                        
                        <div className='w-[100%] h-4 bg-gray-200 rounded-xl animate-pulse'>
                            <div className={`w-[90%] bg-[#FD6F41] h-4 rounded-xl`}> </div>
                        </div>
                            
                    </div>
                </div>




            </div>
         </section>
      
    </main>
  )
}

export default MainPage
