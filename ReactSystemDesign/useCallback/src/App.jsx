import { useState,useCallback,useEffect } from 'react'
import ChildA from './components/ChildA'
import Parent from './components/Parent'
import './App.css'

function App() {
  const [add,setAdd] = useState(0)
  const [count,setCount] = useState(1)
  //if we run the below function and pass it as props to childA the memoization fails so we need to use usecallback
  // const learning = ()=>{
  //   console.log("came here")
  // }

  const learning = useCallback(()=>{
    console.log("came here",count)
  },[count])

  //The useCallback hook detects that count has changed and creates a new version of the learning function.
  //To verify whether a new version of the learning function is being created when the count variable changes, you can use the following debugging technique
  //Use console.log  inside useEffect to log the reference of the learning function after every render.
//This allows you to observe whether the reference changes when count is updated.

  useEffect(() => {
    console.log("Learning function reference:", learning);
  }, [learning]);

  return (
    <div>

      <ChildA learning={learning} count={count}/>
      {add}<br/>
      <button onClick={()=>setAdd(add+1)}>Addition</button>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Count</button>

      {/* or */}
      {/* <Parent/> */}
      
      
    </div>
  )
}

export default App


/*Both useMemo and useCallback are React hooks used for performance optimization by 
memoizing values or functions. However, they serve different purposes:


1>Purpose
useMemo: Memoizes a computed value (e.g., the result of a function) to avoid recalculating 
it on every render.
useCallback: Memoizes a function<ChildA learning={learning} count={count}/>
      {add}<br/>
      <button onClick={()=>setAdd(add+1)}>Addition</button>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Count</button>n to prevent unnecessary re-creation of that function on 
every render.
*



2>Syntax

useMemo:-
  const memoizedValue = useMemo(() => computeValue(a, b), [a, b]);
  Returns the result of computeValue when dependencies (a, b) change.

useCallback:-
  const memoizedFunction = useCallback(() => doSomething(a, b), [a, b]);
  Returns a memoized version of the function that only changes when dependencies (a, b) change

*

Key Difference
useMemo: Caches values (like numbers, objects, arrays).
useCallback: Caches functions.
*
*
*
*
*
*******/ 
