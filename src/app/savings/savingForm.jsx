"use client"
import React from 'react'
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useState } from 'react';
import { useGlobalState } from '../context';

function SavingForm({setShow, show}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [budget, setBudget] = useState('')
    const [saving, setSaving] = useState('')
    const {handleClick, savingsLists, setSavingsLists} = useGlobalState()

    const handleClicking = ()=>{
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
    const handleSubmit = (e)=>{
        e.preventDefault()
        const id = savingsLists.length + 1
        const formData = {
            id: id,
            title: title && title,
            description: description && description,
            budget: Number(budget && budget),
            saving: Number(saving && saving)
        }
        handleClick(formData)
        
        const form = document.getElementById('savingsform')
        setTimeout(()=>{
            form.submit()

        }, 400)
    }
  return (
    <div className='bg-white p-6 dark:bg-black shadow-md'>
        <div className='ml-auto mt-1 p-2 '>
            <MdOutlineRestaurantMenu className='cursor-pointer text-lg text-[#FD6F41] ml-auto' onClick={()=>{handleClicking()}}/>
        </div>

        <form className="max-w-md mx-auto mt-5" onSubmit={(e)=>{handleSubmit(e)}} id='savingsform'>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="floating_email" id="floating_email"
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}} 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 
                dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 
                peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 peer-focus:-translate-y-6">
                Title</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="floating_password" id="floating_password" 
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}} 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 
                dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " required />
                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 
                peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="number" name="floating_first_name" 
                    value={budget}
                    onChange={(e)=>{setBudget(e.target.value)}} 
                    id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 
                    dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Budget</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="number" name="floating_last_name"
                    value={saving}
                    onChange={(e)=>{setSaving(e.target.value)}}  
                    id="floating_last_name" className="block py-2.5 px-0 w-full 
                    text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                    dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none 
                    focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 
                    dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                    peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 
                    peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                    peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Saving</label>
                </div>
            </div>

            <button type="submit" 
            className="text-white cursor-pointer bg-[#FD6F41] hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

      
    </div>
  )
}

export default SavingForm
