const sortByNumber = (a, b) => a - b;
const getStringArray = (arr) => `[${arr.join(', ')}]`;
const getRoundto2 = (number) => Math.round(number * 10000) / 100;
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;
const isNumber = (number) => Number.isNaN(+number);
const isStringNumbers = (str) => /^[0-9]+$/.test(str);

module.exports = {
  sortByNumber,
  getStringArray,
  getRoundto2,
  hasDuplicate,
  isNumber,
  isStringNumbers,
};
