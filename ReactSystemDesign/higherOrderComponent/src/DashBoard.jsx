import React from 'react'

function DashBoard(props) {
    console.log("props are",props)
  return (
    <div>Welcome to your dashboard!{props.hello}</div>
  )
}

export default DashBoard