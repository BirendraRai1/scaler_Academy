import React from 'react'
import Button from './Button'

function Modal({handleClick}) {
  return (
    <div className='modalBody'>
        <div className='a'>
            Header
            <Button text={'close'} handleClick={handleClick}/>
        </div>
        Modal
    </div>
  )
}

export default Modal