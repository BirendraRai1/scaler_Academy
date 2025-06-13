import React,{memo} from 'react'

function ChildA({learning,count}) {
  console.log("Rendering childA")
  return (
    <>
    <div>ChildA</div>
    <button onClick={learning}>Click</button>
    </>
    
  )
}

export default memo(ChildA)

//https://www.youtube.com/watch?v=5zempLONkxM&t=12s

/*
Your child component is being rendered despite applying React.memo because React.memo only 
prevents re-renders when the props of the component do not change. In this case, the Child 
component is not receiving any props, so React.memo doesn't optimize it for re-renders 
because React cannot detect a difference in props—it will simply re-render whenever the 
parent component (App) renders
****/ 