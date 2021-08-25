function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const words = S.toLowerCase().replace('.', '').split(' ');
  const substrings = {};
  let maxFreq = 1;

  for (const word of words) {
    for (let i = 0; i < word.length; i++) {
      for (let j = i + 1; j < word.length + 1; j++) {
        const substring = word.substring(i, j);
        if (!substrings[substring]) {
          substrings[substring] = 1;
        } else {
          substrings[substring]++;
        }
        maxFreq = Math.max(maxFreq, substrings[substring]);
      }
    }
  }

  let finalString = '';
  for (let i = maxFreq; i >= 1; i--) {
    const stringsOfSameLength = [];
    for (const substring in substrings) {
      if (substrings[substring] === i) {
        stringsOfSameLength.push(substring);
      }
    }
    stringsOfSameLength.sort();
    for (const string of stringsOfSameLength) {
      finalString += `${substrings[string]}: ${string}` + '\n';
    }
  }

  return finalString.substring(0, finalString.length - 1);
}
