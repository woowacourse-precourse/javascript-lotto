const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const checkValidation = require("./errors/checkValidation");
const existError = require("./errors/existError");
const {
  MONEY,
  LOTTO,
  PRIZE,
  WINNING_DETAIL,
  PLACE,
} = require("./errors/message");

class Lottos {
  constructor(money) {
    this.validate(money);
    this.count = money / MONEY.UNIT;
    this.list = [];
    this.publish();
  }

  validate(money) {
    const { errorMsg } = checkValidation.money(money);

    if (errorMsg) {
      existError(errorMsg);
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

  getResults(winningNumbers, bonusNumber) {
    let lottoResultList = [];

    this.list.forEach((lotto) => {
      lottoResultList.push(lotto.getResult(winningNumbers, bonusNumber));
    });

    return lottoResultList.filter((result) => result <= PLACE.LAST);
  }

  printWinningDetails(lottoResultList) {
    const winningDetails = [
      WINNING_DETAIL.FIFTH,
      WINNING_DETAIL.FOURTH,
      WINNING_DETAIL.THIRD,
      WINNING_DETAIL.SECOND,
      WINNING_DETAIL.FIRST,
    ];
    winningDetails.forEach((winningDetail, idx) => {
      const winningCount = this.getWinningCount(lottoResultList, idx);

      Console.print(`${winningDetail} - ${winningCount}개`);
    });
  }

  printRate(lottoResultList) {
    const lottoRate = this.calculateRate(lottoResultList);

    Console.print(`총 수익률은 ${lottoRate}%입니다.`);
  }

  calculateRate(lottoResultList) {
    const lottePrizes = [
      PRIZE.FIFTH,
      PRIZE.FOURTH,
      PRIZE.THIRD,
      PRIZE.SECOND,
      PRIZE.FIRST,
    ];
    const finalPrize = lottePrizes.reduce((acc, cur, idx) => {
      const winningCount = this.getWinningCount(lottoResultList, idx);

      return acc + cur * winningCount;
    }, 0);

    const purchaseMoney = this.count * MONEY.UNIT;

    return ((finalPrize / purchaseMoney) * 100).toFixed(1);
  }

  getWinningCount(lottoResultList, idx) {
    return lottoResultList.filter((result) => result === 5 - idx).length;
  }
}

module.exports = Lottos;
