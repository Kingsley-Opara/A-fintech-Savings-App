import { lastOrders } from './data'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

function LastOrders() {
    const initialDisplayCount = 5

    const [toggle, setToggle] = useState(false)

    const handleToggle = () =>{
        setToggle(!toggle)
    }
    const displayItems = toggle ? lastOrders : lastOrders.slice(0, initialDisplayCount)
  return (
    <div className='p-6 bg-white dark:bg-gray-800 text-black dark:text-white'>
        <div className='flex place-content-between justify-between'>
            <p className='text-lg font-semibold'>Transaction History</p>
            <p className='text-lg text-green-300 font-light cursor-pointer' onClick={() => {handleToggle()}}>
                {toggle ? "See Less" : "See All"}
            </p>

        </div>
        <div>
    

            <div className="mt-5">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3 max-sm:hidden max-md:visible max-lg:hidden">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3 max-sm:hidden max-md:visible max-lg:hidden">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 max-sm:hidden max-md:visible max-lg:hidden">
                                Invoice
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayItems.map((lastOrder) =>{
                            return(
                                <tr className="border-b  dark:border-gray-700 hover:bg-gray-50 
                                dark:hover:bg-gray-600" key={lastOrder.id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 flex space-x-3 whitespace-nowrap dark:text-white">
                                        
                                        <div>{lastOrder.name}</div>
                                    </th>
                                    <td className="px-6 py-4">
                                        {lastOrder.date}
                                    </td>
                                    <td className="px-6 py-4 max-sm:hidden max-md:visible max-lg:hidden">
                                        {lastOrder.amount}
                                    </td>
                                    {
                                        lastOrder.status === "Paid" ? 
                                        <td className="px-6 py-4 text-green-300 max-sm:hidden max-md:visible max-lg:hidden">
                                            {lastOrder.status}</td>:
                                        <td className="px-6 py-4 text-red-300 max-sm:hidden max-md:visible max-lg:hidden">
                                            {lastOrder.status}</td>
                                    
                                    }
                                    <td className="px-6 py-4 text-right flex space-x-1 cursor-pointer max-sm:hidden max-md:visible max-lg:hidden">
                                        <Image src={lastOrder.invoice} alt='t'/>
                                        <p>View</p>
                                        
                                    </td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
            </div>

        </div>
      
    </div>
  )
}

export default LastOrders
