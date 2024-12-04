function customTrim(str){
    function isWhiteSpaceCharacter(ch){
        return ch==='' || ch===' ' || ch==='\n' || ch==='\t' || ch==='\s'
    }
    let start = 0
    let end = str.length-1
    while(start<str.length && isWhiteSpaceCharacter(str[start]))
        start++
    while(end>0 && isWhiteSpaceCharacter(str[end]))
        end--
    return str.slice(start,end+1)

}

console.log(customTrim(`\n  hello\tworld\t\t`))