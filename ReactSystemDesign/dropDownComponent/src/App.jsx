import { useState } from 'react'
import DropDownWithMultiSelect from './components/DropDownWithMultiSelect'
import './App.css'

function App() {
 
const options = ["Apple","Banana","Orange","Mango","Grapes","PineApple"]
  return (
    <div>
      <h2>MultiSelect Dropdown</h2>
      <DropDownWithMultiSelect options={options}/>
    </div>
  )
}

export default App
