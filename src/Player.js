const Machine = require('./Machine');

const { PRIZE } = require('./constants/prize');
const { ERROR } = require('./constants/message');
const SETTING = require('./constants/setting');

class Player {
  constructor() {
    this.spentMoney = 0;
    this.lottos = [];
    this.winMoney = 0;
    this.prizeCounts = new Map([
      [PRIZE.FIFTH, 0],
      [PRIZE.FOURTH, 0],
      [PRIZE.THIRD, 0],
      [PRIZE.SECOND, 0],
      [PRIZE.FIRST, 0],
    ]);
  }

  buyLottos(money) {
    this.validateMoney(money);

    const lottoCount = money / SETTING.LOTTO_PRICE;

    this.spentMoney = money;
    this.lottos = Array.from({ length: lottoCount }, () => Machine.publishLotto());
  }

  validateMoney(money) {
    if (!Number.isInteger(money / SETTING.LOTTO_PRICE)) {
      throw new Error(ERROR.LOTTO_PRICE);
    }

    if (money < SETTING.LOTTO_PRICE) {
      throw new Error(ERROR.MIN_MONEY);
    }
  }

  addPrizeCounts(prize) {
    const prizeCount = this.prizeCounts.get(prize);

    this.prizeCounts.set(prize, prizeCount + 1);
  }

  addWinMoney(winMoney) {
    this.winMoney += winMoney;
  }

  getProfitRate() {
    const profitRate = (this.winMoney / this.spentMoney) * 100;

    return profitRate.toFixed(1);
  }
}

module.exports = Player;
