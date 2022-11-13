const isSixNumbers = (numbers) => numbers.length !== 6;
const isNumbersUnique = (numbers) => Array.from(new Set(numbers)).length !== 6;
const isNumbersInRange = (numbers) => {
  let result = true;
  numbers.forEach((number) => {
    if (number > 45) {
      result = false;
    }
    if (number < 1) {
      result = false;
    }
  });
  return result;
};
module.exports = { isSixNumbers, isNumbersUnique, isNumbersInRange };
