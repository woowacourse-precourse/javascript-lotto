const Constant = require("./Constant");

const InputNumberValidation = (number) => {
  number.map((elem) => {
    if (isNaN(elem)) throw new Error(Constant.MESSAGE.ERROR.IS_NAN);
    if (elem < 1 || elem > 45)
      throw new Error(Constant.MESSAGE.ERROR.NUMBERS_IN_RANGE);
  });
  const set = new Set(number);
  if (set.size !== number.length)
    throw new Error(Constant.MESSAGE.ERROR.NOT_DUPLICATED);

  if (number.length !== 6) {
    throw new Error(Constant.MESSAGE.ERROR.OUT_OF_RANGE);
  }
};

const InputMoneyValidation = (number) => {
  if (isNaN(number)) throw new Error(Constant.MESSAGE.ERROR.IS_NAN);
  if (number < Constant.LOTTO.LOTTO_PRICE)
    throw new Error(Constant.MESSAGE.ERROR.MINIMUM_ACCOUNT);
};

const InputBonusValidation = (number) => {
  if (number < 1 || number > 45)
    throw new Error(Constant.MESSAGE.ERROR.NUMBERS_IN_RANGE);

  if (isNaN(number)) throw new Error(Constant.MESSAGE.ERROR.IS_NAN);
};

module.exports = {
  InputNumberValidation,
  InputMoneyValidation,
  InputBonusValidation,
};
