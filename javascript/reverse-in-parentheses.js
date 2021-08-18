function reverseInParentheses(inputString) {
  var finalString = '';
  var enclosed = '';
  var openParens = 0;
  var collecting = false;

  for (var i = 0; i < inputString.length; i++) {
    if (inputString[i] === '(') {
      if (!collecting) {
        collecting = true;
      } else {
        enclosed += inputString[i];
      }
      openParens++;
    } else if (inputString[i] === ')') {
      openParens--;
      if (openParens === 0 && collecting) {
        finalString += reverseInParentheses(reverseString(enclosed));
        collecting = false;
        enclosed = '';
      } else {
        enclosed += inputString[i];
      }
    } else if (collecting) {
      enclosed += inputString[i];
    } else {
      finalString += inputString[i];
    }
  }

  return finalString;

  function reverseString(string) {
    var reversed = '';
    for (var i = string.length - 1; i >= 0; i--) {
      if (string[i] === '(') {
        reversed += ')';
      } else if (string[i] === ')') {
        reversed += '(';
      } else {
        reversed += string[i];
      }
    }
    return reversed;
  }
}
