const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const validate = require("./validation/validation");

class Game {
  constructor() {
    this.quantity = null;
    this.list = [];
    this.resultList = [];
    this.inputLottoList = null;
    this.inputBonusNumber = null;
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

  validateWinningNumber(input) {
    validate.winningNumbers(input);
  }

  setWinningNumber(input) {
    input = input.split(",");
    this.validateWinningNumber(input);
    this.inputLottoList = input;
  }

  validateBonusNumber(input) {
    validate.bonusNumber(input, this.inputLottoList);
  }

  setBonusNumber(input) {
    this.validateBonusNumber(input);
    this.bonusNumber = input;
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
      const correctCount = this.getWinningCount(i)
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
}

module.exports = Game;
