function groupBy(collection1,property){
	if(typeof collection !=='string' && !Array.isArray(collection))
  return {}
  
  const getKey = (item)=>{
  	if(typeof property ==='function')
    	return property(item)
    else if(typeof property ==='string'){
    const keys = property.split(".")
    let value = item
    for(const key of keys)
    	value = value[key]
      return value
    }
  }
  const output = {}
  for(const item of collection){
  	const key = getKey(item)
    if(!output[key])
    	output[key] = []
    output[key].push(item)
  }
  return output
}
 const result3 = groupBy(["one", "two", "three"], "length");
console.log(result3);