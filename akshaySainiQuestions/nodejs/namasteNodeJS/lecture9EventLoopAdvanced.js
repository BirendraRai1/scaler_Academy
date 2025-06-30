/*On any given context process.nextTick() has higher priority over setImmediate().
 setImmediate(()=>console.log("I run immediately"))
 process.nextTick(()=>console.log("But I run before that"))
 setTimeout(()=>console.log("I run after that"),0)
console.log("I run first")*/


/*If process.nextTick() is called in a given phase, all the callbacks passed to process.nextTick()
 will be resolved before the event loop continues. This will block the event loop and create I/O 
 Starvation if process.nextTick() is called recursively.
let count = 0;
const cb = ()=>{
    console.log(`Process next tick cb ${++count}`);
    process.nextTick(cb);
}
setImmediate(()=>console.log(`setImmediate is called`))
setTimeout(()=>console.log(`setTimeout executed`),0);
process.nextTick(cb);
console.log(`start`)*/



/*let count = 0;
const cb = () => {
    console.log(`processing setImmediate cb ${++count}`);
    if(count<5)
     setImmediate(cb)
}
setImmediate(cb)
setTimeout(()=>console.log(`setTimeout executed`),0)
console.log(`start`)*/

/*
Non-IO loops: Execution order process.nextTick() > setTimeout() > setImmediate()and other timers in non IO loops
IO loops: Execution order process.nextTick() > setImmediate() > setTimeout() and other timers in non IO loops
setTimeout isn’t reliable always

Note: In I/O cycles (e.g., inside fs.readFile), setImmediate always runs before setTimeout

*/ 

/*
Best Practices
process.nextTick(): Avoid recursion (can starve I/O). Use setImmediate for heavy tasks.

setImmediate(): Use instead of setTimeout(fn, 0) for non-timer tasks (more efficient).

setTimeout(): Use for actual time-based delays.
*/ 





