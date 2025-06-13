let hs = new Set()
hs.add(1)
hs.add(60)
hs.add(50)
hs.add(10)
hs.forEach((key)=>console.log('key is',key))

let hm = new Map()
hm.set(5,2)
hm.set(10,20)
hm.set(50,3)
hm.forEach((value,key)=>console.log('key and value for hm is',key,value))


//note: In a Map, the insertion order is guaranteed to be preserved, meaning items are iterated in the same order they were added
const map = new Map();
map.set("a", "A");
map.set(2, "two");
map.set(1, "one");

console.log([...map.keys()]);


