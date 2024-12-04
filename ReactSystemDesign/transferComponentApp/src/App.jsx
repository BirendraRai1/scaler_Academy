import { useState } from 'react'
import BoxComponent from './components/BoxComponent'
import './App.css'

function App() {
  const [box1Items,setBox1Items] = useState(["Item 1","Item 2","Item 3"])
  const [box2Items,setBox2Items] = useState([])

    // Function to transfer an item from Box 1 to Box 2
    const transferToBox2 = (item)=>{
      setBox1Items(box1Items.filter((i)=>i!=item))
      setBox2Items([...box2Items,item])
    }

     // Function to transfer an item from Box 2 to Box 1
     const transferToBox1 = (item)=>{
      setBox2Items(box2Items.filter((i)=>i!=item))
      setBox1Items([...box1Items,item])
     }
   return (
    <div style={{display:"flex",justifyContent:"center",gap:"20px"}}>
      {/* {Box 1} */}
      {/* <div style={{border:"1px solid black",minWidth:"150px",padding:"20px"}}>
        <h3>Box 1</h3>
        {
          box1Items.map((item)=>{
            return(
              <div key={item} style={{display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>
                <span>{item}</span>
                <button onClick={()=>transferToBox2(item)}>Move to Box2</button>
              </div>
            )
          })
        }

      </div> */}
      {/* {Box 2} */}
        {/* <div style={{border:"1px solid black",padding:"20px",minWidth:"150px"}}>
        <h3>Box 2</h3>
        {
          box2Items.map((item)=>{
            return(
              <div>
                <div key={item} style={{display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>
                  <span>{item}</span>
                  <button onClick={()=>transferToBox1(item)}>Move to Box1</button>
                </div>
              </div>
            )
          })
        }
        </div> */}
        <BoxComponent boxItems={box1Items}  transferFn={transferToBox2} i={1} j={2}/>
        <BoxComponent boxItems={box2Items}  transferFn={transferToBox1} i={2} j={1}/>
    </div>
  )
}

export default App


/*Develop a Transfer Component App. There will be two boxes, initially only one box will 
contain all the items along with a button besides each item. On clicking of that button
 that item should go into the other box. In the other box also, the item will be displayed
  along with a button besides it
*
*
***********/ 
