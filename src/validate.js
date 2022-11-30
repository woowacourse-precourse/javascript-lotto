const { ERROR_MESSAGE, REGEX_NUM, LOTTO } = require('./constants');

const checkIsNum = (input) => {
  if (!input.match(REGEX_NUM)) {
    throw new Error(ERROR_MESSAGE.NOT_A_NUM);
  }
};

const checkIsNums = (numbers) => {
  numbers.forEach((num) => {
    if (!num.match(REGEX_NUM)) throw new Error(ERROR_MESSAGE.NOT_A_NUM);
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
};

const checkDuplicatedNum = (numbers) => {
  numbers.forEach((num, index) => {
    if (numbers.indexOf(num) !== index)
      throw new Error(ERROR_MESSAGE.DUPLICATED_NUM);
  });
};

const checkDuplicatedBonusNum = (lottoNum, bonusNum) => {
  if (lottoNum.includes(bonusNum) === true) {
    throw new Error(
      '[ERROR] 당첨 번호와 보너스 번호는 중복된 값을 가질 수 없습니다.'
    );
  }
};

const checkRightAmountMoney = (money) => {
  if (Number(money) % LOTTO.PRICE_PER !== 0) {
    throw new Error(ERROR_MESSAGE.VALIDATE_AMOUNT);
  }
};

module.exports = {
  checkIsNum,
  checkIsNums,
  checkSixNum,
  checkNumRange,
  checkDuplicatedNum,
  checkDuplicatedBonusNum,
  checkRightAmountMoney,
};
