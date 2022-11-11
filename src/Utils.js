function isPositiveInteger(input) {
  const regex = /^[0-9]+$/;
  return regex.test(input);
}

// FIXME: UI 로직 분리
function printError(message) {
  throw Error(`[ERROR] ${message}`);
}

function isDuplicated(numbers) {
  return numbers.length !== new Set(numbers).size;
}

function isIncludeInRange(number, startRange, endRange) {
  return number >= startRange && number <= endRange;
}

module.exports = {
  isPositiveInteger,
  printError,
  isDuplicated,
  isIncludeInRange,
};
