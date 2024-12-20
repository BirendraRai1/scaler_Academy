// Write a Custom Hook “useLocalStorage”, to store as well as get data from localStorage API.
import React,{useState} from 'react'

function useLocalStorage(key,initialValue) {
    const [storedValue,setStoredValue] = useState(()=>{
        try{
            const item = window.localStorage.getItem(key)
            return item?JSON.parse(item):initialValue
        }catch(error){
            console.log(error)
            return initialValue
        }
    })
    const setValue = (value)=>{
        try{
            console.log("Entered inside the setValue",value)
            const valueToStore = value instanceof Function?value(storedValue):value
            setStoredValue(valueToStore)
            window.localStorage.setItem(key,JSON.stringify(valueToStore))
        }catch(error){
            console.log(error)
        }
    }
    return [storedValue,setValue]
}

export default useLocalStorage