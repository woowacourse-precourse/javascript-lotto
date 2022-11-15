function isDivide(value, divisor) {
  return value % divisor === 0;
}

function isPositiveNumber(value) {
  return Math.sign(value) === 1;
}

function isMatchLength(value, length) {
  return value.length === length;
}

function isNotUnique(array) {
  return [...new Set(array)].length === array.length;
}

function isExceedRange(value, from, to) {
  if (value > to || value < from) return false;
  return true;
}

function isAllExceedRange(array, from, to) {
  return array.every(value => isExceedRange(value, from, to));
}

function isMatchForm(string) {
  return /^\d{1,2},\d{1,2},\d{1,2},\d{1,2},\d{1,2},\d{1,2}$/g.test(string);
}

function isMatchFormBonus(string) {
  return /^\d{1,2}$/g.test(string);
}

function isOverlap(value, array) {
  return array.includes(value);
}

module.exports = {
  isDivide,
  isPositiveNumber,
  isMatchLength,
  isNotUnique,
  isExceedRange,
  isAllExceedRange,
  isMatchForm,
  isMatchFormBonus,
  isOverlap,
};
