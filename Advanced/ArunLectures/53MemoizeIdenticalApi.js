function createAPICallCaching(){
    const cache = new Map()
    const CACHE_TIME_LIMIT = 1000
    const CACHE_SIZE_LIMIT = 5
    return function getAPIWithCaching(path,config){
        const hash = getHashForAPI(path,config)
        if(cache.has(hash)){
            const apiEntry = cache.get(hash)
            if(Date.now()-apiEntry.startTime<=CACHE_TIME_LIMIT){
                return apiEntry.promise
            }
            cache.delete(hash)
        }
        const responsePromise = fetchAPIMock(path,config)
        cache.set(hash,{responsePromise,startTime:Date.now()})
        if(cache.size>CACHE_SIZE_LIMIT){
            const firstAPIHash = cache.keys().next().value
            cache.delete(firstAPIHash)
        }
        return responsePromise
    }

    function getHashForAPI(path,config){
        const keys = Object.keys(config)
        const hash = path +keys.map(key=>`?${key}=${config[key]}`).join(`&`)
        return hash
    }

    function fetchAPIMock(path,config){
        return new Promise((resolve)=>setTimeout(()=>resolve(Math.random()*1000),1200))
    }
}