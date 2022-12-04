const Purchase = require('./Purchase');
const Draw = require('./Draw');
const Prize = require('./Prize');
const { readPurchaseAmount, readWinningNumbers, readBonusNumber } = require('./InputView');
const { printPurchase } = require('./OutputView');

class GameController {
  #purchase = new Purchase();

  #draw = new Draw();

  #prize = new Prize();

  readPurchase() {
    readPurchaseAmount(this.makePurchase.bind(this));
  }

  makePurchase(money) {
    const count = this.#purchase.getCount(money);
    this.#purchase.issueLottos(count, Purchase.getRandomNumbers);

    printPurchase(count, this.#purchase.getIssuedLottos());
  }

  readWinning() {
    readWinningNumbers(this.drawWinningNumbers.bind(this));
  }

  readBonus() {
    readBonusNumber(this.drawBonusNumber.bind(this));
  }

  drawWinningNumbers(winningNumbers) {
    this.#draw.setWinningNumbers(winningNumbers);
  }

  drawBonusNumber(bonusNumber) {
    this.#draw.setBonusNumber(bonusNumber);
  }

  getPrizeResult() {
    const { winningNumbers, bonusNumber } = this.#draw.getWinningAndBonus();

    const prize = new Prize();
    const result = prize.getResult(this.#purchase.getIssuedLottos(), winningNumbers, bonusNumber);

    return result;
  }

  getProfitRate() {
    const expense = this.#purchase.getExpense();

    return this.#prize.getProfitRate(expense);
  }
}

module.exports = GameController;
