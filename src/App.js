const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants/constant');
const Validation = require('./Validation');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.count = 0;
    this.lotto = [];
    this.winningNumber = [];
    this.money = 0;
    this.bonusNumber = 0;
    this.countCorrect = [0, 0, 0, 0, 0];
    this.winnings = 0;
    this.yield = 0;
    this.validation = new Validation();
  }

  play() {
    Console.readLine(MESSAGE.INPUT_MONEY, (input) => {
      this.money = input;
      this.validation.isValidInputMoney(this.money);
      this.count = this.countLotto(this.money);
      Console.print(`${this.count}개를 구매했습니다.`);
      this.getLotto(this.count);
      this.printLotto();
      this.getWinningNumber();
    });
  }

  countLotto(money) {
    return money / 1000;
  }

  getLotto(count) {
    while (this.lotto.length < count) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lotto.push(lotto);
    }
  }

  printLotto() {
    this.lotto.map((lottoArr) => {
      lottoArr.sort((a, b) => a - b);
      Console.print(`[${lottoArr.join(', ')}]`);
    });
  }

  getWinningNumber() {
    Console.readLine(MESSAGE.INPUT_GOAL, (input) => {
      this.winningNumber = input.split(',').map((item) => parseInt(item, 10));
      this.validation.isValidWinningNumber(this.winningNumber);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(MESSAGE.INPUT_BONUSNUMBER, (input) => {
      this.bonusNumber = input;
      this.validation.isValidBonusNumber(input);
      this.getResult();
      this.getWinnings();
      this.getYield();
      this.printResult();
    });
  }

  checkCorrectNumber(lotto) {
    let winningNumberIndex = 0;
    let lottoNumberIndex = 0;
    let correctCount = 0;
    while (winningNumberIndex < 6 && lottoNumberIndex < 6) {
      if (this.winningNumber[winningNumberIndex] === lotto[lottoNumberIndex]) {
        winningNumberIndex += 1;
        lottoNumberIndex += 1;
        correctCount += 1;
      }
      if (this.winningNumber[winningNumberIndex] < lotto[lottoNumberIndex]) {
        winningNumberIndex += 1;
      }
      if (this.winningNumber[winningNumberIndex] > lotto[lottoNumberIndex]) {
        lottoNumberIndex += 1;
      }
    }
    if (correctCount < 3) return;
    if (correctCount === 3) {
      this.countCorrect[0] += 1;
      return;
    }
    if (correctCount === 4) {
      this.countCorrect[1] += 1;
      return;
    }
    if (correctCount === 6) {
      this.countCorrect[4] += 1;
      return;
    }
    if (correctCount === 5 && lotto.includes(parseInt(this.bonusNumber, 10))) {
      this.countCorrect[3] += 1;
      return;
    }
    this.countCorrect[2] += 1;
  }

  getResult() {
    this.lotto.map((pieceOfLotto) => this.checkCorrectNumber(pieceOfLotto));
  }

  getWinnings() {
    const winnings = [5000, 50000, 1500000, 30000000, 2000000000];
    this.countCorrect.map((count, index) => {
      this.winnings += winnings[index] * count;
    });
  }

  getYield() {
    this.yield = Math.round((this.winnings / this.money) * 1000) / 10;
  }

  printResult() {
    Console.print(
      `3개 일치 (5,000원) - ${this.countCorrect[0]}개\n4개 일치 (50,000원) - ${this.countCorrect[1]}개\n5개 일치 (1,500,000원) - ${this.countCorrect[2]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.countCorrect[3]}개\n6개 일치 (2,000,000,000원) - ${this.countCorrect[4]}개\n총 수익률은 ${this.yield}%입니다.`
    );
    Console.close();
  }
}
const app = new App();
app.play();
module.exports = App;
