const { Random } = require('@woowacourse/mission-utils');
const { ERROR, LOTTO_NUMBER } = require('./Contants');

class Input {
  constructor(inputMoney) {
    this.checkIsNumber(inputMoney);
    const inputNumberMoney = Number(inputMoney);
    this.checkThousandUnit(inputNumberMoney);
    this.countLotto = inputNumberMoney / 1000;
  }

  checkIsNumber(inputMoney) {
    if (isNaN(inputMoney)) {
      throw new Error(ERROR.NOT_NUMBER_ERROR);
    }
  }

  checkThousandUnit(inputMoney) {
    if (inputMoney % 1000 !== 0) {
      throw new Error(ERROR.NOT_THOUSAND_ERROR);
    }
  }

  static createRandomLotto(inputCount) {
    const compareLotto = [];
    while (compareLotto.length < inputCount) {
      const randomLotto = Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER.MIN_RANGE,
        LOTTO_NUMBER.MAX_RANGE,
        LOTTO_NUMBER.COUNT
      );

      const sortedLotto = randomLotto.sort((a, b) => a - b);

      compareLotto.push(sortedLotto);
    }
    return compareLotto;
  }
}

module.exports = Input;
