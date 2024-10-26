import { useState ,useEffect} from 'react'
import './App.css'

function App() {
  const [light,setLight] = useState('green')
  const [redDuration,setRedDuration] = useState(10)
  const [yellowDuration,setYellowDuration] = useState(5)
  const [greenDuration,setGreenDuration] = useState(15)
  const [additionalTime,setAdditionalTime] = useState(0)

  useEffect(()=>{
    let timer;
    const cycleLight = ()=>{
      if(light=='green')
        timer = setTimeout(()=>setLight('yellow'),(greenDuration + additionalTime)*1000)
      else if(light=='yellow')
        timer = setTimeout(()=>setLight('red'),(yellowDuration + additionalTime)*1000)
      else if(light=='red')
        timer = setTimeout(()=>setLight('green'),(redDuration + additionalTime)*1000)
    }
    cycleLight()
    return ()=>clearTimeout(timer)

  },[light,redDuration,yellowDuration,greenDuration,additionalTime])

  const handleManualLightChange = (newLight)=>{
    setLight(newLight)
  }

  const handleIncreaseTimer = ()=>{
    setAdditionalTime(parseInt(additionalTime,10))
    console.log(`additionalTime is ${additionalTime}`)
  }

  return (
    <>
      <div style={{textAlign:'center',marginTop:'50px'}}>
        <div>
          <div style={{width:'100px',height:'100px', backgroundColor:light==='red'?'red':'gray',margin:'10px auto',borderRadius:'50px'}}/>
          <div style={{width:'100px',height:'100px', backgroundColor:light==='yellow'?'yellow':'gray',margin:'10px auto',borderRadius:'50px'}}/>
          <div style={{width:'100px',height:'100px', backgroundColor:light==='green'?'green':'gray',margin:'10px auto',borderRadius:'50px'}}/>
        </div>
        <button onClick={()=>handleManualLightChange('red')}>Red Light</button>
        <button onClick={()=>handleManualLightChange('yellow')}>Yellow Light</button>
        <button onClick={()=>handleManualLightChange('green')}>Green Light</button>
      </div>
      <div style={{marginTop:'20px'}}>
        <input
        type='number'
        placeholder='Add time in secs'
        value={additionalTime}
        onChange={(e)=>setAdditionalTime(e.target.value)}/>
        <button onClick={handleIncreaseTimer}>Increase Timer</button>
      </div>
    
    </>
  )
}

export default App
