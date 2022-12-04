const { Console } = require('@woowacourse/mission-utils');
const Purchase = require('./Purchase');
const Draw = require('./Draw');
const Prize = require('./Prize');
const { readPurchaseAmount, readWinningNumbers, readBonusNumber } = require('./InputView');
const { printPurchase, printStatistics } = require('./OutputView');

class GameController {
  #purchase = new Purchase();

  #draw = new Draw();

  #prize;

  readPurchase() {
    readPurchaseAmount(this.makePurchase.bind(this));
  }

  makePurchase(money) {
    const count = this.#purchase.getCount(money);
    this.#purchase.issueLottos(count, Purchase.getRandomNumbers);

    printPurchase(count, this.#purchase.getIssuedLottos());

    this.readWinning();
  }

  readWinning() {
    readWinningNumbers(this.drawWinningNumbers.bind(this));
  }

  readBonus() {
    readBonusNumber(this.drawBonusNumber.bind(this));
  }

  drawWinningNumbers(winningNumbers) {
    this.#draw.setWinningNumbers(winningNumbers);
    this.readBonus();
  }

  drawBonusNumber(bonusNumber) {
    this.#draw.setBonusNumber(bonusNumber);
    this.printGameResult();
  }

  getPrizeResult() {
    const { winningNumbers, bonusNumber } = this.#draw.getWinningAndBonus();

    const result = this.#prize.getResult(
      this.#purchase.getIssuedLottos(),
      winningNumbers,
      bonusNumber,
    );
    return result;
  }

  getProfitRate() {
    const expense = this.#purchase.getExpense();

    return this.#prize.getProfitRate(expense);
  }

  printGameResult() {
    this.#prize = new Prize();
    const prizeResult = this.getPrizeResult();
    const profitRate = this.getProfitRate();

    printStatistics(prizeResult, profitRate);

    Console.close();
  }
}

module.exports = GameController;
