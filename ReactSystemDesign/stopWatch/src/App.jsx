import { useState ,useEffect} from 'react'
import './App.css'

function App() {
  const [time,setTime] = useState(0)// Time in seconds
  const [isRunning,setIsRunning] = useState(false)// Timer running state
  const [isPaused,setIsPaused] = useState(false)// Pause/Resume state

  // Effect to handle the timer
  useEffect(()=>{
    let timer;
    if(isRunning && !isPaused){
      timer = setInterval(()=>setTime((prev)=>prev+1),1000)
    }
    return ()=>clearInterval(timer)
  },[isRunning,isPaused])

  // Start the timer
  const startTimer = ()=>{
    setIsRunning(true)
    setIsPaused(false)
  }

  // Pause the timer
  const pauseTimer = ()=>{
    setIsPaused(true)
  }

  // Resume the timer
  const resumeTimer = ()=>{
    setIsPaused(false)
  }

  // Reset the timer
  const resetTimer = ()=>{
    setIsPaused(false)
    setIsRunning(false)
    setTime(0)
  }

  return (
    <div style={{textAlign:"center",marginTop:"50px"}}>
      <h1>Stopwatch</h1>
      <h2>{time}Seconds</h2>
      {/* Button visibility logic */}
      {
        !isRunning && (
          <button onClick={startTimer} style={{margin:"10px"}}>Start</button>
        )
      }
      {
        isRunning && !isPaused && (
          <button onClick={pauseTimer} style={{margin:"10px"}}>Pause</button>
        )
      }
      {
        isRunning && isPaused && (
          <button onClick={resumeTimer} style={{margin:"10px"}}>Resume</button>
        )
      }
      {
        isRunning && (
          <button onClick={resetTimer} style={{margin:"10px"}}>Reset</button>
        )
      }
    </div>
   
  )
}

export default App
