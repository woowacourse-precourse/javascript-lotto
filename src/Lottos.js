const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const checkValue = require('./libs/checkValue');
const exitWithError = require('./libs/exitWithError');
const { MONEY, LOTTO, PRIZE, WINNING_DETAIL, PLACE } = require('./libs/const');

class Lottos {
  constructor(money) {
    this.validate(money);
    this.count = money / MONEY.UNIT;
    this.list = [];
    this.publish();
  }

  validate(money) {
    const { errorMsg } = checkValue.money(money);

    if (errorMsg) {
      exitWithError(errorMsg);
      return;
    }
  }

  publish() {
    for (let num = 0; num < this.count; num++) {
      const newLotto = this.createNewLotto();
      this.list.push(newLotto);
    }
  }

  createNewLotto() {
    const newNumbers = Random.pickUniqueNumbersInRange(
      LOTTO.MIN_NUMBER,
      LOTTO.MAX_NUMBER,
      LOTTO.NUMBERS_COUNT
    );

    return new Lotto(newNumbers);
  }

  printCount() {
    Console.print(`\n${this.count}개를 구매했습니다.`);
  }

  printList() {
    this.list.forEach((lotto) => {
      lotto.printNumbers();
    });
  }

  getRanks(winningNumbers, bonusNumber) {
    let lottoRanks = [];

    this.list.forEach((lotto) => {
      lottoRanks.push(lotto.getRank(winningNumbers, bonusNumber));
    });

    return lottoRanks.filter((rank) => rank <= PLACE.LAST);
  }

  printWinningDetails(lottoRanks) {
    const winningDetails = [
      WINNING_DETAIL.FIFTH,
      WINNING_DETAIL.FOURTH,
      WINNING_DETAIL.THIRD,
      WINNING_DETAIL.SECOND,
      WINNING_DETAIL.FIRST,
    ];
    winningDetails.forEach((winningDetail, idx) => {
      const winningCount = this.getWinningCount(lottoRanks, idx);

      Console.print(`${winningDetail} - ${winningCount}개`);
    });
  }

  printRate(lottoRanks) {
    const lottoRate = this.calculateRate(lottoRanks);

    Console.print(`총 수익률은 ${lottoRate}%입니다.`);
  }

  calculateRate(lottoRanks) {
    const lottePrizes = [
      PRIZE.FIFTH,
      PRIZE.FOURTH,
      PRIZE.THIRD,
      PRIZE.SECOND,
      PRIZE.FIRST,
    ];
    const finalPrize = lottePrizes.reduce((acc, cur, idx) => {
      const winningCount = this.getWinningCount(lottoRanks, idx);

      return acc + cur * winningCount;
    }, 0);

    const purchaseMoney = this.count * MONEY.UNIT;

    return ((finalPrize / purchaseMoney) * 100).toFixed(1);
  }

  getWinningCount(lottoRanks, idx) {
    return lottoRanks.filter((rank) => rank === 5 - idx).length;
  }
}

module.exports = Lottos;
