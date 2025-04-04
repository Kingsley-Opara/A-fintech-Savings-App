"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { useGlobalState } from '../context'


function SavingsTable() {
    const [saveItems, setSavedItems] = useState([])
    const {setSavingsLists, savingsLists} = useGlobalState()
   
    
    useEffect(()=>{
        // let items = localStorage.getItem('totalSavings') && JSON.parse(localStorage.getItem('totalSavings'))

        const items = savingsLists
       

        if(items){
            
            setSavedItems(items)
        }

        
    }, [savingsLists])
  return (
   

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Budget
                    </th>
                    <th scope="col" className="px-6 py-3 max-md:hidden">
                        Saving
                    </th>

                </tr>
            </thead>
            <tbody>
                {saveItems && saveItems != [] && saveItems.map((item) =>{
                    return(
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 
                        even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200" key={`${item.title}-${item.description}`}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.title}
                            </th>
                            <td className="px-6 py-4">
                                <p>{item.description}</p>
                            </td>
                            <td className="px-6 py-4">
                                ${item.budget}
                            </td>
                            <td className="px-6 py-4 max-md:hidden">
                                ${item.saving}
                            </td>

                        </tr>
                    )
                })}

            
            </tbody>
        </table>
    </div>

      
  
  )
}

export default SavingsTable
