// Write a Custom Hook “useLocalStorage”, to store as well as get data from localStorage API.
import React, { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      //   const item = window.localStorage.getItem(key);
      //   console.log("initialValue is", initialValue);
      //   return item ? JSON.parse(item) : initialValue;
      const item = window.localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
      // Set initial value in localStorage if it doesn't exist
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  console.log("stored value is", storedValue);
  const setValue = (value) => {
    console.log("value is ",value)
    try {
      console.log("Entered inside the setValue", value);
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export default useLocalStorage;
