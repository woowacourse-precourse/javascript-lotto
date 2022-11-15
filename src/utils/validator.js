const MESSAGE = require('../MESSAGE');

function checkValidMoney(money) {
  let numberStyle = /^[0-9]+$/;
  if (!numberStyle.test(money)) throw new Error(MESSAGE.ERROR.MONEY.NUMBER);
  if (money % 1000 !== 0) throw new Error(MESSAGE.ERROR.MONEY.THOUSAND);
  if (money === 0) throw new Error(MESSAGE.ERROR.MONEY.ZERO);
}

function checkValidLotto(numbers) {
  if (!isLength(numbers, 6)) throw new Error(MESSAGE.ERROR.LOTTO.LENGTH);
  if (!isNumber(numbers)) throw new Error(MESSAGE.ERROR.LOTTO.NUMBER);
  if (!isValidRange(numbers)) throw new Error(MESSAGE.ERROR.LOTTO.RANGE);
  if (!isUnique(numbers)) throw new Error(MESSAGE.ERROR.LOTTO.DUPLICATE);
}

function checkValidBonus(numbers, bonus) {
  if (!isLength(bonus, 1)) throw new Error(MESSAGE.ERROR.LOTTO.BONUSLENGTH);
  if (!isNumber(bonus)) throw new Error(MESSAGE.ERROR.LOTTO.NUMBER);
  if (!isValidRange(bonus)) throw new Error(MESSAGE.ERROR.LOTTO.RANGE);
  if (!isUniqueBonus(numbers, bonus))
    throw new Error(MESSAGE.ERROR.LOTTO.DUPLICATE);
}

function isLength(numbers, length) {
  return numbers.length === length;
}

function isNumber(numbers) {
  let numberStyle = /^[0-9]+$/;
  let isNumberMethod = (num) => numberStyle.test(num);
  return numbers.every(isNumberMethod);
}

function isUniqueBonus(numbers, bonus) {
  return !numbers.includes(bonus[0]);
}

function isUnique(numbers) {
  let isUniqueMethod = (num) =>
    numbers.indexOf(num) !== numbers.lastIndexOf(num);
  return !numbers.some(isUniqueMethod);
}

function isValidRange(numbers) {
  let isValidRangeMethod = (num) => num >= 1 && num <= 45;
  return numbers.every(isValidRangeMethod);
}

module.exports = { checkValidMoney, checkValidLotto, checkValidBonus };
