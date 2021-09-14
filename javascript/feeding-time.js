function feedingTime(classes) {
  const days = [{}];

  for (let i = 0; i < classes.length; i++) {
    toFirstAvailableDay(days, classes[i]);
    if (days.length > 5) return -1;
  }

  return days.length;
}

function toFirstAvailableDay(days, animals) {
  for (let i = 0; i < days.length; i++) {
    const day = days[i];
    let overlap = false;
    for (const animal of animals) {
      if (day[animal]) {
        overlap = true;
        break;
      }
    }

    if (overlap) {
      if (i === days.length - 1) days.push({});
      continue;
    } else {
      for (const animal of animals) day[animal] = true;
      break;
    }
  }
}

/*
for each class
    loop through days
        if class conflicts with day
            if this was the last day
                start a new day
            continue to next day
        else if class has no conflicts with day
            push all animals in class to day
            stop loop

return length of days or -1 if length is > 5
*/
