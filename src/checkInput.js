const { LOTTO_NUMBER, ERROR } = require("./utils/constants");

function checkLottoInput(numbers) {
  numbers.forEach((number) => {
    if (isNaN(Number(number))) {
      throw new Error(ERROR.ISNAN);
    }
  });
  
  // 갯수
  if (numbers.length !== LOTTO_NUMBER.COUNT) {
    throw new Error(ERROR.COUNT);
  }

  // 중복 존재
  const set = new Set(numbers);
  if (set.size !== numbers.length) {
    throw new Error(ERROR.DUPLICATED);
  }

  // 범위
  numbers.forEach((num) => {
    if (num < LOTTO_NUMBER.MIN_RANGE || num > LOTTO_NUMBER.MAX_RANGE) {
      throw new Error(ERROR.RANGE);
    }
  });
}

module.exports = checkLottoInput;
