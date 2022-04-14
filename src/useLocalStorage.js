import {useState, useEffect } from 'react'

function getStorageValue(key, defaultvalue){
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultvalue;
}

function useLocalStorage(key, defaultvalue){
    const [value, setValue ] = useState(() =>{
      return  getStorageValue(key, defaultvalue);
    })
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue]
    
}

export default useLocalStorage;