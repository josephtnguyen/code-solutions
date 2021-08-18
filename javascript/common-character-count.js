function commonCharacterCount(s1, s2) {
  var a1 = s1.split('');
  var a2 = s2.split('');

  var count = 0;
  for (var i = 0; i < a1.length; i++) {
    for (var j = 0; j < a2.length; j++) {
      if (a1[i] === a2[j]) {
        count++;
        a2.splice(j, 1);
        break;
      }
    }
  }

  return count;
}
