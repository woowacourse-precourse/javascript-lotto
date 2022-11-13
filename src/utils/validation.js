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
const validateNumbers = (numbers) => {
  if (isSixNumbers(numbers)) {
    throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  }
  if (isNumbersUnique(numbers)) {
    throw new Error('[ERROR] 로또 번호에 중복된 숫자가 없어야 합니다.');
  }
  if (!isNumbersInRange(numbers)) {
    throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
  }
};
module.exports = { validateNumbers };
