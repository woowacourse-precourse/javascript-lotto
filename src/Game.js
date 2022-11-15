const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const validate = require("./validation/validation");

class Game {
  constructor() {
    this.quantity = null;
    this.list = [];
    this.resultList = [];
  }

  setGame(input) {
    this.validateMoney(input);
    this.quantity = input / 1000;
    this.generateWinningNumberList(this.quantity);
  }

  validateMoney(input) {
    validate.moneyInput(input);
  }

  quantityOfPurchase() {
    Console.print(`${this.quantity}개를 구매했습니다.\n`);
  }

  generateWinningNumberList(quantity) {
    for (let i = 0; i < quantity; i++) {
      const winningNumber = new Lotto(
        Random.pickUniqueNumbersInRange(1, 45, 6)
      );
      this.list.push(winningNumber);
    }
  }

  printWinningNumberList() {
    this.list.forEach((el) => {
      el.printWinningNumber();
    });
  }

  printWinningHistory() {
    this.getLottoResult();
    const winningHistoryList = [
      "3개 일치 (5,000원)",
      "4개 일치 (50,000원)",
      "5개 일치 (1,500,000원)",
      "5개 일치, 보너스 볼 일치 (30,000,000원)",
      "6개 일치 (2,000,000,000원)",
    ];
    winningHistoryList.forEach((el, i) => {
      const correctCount = this.getWinningCount(i);
      Console.print(`${el} - ${correctCount}개`);
    });
  }

  getWinningCount(i) {
    return this.resultList.filter((result) => result === 5 - i).length;
  }

  getLottoResult() {
    let lottoResultList = [];
    this.list.forEach((lotto) => {
      lottoResultList.push(
        lotto.getResult(this.inputLottoList, this.inputBonusNumber)
      );
    });
    this.resultList = lottoResultList.filter((el) => el);
  }

  getResultRate() {
    const lotto = [5000, 50000, 1500000, 30000000, 2000000000];
    const result = lotto.reduce((acc, cur, i) => {
      const correctCount = this.getWinningCount(i);
      return acc + cur * correctCount;
    }, 0);

    const rate = (result / (this.quantity * 1000)).toFixed(1);
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

module.exports = Game;
