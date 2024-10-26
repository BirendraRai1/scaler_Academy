function BrowserHistory(url){
    let history = []// Define an array `history` to keep track of all the visited URLs
    let current =-1 // `current` indicates the current URL we're viewing
    if(url){
        // If the url is provided while calling  we need to visit this url by adding it to the
        // history and incrementing `current`
        history.push(url)
        current++
    }
    this.visit = (url)=>{
        // we slice all the urls up until current, this is because when a new URL is visited, all the other `forward` urls should be cleared
        history = history.slice(0,current+1)
        // Now just add the new url to history and increment
        history.push(url)
        current++
    }
    this.back = ()=>{
        // When previous url needs to be visited
        // We just decrement the current, but also ensure that we don't go below 0 using Math.max()
        current = Math.max(0,current-1)
        return history[current]
    }
    this.forward = ()=>{
        // We just increment the current, but also ensure that we don't go beyond the length of history using Math.min()
        current = Math.min(history.length-1,current+1)
        return history[current]
    }
}

const browserHistory = new BrowserHistory("https://google.com")

//visiting new URLs
browserHistory.visit("https://youtube.com");
browserHistory.visit("https://facebook.com");

console.log(browserHistory.back());

console.log(browserHistory.back());

console.log(browserHistory.forward());

browserHistory.visit("https://twitter.com");

console.log(browserHistory.back());

console.log(browserHistory.forward());