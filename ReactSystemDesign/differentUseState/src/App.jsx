import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1); // Relies on the current `count`
    setCount(count + 1); // Still relies on the same `count`
  };

  const handleClickFunctional = () => {
    setCount((prev) => prev + 1); // Uses the latest state
    setCount((prev) => prev + 1); // Increments based on the updated state
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Update (Direct)</button>
      <button onClick={handleClickFunctional}>Update (Functional)</button>
    </div>
  );
}

export default App;

/*<button onClick={handleClickFunctional}>Update (Functional)</button>
When to Use:
Use this when the new state depends on the previous state.
Safe in concurrent renders (React 18+): React may batch updates or re-render 
asynchronously, and this syntax ensures the state is accurate even if updates happen 
simultaneously.
*
*
*
*
<button onClick={handleClick}>Update (Direct)</button>
When to Use:
Use this when the new state does not depend on the previous state.
Potential issue with stale state: If count changes asynchronously or multiple updates 
happen in quick succession, this syntax might result in incorrect state updates because 
it relies on the value from the current render.
*
****************/ 
