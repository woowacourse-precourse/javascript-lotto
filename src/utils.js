function isIncludeRange(min, max, checkNumber) {
  return checkNumber >= min && checkNumber <= max;
}

module.exports = { isIncludeRange };
