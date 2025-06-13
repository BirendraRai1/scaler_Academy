import React, { useReducer } from 'react'

function Counter() {
    const initialState = {count:0}
    const reducer = (state,action)=>{
        switch(action.type){
            case "increment":
                return {count:state.count+1}
            case "decrement":
                return {count:state.count-1}
            case "reset":
                return {count:0}
            default:
                throw new Error(`unhandled action type ${action.type}`)
        }
    }
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <div>{state.count}</div>
        <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default Counter

/*comparison between usestate and usereducer
    feature                  usestate                           usereducer
    Best for               simple state change                complex state logic or dependicies
    state updates          direct through setStates           via dispatch with actions
    Ease of use             Easier for simple logic           Better for managing complex state
    centralized logic         no                              yes,via reducer
**
*
*
*
*
*usereducer is a react hook used for state management
Alternative of usestate hook
preferable for complex state management logic
syntax
const [state,dispatch] = useReducer(reducer,initialState)
                                        ||
                                        reducer(currentstate,action)
Reducer is a function that accepts two parameters newState = reducer(currentState,action)
****/ 