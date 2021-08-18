function sortByHeight(a) {
  var sorted = [];
  sorted[a.length - 1] = 'placeholder';

  var people = [];
  for (var i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      sorted[i] = -1;
    } else {
      people.push(a[i]);
    }
  }

  people.sort((a, b) => a - b);

  for (i = 0; i < a.length; i++) {
    if (sorted[i] !== -1) {
      sorted[i] = people.shift();
    }
  }

  return sorted;
}
