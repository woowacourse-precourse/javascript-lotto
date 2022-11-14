const { amountRegExp } = require('./constant');

const isRight = (regExp) => (amount) => {
  const target = amount.trim();
  return regExp.test(target);
};

const isMultipleOf1000 = isRight(amountRegExp);

const divide = (divider) => (share) => Number(share) / divider;
const divide1000 = divide(1000);

module.exports = { isMultipleOf1000, divide1000 };
