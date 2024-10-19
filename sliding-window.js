var minSubArrayLen = function (target, nums) {
  let prevTotal = 0;
  let lowestRunCount = 0;

  for (let i = 0; i < nums.length; i++) {
    prevTotal += nums[i];
    lowestRunCount++;

    if (prevTotal >= target) {
      break;
    }
  }
  if (prevTotal < target) {
    return 0;
  }
  for (let i = 1; i < nums.length; i++) {
    const currentTotal = prevTotal - nums[i - 1];
    if (currentTotal >= target) {
      lowestRunCount--;
      prevTotal = currentTotal;
    } else {
      prevTotal = currentTotal + nums[i + lowestRunCount - 1];
    }
  }
  return lowestRunCount;
};

// target=7
// nums=[2,3,1,2,4,3]
// 2+3+1+2 >=7 ----->4 numbers(lowestruncount)
// 3+1+2+4 >=7 ----->4 numbers(lowestruncount)
// 1+2+4 >=7 ----->3 numbers(lowestruncount)
// 2+4+3 >=7 ----->3 numbers(lowestruncount)
// 4+3 >=7 ------>2 numbers(lowestruncount)
