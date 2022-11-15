const isUnique = (arr) => new Set(arr).size === arr.length;

const isInRange = (min, max, num) => {
  if (num === undefined) return (num) => isInRange(min, max, num);
  return num >= min && num <= max;
};

const isNumber = (num) => /[0-9]/.test(num);

module.exports = {
  isUnique,
  isInRange,
  isNumber,
};
