function debounce(func,wait,option={leading:false,trailing:true}){
    let timerId = null
    let lastArgs = null
    if(!option.leading && !option.trailing)
        return ()=>null
    return function debounced(...args){
        if(!timerId && option.leading)
            func.apply(this,args)
        else
            lastArgs=args
        clearTimeout(timerId)
        timerId=setTimeout(()=>{
            if(option.trailing && lastArgs)
                func.apply(this,args)
            timerId=null
            lastArgs = null
        },wait)
    }
}

//Test Case 1
// const logMessage1 = debounce((message)=>console.log(message),1000,{leading:false,trailing:true})
// logMessage1("A")
// logMessage1("B")
// logMessage1("C")
// setTimeout(()=>logMessage1("D"),2000)
// setTimeout(()=>logMessage1("E"),2500)
// setTimeout(()=>logMessage1("F"),3000)
// setTimeout(()=>logMessage1("G"),3500)

//Test Case 2
// const logMessage1 = debounce((message)=>console.log(message),1000,{leading:true,trailing:true})
// logMessage1("A")
// logMessage1("B")
// logMessage1("C")
// setTimeout(()=>logMessage1("D"),2000)
// setTimeout(()=>logMessage1("E"),2500)
// setTimeout(()=>logMessage1("F"),3000)
// setTimeout(()=>logMessage1("G"),3500)

//Test Case 3
// const logMessage1 = debounce((message)=>console.log(message),1000,{leading:true,trailing:false})
// logMessage1("A")
// logMessage1("B")
// logMessage1("C")
// setTimeout(()=>logMessage1("D"),2000)
// setTimeout(()=>logMessage1("E"),2500)
// setTimeout(()=>logMessage1("F"),3000)
// setTimeout(()=>logMessage1("G"),3500)

//Test Case 4
const logMessage1 = debounce((message)=>console.log(message),1000,{leading:false,trailing:false})
logMessage1("A")
logMessage1("B")
logMessage1("C")
setTimeout(()=>logMessage1("D"),2000)
setTimeout(()=>logMessage1("E"),2500)
setTimeout(()=>logMessage1("F"),3000)
setTimeout(()=>logMessage1("G"),3500)