function sortNumbers(numbers) {
  numbers = numbers.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    return -1;
  });
  return numbers;
}

module.exports = {
  sortNumbers,
};
