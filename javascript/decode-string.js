function decodeString(s) {
  const strStack = [''];
  const multStack = [1];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (Number.isInteger(parseInt(char))) {
      let number = '';
      while (Number.isInteger(parseInt(s[i]))) {
        number += s[i];
        i++;
      }
      multStack.push(parseInt(number));
      strStack.push('');
    } else if (char === ']') {
      const string = strStack.pop();
      const mult = multStack.pop();
      strStack[strStack.length - 1] += string.repeat(mult);
    } else {
      strStack[strStack.length - 1] += char;
    }
  }

  return strStack[0];
}

/*
begin strStack with empty string
begin multStack with mult 1

loop through chars of string
    if it is a letter
        append letter to top of strStack
    if it is a number
        parse complete number
        push number to multStack
        push empty string to strStack
        increment loop to skip opening bracket
    if it is a closing bracket
        pop strStack and multStack
        multiply string with mult
        append string to end of new top of strStack

return top of strStack
*/
