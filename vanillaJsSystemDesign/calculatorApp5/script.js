let currentInput = ""
let currentOperator = null;


function clearDisplay(){
    currentInput = ""
    currentOperator = null
    updateDisplay("0")
}

function appendNumber(number){
    currentInput +=number
    updateDisplay(currentInput)
}

function appendOperator(operator){
    if(currentInput=="" && operator !==".")
        return
    if(operator==="." && currentInput.includes("."))
        return
    currentInput +=operator
    updateDisplay(currentInput)
}

function calculateResult(){
    try{
        const result = eval(currentInput)
        currentInput = result.toString()
        updateDisplay(result)
    }catch(error){
        updateDisplay(error)
        currentInput = ""
    }
}

function updateDisplay(value){
    document.getElementById("display").innerText=value
}