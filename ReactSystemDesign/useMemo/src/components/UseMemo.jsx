import React ,{useMemo,useState}from 'react'

function UseMemo() {
    const [add,setAdd] = useState(0)
    const [subtract,setSubtract] = useState(100)
    // const multiplication = ()=>{
    //     console.log("***************")
    //     return add*10
    // }

    const multiplication = useMemo(()=>{
        console.log("**************")
        return add*10
    },[add])
  return (
    <div>
        {multiplication}
        {/*the above multiplication is used when we use useMemo and when we have to call commented multiplication we have to use multiplication() */}
        <br/>
        <button onClick={()=>setAdd(add+1)}>Add</button>
        <span>{add}</span>
        <br/>
        <button onClick={()=>setSubtract(subtract-1)}>Subtract</button>
        <span>{subtract}</span>
    </div>
  )
}

export default UseMemo


/*The useMemo hook is used to optimize performance by memoizing the result of an 
expensive computation. It ensures that a function is executed only when its dependencies 
change, preventing unnecessary re-computations
*
*Without useMemo: The multiplication function runs every time the component re-renders, 
even if add hasn’t changed
*
*With useMemo: The multiplication  only runs when add changes, improving performance
*
********/ 