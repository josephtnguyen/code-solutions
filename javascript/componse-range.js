function composeRanges(nums) {
  const output = [];
  let start = nums[0];
  let expectedNum = start + 1;
  for (let i = 1; i <= nums.length; i++) {
    const num = nums[i];
    if (num === expectedNum) {
      expectedNum++;
    } else {
      const end = nums[i - 1];
      if (start === end) output.push(start.toString());
      else output.push(start.toString() + '->' + end.toString());
      start = num;
      expectedNum = start + 1;
    }
  }
  return output;
}

/*
start range at nums[0]

loop through nums
    if num is expectedNum
        update expectedNum
    else (if nums is not expectedNum)
        push range to final output
            get end
            if end is start
                push single number
            else
                push start '->' end
        terminate range
*/
