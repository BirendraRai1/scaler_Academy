const progressBar = document.getElementById("progress-bar")
const progressText = document.getElementById("progress-text")
const startBtn = document.getElementById("start-btn")
let progress = 0
startBtn.addEventListener("click",()=>{
    // Reset progress
    progress = 0
    progressBar.style.width = "0%"
    progressText.textContent = "0%"

    // Start the progress
    const interval = setInterval(()=>{
        if(progress>=100){
            clearInterval(interval)// Stop when progress is complete
        }
        else{
            progress +=1
            progressBar.style.width = `${progress}%`
            progressText.textContent = `${progress}%`
        }
    },50)
})