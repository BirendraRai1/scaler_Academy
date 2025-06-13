import React, { useState, useCallback ,useEffect} from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  //to check whether handleClick refrence is being recreated
  useEffect(() => {
    console.log("Learning function reference:", handleClick);
  }, [handleClick]);


  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      {/* <button onClick={()=>setCount(count+1)}>Increment</button> */}
      <Child onclick={handleClick} />
    </div>
  );
}

export default Parent;

/*Without useCallback: The handleClick function is re-created on every render, 
causing the Child component to re-render unnecessarily.
With useCallback: The function reference remains stable, so the Child component only 
re-renders if handleClick's dependencies change
*
*
*
*
******/ 
