import React from 'react'

function Box({item,handleClicked}) {
    console.log(`item?.isVisible ${"box "+(item.isClicked ?"green":"yellow")}`)
  return item?.isVisible ?(
    <div
    className={"box "+(item.isClicked ?"green":"yellow")}
    key = {item.id}
    onClick = {()=>handleClicked(item)}
    >
        {item.id}
    </div>
  ):(
  <div></div>
)
}

export default Box