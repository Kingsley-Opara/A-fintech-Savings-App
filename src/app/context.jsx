'use client'
import {createContext, useContext, useState, useEffect, use } from "react";
import { savingsList as lists, savingsList} from "./dashboard/data";

const GlobalStateContext = createContext()

export const GlobalStateProvider = ({children}) =>{
    const [theme, setTheme] = useState('light');
    const [showSideBar, setShowSideBar] = useState(false)
    const [savingsLists, setSavingsLists] = useState([])
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const storedSaving = localStorage.getItem('totalSavings');
        if (storedTheme) {
          setTheme(storedTheme);
          document.documentElement.classList.add(storedTheme);
        }

        
        if(!storedSaving || storedSaving == []){
          setSavingsLists(lists)
          localStorage.setItem("totalSavings", JSON.stringify(lists))
        }
        else{
          const storedSavingItems = JSON.parse(localStorage.getItem('totalSavings'))
          setSavingsLists(storedSavingItems)
        }
      }, []);

      const handleClick = (savedItem = {}) =>{
        const storedSaving = localStorage.getItem('totalSavings') && JSON.parse(localStorage.getItem('totalSavings'))
        if (storedSaving && savedItem != []){
          const savedItems = [...storedSaving, savedItem]
          localStorage.setItem('totalSavings', JSON.stringify(savedItems))
          setSavingsLists(storedSaving)
          

        }
      }
    
      const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    
        // Add and remove appropriate classes on document body
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);
      };
    return(
        <GlobalStateContext.Provider value={{theme, toggleTheme, showSideBar, setShowSideBar, handleClick, setSavingsLists, savingsLists}}>
            {children}

        </GlobalStateContext.Provider>
    )
    
}

export const useGlobalState = () =>useContext(GlobalStateContext)