import { useState } from "react";
import "./App.css";

const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" },
];

function App() {
  const [cart, setCart] = useState({});

  // Function to add an item to the cart
  // function addToCart(item){
  //   /*The use of parentheses () versus curly braces {} in the prevCart argument of the
  //   arrow function is determined by how JavaScript arrow functions work
  //   *
  //   *
  //   * When you use parentheses around the body of an arrow function, it is interpreted as an
  //   * implicit return. The expression inside the parentheses is automatically returned.
  //   * This is used when the function body is a single expression, as in your code:
  //   *
  //   *
  //   * *
  //   * **/
  //   setCart((prevCart)=>(
  //     {
  //       ...prevCart,
  //       [item.id]:{
  //         ...item,
  //         count:prevCart[item.id]?prevCart[item.id]?.count+1:1
  //       },
  //     }
  //   ))
  // }

  //or
  function addToCart(item) {
    setCart((prevCart) => {
      console.log("prevCart is", prevCart);
      return {
        ...prevCart,
        [item.id]: {
          ...item,
          count: prevCart[item.id] ? prevCart[item.id]?.count + 1 : 1,
        },
      };
    });
  }

  /*item: This represents the item to be added to the cart. It includes the item's details, 
  such as its id and name

setCart is a state-updating function provided by React's useState hook.
The cart is stored as an object where the keys are item IDs, and the values are item 
details (including their count).

The setCart function takes a callback that provides the previous cart state (prevCart).
The callback ensures we update the state based on its previous value, avoiding any issues 
with stale state updates.

...prevCart ensures that the rest of the cart items remain unchanged.


Check if Item Exists:
prevCart[item.id] checks if the item is already in the cart.
If it exists, increment its count using prevCart[item.id].count + 1.
If it doesn't exist, initialize it with count: 1
  *
  *
  * 
  * 
  * 
  * *********/

  //Function to remove an item from the cart

  function removeFromCart(itemId) {
    setCart((prevCart) => {
      console.log("prevCart is",prevCart)
      const updatedCart = { ...prevCart };
      if (updatedCart[itemId]?.count > 1) {
        updatedCart[itemId] = {
          ...updatedCart[itemId], // Ensure immutability
          count: updatedCart[itemId].count - 1,
        }
        //the below code mutates and gives the wrong result .It decrements by 2
        //updatedCart[itemId].count -=1
      } else if(updatedCart[itemId]){
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  }

  return (
    <div>
      <h1>Shopping Cart App</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Item List */}
        <div>
          <h2>Items</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name}
                <button onClick={() => addToCart(item)}>Add</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Cart */}
        <div>
          <h2>Cart</h2>
          {Object.keys(cart).length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <ul>
              {Object.values(cart).map((cartItem) => (
                <li key={cartItem.id}>
                  {cartItem.name}(x{cartItem.count})
                  <button onClick={() => removeFromCart(cartItem.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

/*const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" }
]

function count(){
	let prevCart = {}
	return function(item){
  	return prevCart={
    	...prevCart,
      [item.id]:{
      	...item,
        count:prevCart[item.id]?prevCart[item.id]?.count+1:1
      }
    }
  }
}

let counter = count()
console.log(counter(items[0]))
console.log(counter(items[0]))
console.log(counter(items[1]))
console.log(counter(items[2]))
*
*
*
*
***********/
