Array.prototype.reducer = function(cb,defVal){
    let acc = defVal !=undefined ?defVal:this[0]
    let sidx = defVal !=undefined ?0:1
    for(let i=sidx;i<this.length;i++){
        acc = cb(acc,this[i])
    }
    return acc
} 

function sum(acc,element){
    return acc + element
}

let elem = [10,20,30,40,50]

console.log(elem.reducer(sum))