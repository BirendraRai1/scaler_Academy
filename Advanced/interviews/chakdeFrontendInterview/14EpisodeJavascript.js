//Validate("{}[]()"); //true
//Validate("{[()]}"); //true
//Validate("{[}]"); //false last '}' is not paired with '{'
function isParenthesisBalanced(s) {
  // code here
  let stack = []
  let flag = false
  for(let i=0;i<s.length;i++){
      if(s[i]=='{' || s[i]=='(' ||s[i]=='[')
          stack.push(s[i])
      else if(s[i]==')'){
          if(stack.length && stack[stack.length-1]=='('){
              stack.pop()
              continue
          }
          else{
              flag = true
              break
          }
      }
      else if(s[i]=='}'){
          if(stack.length && stack[stack.length-1]=='{'){
              stack.pop()
              continue
          }
          else{
              flag = true
              break
          }
      }
      else if(s[i]==']'){
          if(stack.length && stack[stack.length-1]=='['){
              stack.pop()
              continue
          }
          else{
              flag = true
              break
          }
      }
  }
  if(stack.length || flag==true)
      return false
  return true
}

console.log(isParenthesisBalanced("{{}"));
