import { useRef } from "react"
function useMemoPolyfill(factory,deps){
    const memoizedValue = useRef({value:null,deps:[]})
    console.log("memoizedValue  value is",memoizedValue.current.value)
    console.log("memoizedValue deps is",memoizedValue.current.deps)
    const hasChanged = !deps || deps.some((dep,index)=>dep !==memoizedValue.current.deps[index])
    if(hasChanged){
        // Recompute the value and store it with the new dependencies
        memoizedValue.current.value = factory()
        memoizedValue.current.deps = deps
    }
     // Return the memoized value
    return memoizedValue.current.value
}

export default useMemoPolyfill