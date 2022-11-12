function isPositiveInteger(input) {
  const regex = /^[0-9]+$/;
  return regex.test(input);
}

function isDuplicated(numbers) {
  return numbers.length !== new Set(numbers).size;
}

function isIncludeInRange(number, startRange, endRange) {
  return number >= startRange && number <= endRange;
}

module.exports = {
  isPositiveInteger,
  isDuplicated,
  isIncludeInRange,
};
