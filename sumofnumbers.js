const numberList = [1, 2, 3];

function whileSum(list) {
  let sum = 0;
  let i = 0;
  while (list[i]) {
    sum += list[i];
    i++;
  }
  return sum;
}

console.log(whileSum(numberList));

function forSum(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

console.log(forSum(numberList));

function underscoreSum(list) {
  return (_.reduce(list, function (memo, num) {
    return memo + num;
  }, 0));
}

console.log(underscoreSum(numberList));

function recursiveSum(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + recursiveSum(list.slice(1, list.length));
}

console.log(recursiveSum(numberList));
