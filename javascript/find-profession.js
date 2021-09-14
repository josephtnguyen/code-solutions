function findProfession(level, pos) {
  let engineer = true;
  while (level !== 1) {
    const choices = Math.pow(2, level - 1);
    if (pos > choices / 2) {
      engineer = !engineer;
      pos -= choices / 2;
    }
    level--;
  }
  return engineer ? 'Engineer' : 'Doctor';
}
