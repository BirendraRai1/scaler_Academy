import React from 'react'

function RemoveItems(cart,transferfn) {
  console.log("transferfn is",transferfn)
  return (
    <>
        {Object.keys(cart).length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <ul>
              {Object.values(cart).map((cartItem) => (
                <li key={cartItem.id}>
                  {cartItem.name}(x{cartItem.count})
                  <button onClick={() => transferfn(cartItem.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            
          )}
    </>
    
  )
}

export default RemoveItems