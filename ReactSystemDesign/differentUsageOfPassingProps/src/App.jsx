/*what is the difference between writing 
<button onClick={() => setCount((prev) => prev + 1)}>Increment</button> 
and <button onClick={() => setCount(count+1)}>Increment</button>
******/ 


import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const incrementWithPrev = ()=>setCount((prev)=>prev+1)
  const incrementWithCount = ()=>setCount(count+1)

  return (
    <div>
      <p>Count :{count}</p>
      <button onClick={incrementWithPrev}>Increment With prev</button>
      <button onClick={incrementWithCount}>Increment With count</button>
    </div>
  )
}

export default App


/*How it works:
React provides the previous state (prev) as an argument to the updater function.
This ensures that the state update is based on the latest value of the state, even 
if multiple updates happen quickly (e.g., in rapid clicks or concurrent renders).
When to use:
Prefer this method when the new state depends on the previous state.
It is safer in cases where state updates might batch together or be asynchronous.


If both buttons are clicked rapidly:

Increment with prev: The count will always update correctly because each update uses 
the most recent state, no matter how many updates are queued.
Increment with count: The count may lag or produce incorrect results because count might
 be stale if updates are batched or asynchronous.


 Key Takeaways
Functional Update (prev) is robust for dependent updates.
Direct Reference (count) is simpler but less reliable in asynchronous scenarios or with 
batched updates.
React recommends using the functional update form when state changes depend on the previous
 state.
*
*
*
*
*
*
*
****/ 
