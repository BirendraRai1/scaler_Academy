import React from 'react'

function Child({onclick}) {
    console.log("child rendered")
  return (
    <button onClick={onclick} >Click Me</button>
  )
}

export default Child