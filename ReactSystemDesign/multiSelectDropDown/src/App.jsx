import { useState } from 'react'
import './App.css'
import MultiSelectDropDown from './components/MultiSelectDropDown'

function App() {
  const options = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "HoneyDew"
  ]

  return (
    <div>
      <h1>Multi-Select DropDown</h1>
      <MultiSelectDropDown options={options}/>
    </div>
  )
}

export default App


/*Create a Dropdown Component with multi-select functionality and search filtering. 
Multiple options in the dropdown can be selected. Selected items would appear on the top, 
with a cross mark after each item. On click of cross button, the selected item will be 
removed
*
*
*
*
******/ 
