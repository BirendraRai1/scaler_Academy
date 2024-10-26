// By default assigning a visited `Map` as third argument to
//track circular references
function deepEqual(a,b,visited=new Map()){
    // As per spec comparing two NaN values returns false
   // Since we're comparing based on value we'll return true
    if(Number.isNaN(a) && Number.isNaN(b))
        return true
    // Handles primitives like number, string, undefined, boolean, null
   // Also handles objects with same references
    if(a===b)
        return true
    // We need to process for equality only if `a` and `b` are object values
   // Like Arrays [], Object Literals {}
    if(typeof a!='object' || typeof b!='object')
        return false
    // Handling for circular references
   // Means we've already compared these two values
    if(visited.has(a) && visited.get(a)===b)
        return true
    // we map `a -> b` in visited
// This will indicate that of both these values will have been compared already
// This will be useful when we encounter same values again in recursion
    visited.set(a,b)

    // Object.keys method works in both cases of Arrays and Objects values
   // For Objects it gives the keys of Objects
   // For Arrays it gives indices as the keys
    const keysA = Object.keys(a)
    const keysB = Object.keys(b)
    // If both are of unequal length, obviously the values can't be equal any further
    if(keysA.length !==keysB.length)
        return false
    for(let i=0;i<keysA.length;i++){
        // We recursively call the same logic
        const keyA = keysA[i]
        const keyB = keysB[i]
        if(!deepEqual(a[keyA],b[keyB],visited))
            return false
    }
    // We've processed at all levels deeply, so we can say both values are deeply equal now
    return true
}