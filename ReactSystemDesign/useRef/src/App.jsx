import { useState } from 'react'
import { useRef } from 'react'
import './App.css'

function App() {
  const refElement = useRef("")
  const [name,setName] = useState("")
  console.log("refElement is",refElement)

  function Reset(){
    setName("")
    refElement.current.focus()
  }

  function handleInput(){
    refElement.current.style.color = 'red'
    refElement.current.value = "Rai"
  }

  return (
    <>
      <h1>Learning UseRef</h1>
      <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={Reset} >Reset</button>
      <button onClick={handleInput}>Handle Input</button>
    </>
  )
}

export default App

/*useRef is such a hook in functional component that is used to manipulate the dom which cannot be achieved through usestate and props
*
*

In React, both useRef and useState are hooks that serve distinct purposes. Here's a detailed comparison of the two:
1>Purpose
useRef:
Used to create a mutable reference to a DOM element or to persist a value across renders without causing a re-render.
Commonly used for accessing DOM elements directly or for storing mutable values.
useState:
Used to manage state variables in a functional component.
Updates to useState trigger a re-render of the component.

2> Re-renders
useRef:
Updating a value stored in a ref does not trigger a re-render.
Ideal for storing non-UI state or values that don't affect rendering (e.g., timers, previous values).
useState:
Updating a state variable using setState causes the component to re-render.
Suitable for managing values that influence the component's output (e.g., UI updates).

3>Value Access
useRef:
Access the current value using the .current property.
Example: ref.current = 10.
useState:
Access the current value directly from the state variable.
Example: const [count, setCount] = useState(0);.

4>Performance Considerations
useRef:
Lightweight and doesn't trigger re-renders. Use it for performance-critical scenarios where state updates aren't needed.
useState:
Triggers re-renders, which may lead to performance issues if overused or used unnecessarily for values that don't affect UI.










**/
