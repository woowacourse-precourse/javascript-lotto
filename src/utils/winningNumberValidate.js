function stringToNumberOfArray(string) {
  return string.split(',').map(element => parseInt(element));
}

function isNotUnique(array) {
  return [...new Set(array)].length === array.length;
}

function exceedNumberRange(value) {
  return /^[1-45]*$/g.test(value);
}

function isAllExceedNumberRange(array) {
  return array.every(exceedNumberRange);
}

function countNumberOfArray(array, length) {
  return array.length === length;
}

function checkInputForm(string) {
  try {
    stringToNumberOfArray(string);
    return true;
  } catch {
    return false;
  }
}

module.exports = {
  stringToNumberOfArray,
  isNotUnique,
  exceedNumberRange,
  isAllExceedNumberRange,
  countNumberOfArray,
  checkInputForm,
};
