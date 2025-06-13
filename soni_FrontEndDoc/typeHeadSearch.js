class LRUCache {
    constructor(capacity){
        this.cache = new Map()
        this.capacity = capacity
    }
    get(key){
        if(!this.cache.has(key))
            return -1
        const value = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key,value)
        return value
    }
    put(key,value){
        if(this.cache.has(key))
            this.cache.delete(key)
        if(this.cache.size>=this.capacity)
            this.cache.delete(this.cache.keys().next().value)
        this.cache.set(key,value)
    }
}

class TypeAheadCache{
    constructor(capacity){
        this.cache = new LRUCache(capacity)
    }
    async fetchSuggestions(query){
        //check if query exists in cache
        const cachedResult = this.cache.get(query)
        if(cachedResult !==-1){
            console.log("cache hit for :",query)
            console.log("this.cache.cache.keys() inside cachedResult is ",this.cache.cache.keys())
            console.log("_______________________________")
            return cachedResult
        }
        console.log("Fetching from API for :",query)
        const results = await this.getSuggestionsFromAPI(query)
        this.cache.put(query,results)
        console.log("this.cache.cache.keys() outside cachedResult is",this.cache)
        console.log("-----------------------------------------")
        return results
    }
    async getSuggestionsFromAPI(query){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(query)
            },500)
        })
    }
}

const typeAhead = new TypeAheadCache(2); // Limit cache to 2 items
async function testTypeAhead() {
    await typeAhead.fetchSuggestions('apple');  // Fetch from API
    await typeAhead.fetchSuggestions('banana'); // Fetch from API
     await typeAhead.fetchSuggestions('apple');  // Cache hit
     await typeAhead.fetchSuggestions('cherry'); // Fetch from API
     await typeAhead.fetchSuggestions('banana'); // Fetch from API
     await typeAhead.fetchSuggestions('date');   // Fetch from API
     await typeAhead.fetchSuggestions('apple');  //  Fetch from API
     await typeAhead.fetchSuggestions('date');  //  Cache hit
 }

testTypeAhead();