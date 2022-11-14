const { Console } = require('@woowacourse/mission-utils');
const { User } = require('./User');
const { Draw } = require('./Draw');

class App {
  constructor() {
    this.user = new User();
    this.draw = new Draw();
  }

  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    Console.readLine('구입금액을 입력해 주세요.\n', (purchaseAmount) => {
      this.user.handlePurchaseAmount(Number(purchaseAmount));
      this.getWinningNumber();
    });
  }

  getWinningNumber() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (winningNumber) => {
      this.draw.handleWinningNumber(
        winningNumber.split(',').map((number) => Number(number)),
      );
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (bonusNumber) => {
      this.draw.handleBonusNumber(Number(bonusNumber));
      this.calculateResult();
    });
  }

  calculateResult() {
    const { winningNumber, bonusNumber } = this.draw;
    this.result = {};
    this.user.purchasedLottos.forEach((lotto) => {
      const rank = lotto.getRank(winningNumber, bonusNumber);
      this.result[rank] = this.result[rank] ? this.result[rank] + 1 : 1;
    });
  }
}

module.exports = App;
