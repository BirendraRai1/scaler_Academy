import React,{ useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [query,setQuery] = useState("")// User's input
  const [suggestions,setSuggestions] = useState([])// Suggestions from API
  const [selected,setSelected] = useState("")// Selected value

  // Handle input changes and fetch suggestions
  const handleInputChange = async(e)=>{
    const value = e.target.value
    setQuery(value)
    if(value.length>0){
      await fetchSuggestions(value)
    }
    else{
      setSuggestions([])
    }
  }

  const fetchSuggestions = async(searchTerm)=>{
    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const result = await response.json()
      console.log("result is",result)
      const filtered = result.map((post)=>post.title).filter((title)=>title.toLowerCase().includes(searchTerm.toLowerCase())).slice(0,5)
      setSuggestions(filtered)
    }catch(error){
      console.error("Error fetching suggestions",error)
    }
  }

  const handleSelect = (suggestion)=>{
    setQuery(suggestion)
    setSelected(suggestion)
    setSuggestions([])
  }

  

  return (
   <div className='app'>
    <h1>Search Input App</h1>
    <div className='search-box'>
      <input
      type="text"
      value={query}
      onChange={handleInputChange}
      placeholder='change....'
      />
      {
        suggestions.length>0 && (
          <ul className='suggestions-list'>
            {
              suggestions.map((item,index)=>{
                return <li key={index} onClick={()=>handleSelect(item)}>{item}</li>
              })
            }
          </ul>
        )
      }
    </div>
      {selected && <p>Selected:{selected}</p>}
   </div>
  
  )
}

export default App


/*Develop a Search Input App that provides real-time search suggestions as the user types, 
pulling data from a given API. The suggestions will be given in a dropdown list in the input,
 and once an item is selected from the dropdown, it should appear in the Input box
*
*
***************/ 
