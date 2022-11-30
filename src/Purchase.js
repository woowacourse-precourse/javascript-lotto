const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const InputView = require('./InputView');
const RandomNums = require('./RandomNums');
const Result = require('./Result');
const { LOTTO, PRICE_PER_LOTTO } = require('./constants');
const { getAmount } = require('./util');

class Purchase {
  #money;

  constructor() {
    this.randomNumUnits;
    this.bonusNum;
  }

  start() {
    InputView.readInput(this.makeLotto.bind(this));
  }

  makeLotto(money) {
    this.#money = money;
    const random = new RandomNums(getAmount(money));
    InputView.readLottoNums(this.getUserInput.bind(this));
  }

  getUserInput(inputNums) {
    this.lotto = new Lotto(inputNums);
    InputView.readBonusNum(this.lotto.getNumbers(), this.makeResult.bind(this));
  }

  makeResult(bonusNum) {
    this.result = new Result(
      this.randomNumUnits,
      this.lotto.getNumbers(),
      bonusNum
    );
    this.result.printResult();
  }
}

module.exports = Purchase;
