function tokenizer(input1){
    let operators = ['+', '-', '/', '*', '(', ')', '^']
    let index = 0
    let input = input1
    const hasMoreTokens = ()=> index<input.length
    const matchToken = ()=>{
        while(hasMoreTokens() && input.charAt(index)==' ')
            index++
        if(hasMoreTokens() && operators.includes(input.charAt(index))){
            const token = input.charAt(index)
            index++
            return {type:'operator',token}
        }
        let buffer = ''
        while(hasMoreTokens() && (input.charAt(index)>='0' && input.charAt(index)<='9')){
            buffer +=input.charAt(index)
            index++
        }
        //The expression isNaN(Number(buffer)) checks if buffer can be successfully 
        //converted to a number. If buffer cannot be converted (i.e., if Number(buffer) 
        //results in NaN), then isNaN() will return true. Otherwise, it returns false.
        if(buffer.length>0 && !isNaN(Number(buffer))){
            const token = Number(buffer)
            return {type:'operand',token}
        }
        return null
    }
    this.getNextToken =()=>{
        if(!hasMoreTokens())
            return null
        const tokenValue = matchToken()
        return tokenValue
    }
}

const printAllTokens = (tokenizer)=>{
    let token = tokenizer.getNextToken()
    while(token){
        console.log('token',token)
        token = tokenizer.getNextToken()
    }
}

printAllTokens(new tokenizer('10 + 20 * 30 - 40'))