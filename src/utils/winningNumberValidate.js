function stringToNumberOfArray(string) {
  return string.split(',').map(element => parseInt(element));
}

function isNotUnique(array) {
  return [...new Set(array)].length === array.length;
}

function exceedNumberRange(value) {
  if (value > 45 || value < 1) return false;
  return true;
}

function isAllExceedNumberRange(array) {
  return array.every(exceedNumberRange);
}

function checkInputForm(string) {
  return /^\d{1,2},\d{1,2},\d{1,2},\d{1,2},\d{1,2},\d{1,2}$/g.test(string);
}

function checkInputBonusForm(string) {
  return /^\d{1,2}$/g.test(string);
}

function checkOverlapToArray(value, array) {
  return array.includes(value);
}

module.exports = {
  stringToNumberOfArray,
  isNotUnique,
  exceedNumberRange,
  isAllExceedNumberRange,
  checkInputForm,
  checkInputBonusForm,
  checkOverlapToArray,
};
