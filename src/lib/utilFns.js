const { amountRegExp } = require('./constant');

const isRight = (regExp) => (amount) => {
  const target = amount.trim();
  return regExp.test(target);
};

const isMultipleOf1000 = isRight(amountRegExp);

module.exports = { isMultipleOf1000 };
