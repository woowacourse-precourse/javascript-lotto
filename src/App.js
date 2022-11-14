const { Console } = require('@woowacourse/mission-utils');
const { User } = require('./User');
const { Draw } = require('./Draw');

const WINNING_PRIZE = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
  6: 0,
};

const MESSAGE = {
  PURCHASE_AMOUNT: '구입금액을 입력해주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해주세요.\n',
  BONUS_NUMBER: '\n보너스 번호을 입력해주세요.\n',
};

class App {
  constructor() {
    this.user = new User();
    this.draw = new Draw();
  }

  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    Console.readLine(MESSAGE.PURCHASE_AMOUNT, (purchaseAmount) => {
      this.user.handlePurchaseAmount(Number(purchaseAmount));
      this.getWinningNumbers();
    });
  }

  getWinningNumbers() {
    Console.readLine(MESSAGE.WINNING_NUMBERS, (winningNumbers) => {
      this.draw.handleWinningNumbers(
        winningNumbers.split(',').map((number) => Number(number)),
      );
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(MESSAGE.BONUS_NUMBER, (bonusNumber) => {
      this.draw.handleBonusNumber(Number(bonusNumber));
      this.calculateResult();
      this.printResult();
    });
  }

  calculateResult() {
    const { winningNumbers, bonusNumber } = this.draw;
    this.result = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
    };
    this.user.purchasedLottos.forEach((lotto) => {
      const rank = lotto.getRank(winningNumbers, bonusNumber);
      this.result[rank] += 1;
    });
  }

  getProfitRate() {
    const totalPrize = Object.keys(this.result).reduce(
      (acc, rank) => acc + WINNING_PRIZE[rank] * this.result[rank],
      0,
    );
    return ((totalPrize / this.user.purchaseAmount) * 100)
      .toFixed(1)
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  }

  printResult() {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${this.result[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.result[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.result[3]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result[2]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.result[1]}개`);
    Console.print(`총 수익률은 ${this.getProfitRate()}%입니다.`);
    Console.close();
  }
}

module.exports = App;
