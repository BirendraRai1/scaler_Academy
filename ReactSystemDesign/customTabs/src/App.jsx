import './App.css'
import { tabsData } from './data.jsx'
import Tabs from './Tabs'
console.log("tabsData inside app.jsx is",tabsData)
function App() {
 return (
    <div>
      <h1>TABS</h1>
      <Tabs currentIndex={0} tabsData={tabsData}/>
    </div>
  )
}

export default App
