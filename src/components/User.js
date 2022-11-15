const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR, NUMBER } = require('../data/constants');
const { allMatchNum } = require('../utils/utils');
const { isPositiveNumber, isDivide } = require('../utils/validate');
const Lotto = require('./Lotto');

class User {
  inputMoney;
  lottos = [];

  constructor(inputMoney) {
    this.validate(inputMoney);
    this.inputMoney = inputMoney;
  }

  validate(inputMoney) {
    if (!isPositiveNumber(inputMoney)) throw new Error(ERROR.RANGE);
    if (!isDivide(inputMoney, NUMBER.PRICE_LOTTO))
      throw new Error(ERROR.DIVIDE);
  }

  makeRandomNum() {
    return Random.pickUniqueNumbersInRange(
      NUMBER.START_LOTTO,
      NUMBER.END_LOTTO,
      NUMBER.LENGTH_LOTTO,
    );
  }

  countBuyLimit() {
    return this.inputMoney / NUMBER.PRICE_LOTTO;
  }

  setLottos() {
    for (let index = 0; index < this.countBuyLimit(); index++) {
      this.lottos.push(new Lotto(this.makeRandomNum()));
    }
  }

  countWinningLottos(winningNum) {
    const winningMap = allMatchNum(this.lottos, winningNum);
  }

  calculateYield(winningMap) {
    const divisor =
      (winningMap.get(3) || 0) * NUMBER.THREE_WINNING +
      (winningMap.get(4) || 0) * NUMBER.FOUR_WINNING +
      (winningMap.get(5) || 0) * NUMBER.FIVE_WINNING +
      (winningMap.get(5) || 0) * NUMBER.FIVE_BONUS_WINNIGN +
      (winningMap.get(6) || 0) * NUMBER.SIX_WINNING;
    return (divisor / this.inputMoney) * 100;
  }

  printMyLottos() {
    Console.print(`${this.countBuyLimit()}${MESSAGE.ALERT_PURCHASE}`);
    this.lottos.forEach(lotto => {
      Console.print(`[${lotto.getLottoNum().join(', ')}]`);
    });
  }
}

module.exports = User;
