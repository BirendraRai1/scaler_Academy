import { useState } from 'react'
import UseMemo from './components/UseMemo'
import UseMemoFilter from './components/UseMemoFilter'
import useMemoPolyfill from './components/useMemoPolyfill'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [other,setOther] = useState(0)

  const expensiveCalculation = useMemoPolyfill(()=>{
    console.log("expensive calculation")
    return count *2
  },[count])

  return (
    <>
      <UseMemo/>
      {/* <UseMemoFilter/> */}
      {/* or */}
      {/* <h2>Other :{other}</h2>
      <h3>Expensive Value:{expensiveCalculation}</h3>
      <button onClick={()=>setCount((prev)=>prev+1)}>Increment Count</button>
      <button onClick={()=>setOther((prev)=>prev+1)}>Increment other</button> */}
    </>
  )
}

export default App
