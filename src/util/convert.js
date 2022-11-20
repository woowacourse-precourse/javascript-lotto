function convertToNumber(stringNumber) {
  return Number(stringNumber);
}

function convertToNumberArray(string) {
  return string
    .trim()
    .split(',')
    .map(Number)
    .sort((a, b) => a - b);
}

module.exports = { convertToNumber, convertToNumberArray };
