const { Console, Random } = require('@woowacourse/mission-utils');
const { ERROR } = require('../data/constants');
const { isPositiveNumber, isDivide } = require('../utils/validate');
const Lotto = require('./Lotto');

class User {
  #inputMoney;
  #lottos = [];

  constructor(inputMoney) {
    this.validate(inputMoney);
    this.#inputMoney = inputMoney;
  }

  validate(inputMoney) {
    if (!isPositiveNumber(inputMoney)) throw new Error(ERROR.RANGE);
    if (!isDivide(inputMoney, 1000)) throw new Error(ERROR.DIVIDE);
  }

  makeRandomNum() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  countBuyLimit() {
    return this.#inputMoney / 1000;
  }

  setLottos() {
    for (let index = 0; index < this.countBuyLimit(); index++) {
      this.#lottos.push(new Lotto(this.makeRandomNum()));
    }
  }

  printMyLottos() {
    this.#lottos.forEach(lotto => {
      Console.print(lotto.print());
    });
  }
}

module.exports = User;
