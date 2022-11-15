function convertToNumber(stringNumber) {
  return parseInt(stringNumber, 10);
}

function convertToNumberArray(string) {
  return string
    .trim()
    .split(',')
    .map(Number)
    .sort((a, b) => a - b);
}

module.exports = { convertToNumber, convertToNumberArray };
