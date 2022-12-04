const { getCount, getRandomNumbers, issueLottos } = require('./Purchase');
const Draw = require('./Draw');
const Prize = require('./Prize');
const { readPurchaseAmount, readWinningNumbers, readBonusNumber } = require('./InputView');
const { printPurchase } = require('./OutputView');

class GameController {
  #issuedLottos = [];

  #draw = new Draw();

  readPurchase() {
    readPurchaseAmount(this.purchase.bind(this));
  }

  purchase(money) {
    const count = getCount(money);
    this.#issuedLottos = issueLottos(count, getRandomNumbers);

    printPurchase(count, this.#issuedLottos);
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
    const result = prize.getResult(this.#issuedLottos, winningNumbers, bonusNumber);

    return result;
  }
}

module.exports = GameController;
