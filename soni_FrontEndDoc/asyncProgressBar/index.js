const clickBtn = document.getElementById("btn")
const resetBtn = document.getElementById("resetBtn")
const progressBar = document.getElementById("progressBar")

function createProgressBar(){
    const wrapper = document.createElement("div")
    Object.assign(wrapper.style,{
        height:"20px",
        width:"300px",
        border:"1px solid black",
        marginBottom:"5px"
    })
    const progress = document.createElement("div")
    Object.assign(progress.style,{
        height:"20px",
        width:"0%",
        background:"pink"
    })
    wrapper.appendChild(progress)
    progressBar.appendChild(wrapper)
    return progress
}

function progressBarManager(maxConcurrent){
    let currentIndex = 0
    const queue = []
    let activeCount = 0
    function resetProgressBar(){
        currentIndex = 0
        queue.length = 0
        activeCount = 0
        progressBar.innerHTML = ""
    }
    function addProgressBar(){
        const progressBarElement = createProgressBar()
        queue.push(progressBarElement)
        runNextProgressBar()
    }
    function runNextProgressBar(){
        if(currentIndex<queue.length && activeCount<maxConcurrent){
            const element = queue[currentIndex++]
            animateProgressBar(element)
        }
    }
    function animateProgressBar(element){
        let progress = 0
        activeCount++
        const intervalId = setInterval(()=>{
            progress++
            element.style.width = `${progress}%`
            if(progress>=100){
                clearInterval(intervalId)
                activeCount--
                runNextProgressBar()
            }
        },100)
    }
    return {addProgressBar,resetProgressBar}
}
const progressBarManager1 = progressBarManager(3) 
 


clickBtn.addEventListener('click',()=>{
    progressBarManager1.addProgressBar()
})
resetBtn.addEventListener("click",()=>{
    progressBarManager1.resetProgressBar()
})


