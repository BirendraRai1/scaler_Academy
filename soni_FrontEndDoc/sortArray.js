function mergeSort(num){
    function sortWithMerge(num,l,r){
        if(l>=r)
            return num
        let mid = Math.floor((l+r)/2)
        sortWithMerge(num,l,mid)
        sortWithMerge(num,mid+1,r)
        merge(num,l,mid+1,r)
    }
    sortWithMerge(num,0,num.length-1)
    return num
    function merge(num,l,y,r){
        let p1 = l
        let p2 = y
        let p3 = 0
        let temp = new Array(r-l+1)
        while(p1<y && p2<=r){
            if(num[p1]<=num[p2]){
                temp[p3] = num[p1]
                p3++
                p1++
            }
            else{
                temp[p3] = num[p2]
                p2++
                p3++
            }
        }
        while(p1<y){
            temp[p3] = num[p1]
            p1++
            p3++
        }
        while(p2<=r){
            temp[p3] = num[p2]
            p2++
            p3++
        }
        for(let i=0;i<r-l+1;i++)
            num[i+l] = temp[i]
    }
    
}
console.log(mergeSort([21, 31, 45, 56, 43]))