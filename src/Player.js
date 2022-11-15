const Machine = require('./Machine');

const { PRIZE } = require('./constants/prize');

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

    const lottoCount = money / 1000;

    this.spentMoney = money;
    this.lottos = Array.from({ length: lottoCount }, () => Machine.publishLotto());
  }

  validateMoney(money) {
    if (!Number.isInteger(money / 1000)) {
      throw new Error('[ERROR] 1000원 단위의 금액만 입력하세요.');
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
