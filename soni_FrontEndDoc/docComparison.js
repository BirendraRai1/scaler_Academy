const doc1 = {
  name: "John",
  age: 12,
  address: {
    city: "Boston",
    zip: "10001",
    country: "USA",
  },
  phone: "987-654-3210",
  friends: {
    friend1: { name: "Alice", age: 30 },
    friend2: { name: "Bob", age: 25 },
  },
  hobbies: ["table-tennis"],
};

const doc2 = {
  name: "John",
  age: 14,
  address: {
    city: "New York",
    zip: "10001",
    country: "Canada",
  },
  phone: "123-456-7890",
  friends: {
    friend1: { name: "Alice", age: 30 },
    friend2: { name: "Bob", age: 26 },
  },
  country: "India",
};

function getDifference(doc1,doc2){
    let difference = {}
    const keys = new Set([...Object.keys(doc1),...Object.keys(doc2)])
    function compare(key,obj1,obj2,parent){
        if(!(key in obj1))
            parent[key] = {to:obj2[key],from:"EMPTY"}
        else if(!(key in obj2))
            parent[key] = {from:obj1[key],to:"EMPTY"}
        else if(typeof obj1[key]=='object' && obj1[key] !==null && typeof obj2[key]=='object' && obj2[key] !==null)
            parent[key] = getDifference(obj1[key],obj2[key])
        else if(obj1[key] !==obj2[key])
            parent[key] = {from:obj1[key],to:obj2[key]}
    }
    keys.forEach((key)=>compare(key,doc1,doc2,difference))
    return difference
}
console.log(getDifference(doc1,doc2))
