import React from 'react'

function DisplayMessage({message,timestamp}) {
  return (
    <div>
        <p>{message}</p>
        <p><strong>TimeStamp:</strong>{timestamp}</p>
    </div>
  )
}

export default DisplayMessage