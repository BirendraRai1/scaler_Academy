function chunk(arr,input=1){
    let result = []
    for(let i=0;i<arr.length;){
        let newArr = []
        for(let j=0;j<input&& i<arr.length;i++,j++)
            newArr.push(arr[i])
        result.push(newArr)
    }
    return result
}

console.log(chunk([1,2,3,4,5],4))