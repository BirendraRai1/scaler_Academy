//Validate("{}[]()"); //true
//Validate("{[()]}"); //true
//Validate("{[}]"); //false last '}' is not paired with '{'
function validate(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "{" || str[i] == "[") stack.push(str[i]);
    else if (str[i] == "}") {
      let curr = stack.pop();
      if (curr == "{") continue;
      else return false;
    } else if (str[i] == "]") {
      let curr = stack.pop();
      if (curr == "[") continue;
      else return false;
    } else if (str[i] == ")") {
      let curr = stack.pop();
      if (curr == "(") continue;
      else return false;
    }
  }
  return true;
}

console.log(validate("{[()]}"));
