function customTrim(str){
    const isWhiteSpaceCharacter = (ch)=>{
        return ch==='' || ch===' ' || ch==='\n' || ch==='\t' || ch==='\s'
    }
    let start = 0
    let end = str.length-1
    while(start<str.length && isWhiteSpaceCharacter(str.charAt(start)))
        start++
    while(end>0 && isWhiteSpaceCharacter(str.charAt(end)))
        end--
    return str.slice(start,end+1)

}

console.log(customTrim(`\n  hello\tworld\t\t`))