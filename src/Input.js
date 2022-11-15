const { Random } = require('@woowacourse/mission-utils');
const { ERROR, MESSAGE, RESULT, LOTTO_NUMBER } = require('./Contants.js');

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

  createRandomLotto(inputCount) {
    const compareLotto = [];
    for (let i = 0; i < inputCount; i++) {
      const lottoArray = this.ascendingLottoArray(this.makeRandomLottoNumber());
      this.compareLotto.push(lottoArray);
    }
    return compareLotto;
  }

  makeRandomLottoNumber() {
    return Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER.MIN_RANGE,
      LOTTO_NUMBER.MAX_RANGE,
      LOTTO_NUMBER.COUNT
    );
  }

  ascendingLottoArray(lottoArray) {
    return lottoArray.sort((a, b) => a - b);
  }
}

module.exports = Input;
