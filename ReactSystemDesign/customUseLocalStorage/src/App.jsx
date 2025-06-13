import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

function App() {
  const [name, setName] = useLocalStorage("name", "Guest");

  return (
    <div>
      <h1>Hello,{name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your Name"
      />
    </div>
  );
}

export default App;


/*In App.js, when you call useLocalStorage like this:
* const [name, setName] = useLocalStorage('name', 'Guest');
It returns [storedValue, setValue] (which is name and setName in App.js).

name contains the value of storedValue (initially set to 'Guest' if 'name' isn't already in 
localStorage).
setName is the same as setValue from the hook, allowing you to update name and store it in 
localStorage.
*
*
*
*
*Write a Custom Hook “useLocalStorage”, to store as well as get data from localStorage API
*
********/ 
