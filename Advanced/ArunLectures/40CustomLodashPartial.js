partial.placeholder = '_'
function partial(mainFn,...partialArgs){
    return function(...nextArgs){
        //tracks the current elements index in nextArgs
        let i=0
        const args = [...partialArgs]
        //Replace placeholder with values from 'nextArgs'
        args.forEach((arg,index)=>{
            console.log('partial.placeholder is',partial.placeholder)
            if(arg === partial.placeholder)
                args[index] = nextArgs[i++]
        })
        const remainingArgs = nextArgs.slice(i)
        const finalArgs = [...args,...remainingArgs]
        return mainFn(...finalArgs)
    }
}

const sumOfThree = (a,b,c)=>a + b+c
const productOfFour = (a,b,c,d)=>a*b*c*d
const partialSum = partial(sumOfThree,1,'_',3)
console.log(partialSum(2))

const partialProduct = partial(productOfFour,'_','_','_',3)
console.log(partialProduct(1,2,4))