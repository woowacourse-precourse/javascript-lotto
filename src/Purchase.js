const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const InputView = require('./InputView');
const RandomNums = require('./RandomNums');
const Result = require('./Result');
const { LOTTO, PRICE_PER_LOTTO } = require('./constants');

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
    const amount = this.getAmount();
    const random = new RandomNums(amount);
    this.randomNumUnits = random.randomNumUnits;
    this.readLottoNums();
  }

  getAmount() {
    return this.#money / PRICE_PER_LOTTO;
  }

  validateBonusNum(number) {
    Purchase.checkIsNum(number);
    Purchase.checkNumRange(number);
    Purchase.checkDuplicatedNum(this.lotto.getNumbers(), number);
  }

  static checkNumRange(number) {
    if (number < LOTTO.MIN_NUM || number > LOTTO.MAX_NUM)
      throw new Error('[ERROR] 로또 번호는 1~45 범위의 숫자여야 합니다.');
  }

  static checkDuplicatedNum(lottoNum, bonusNum) {
    if (lottoNum.includes(bonusNum) === true) {
      throw new Error(
        '[ERROR] 당첨 번호와 보너스 번호는 중복된 값을 가질 수 없습니다.'
      );
    }
  }
}

module.exports = Purchase;
