const { ERROR_MESSAGE, REGEX_NUM } = require('./constants');


const checkIsNum = (input) => {
  if (REGEX_NUM.test(input) === false) {
    throw new Error(ERROR_MESSAGE.NOT_A_NUM);
  }
};

const checkIsNums = (numbers) => {
  numbers.forEach((num) => {
    if (REGEX_NUM.test(num) === false)
      throw new Error(ERROR_MESSAGE.NOT_A_NUM);
  });
};

const checkSixNum = (numbers) => {
  if (numbers.length !== LOTTO.NUM) {
    throw new Error(ERROR_MESSAGE.NOT_SIX_NUM);
  }
};

const checkNumRange = (numbers) => {
  numbers.forEach((num) => {
    if (num < LOTTO.MIN_NUM || num > LOTTO.MAX_NUM)
      throw new Error(ERORR_MESSAGE.NOT_IN_RANGE);
  });
}

const checkDuplicatedNum = (numbers) => {
  numbers.forEach((num, index) => {
    if (numbers.indexOf(num) !== index)
      throw new Error(ERROR_MESSAGE.DUPLICATED_NUM);
  });
}

const checkRightAmountMoney = (money) => {
  if (Number(money) % PRICE_PER_LOTTO !== 0) {
    throw new Error(ERROR_MESSAGE.VALIDATE_AMOUNT);
  }
};


module.exports = {
  checkIsNum,
  checkIsNums,
  checkSixNum,
  checkNumRange,
  checkDuplicatedNum,
  checkRightAmountMoney,
}