const { Console, Random } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./constants/constant');
const Lotto = require('./Lotto');
class App {
  constructor() {
    this.count = 0;
    this.lotto = [];
    this.winningNumber = [];
    this.money = 0;
    this.bounsNumber = 0;
    this.countCorrect = [0, 0, 0, 0, 0];
  }
  play() {
    Console.readLine(MESSAGE.INPUT_MONEY, (input) => {
      this.money = input;
      this.isValidInputMoney();
      this.count = this.countLotto(this.money);
      Console.print(`${this.count}개를 구매했습니다.`);
      this.getLotto(this.count);
      this.printLotto();
      this.getWinningNumber();
    });
  }
  isValidInputMoney() {
    this.isInputNumber(this.money);
    this.isMoneyDisvisible();
  }
  isInputNumber(input) {
    if (Number.isNaN(parseInt(input, 10))) {
      throw new Error('[ERROR] 숫자를 입력하세요.');
    }
  }
  isMoneyDisvisible() {
    if (this.money % 1000 !== 0) {
      throw new Error('[ERROR] 1000으로 나누어 떨어지도록 입력하세요.');
    }
  }
  countLotto(money) {
    return money / 1000;
  }
  getLotto(count) {
    while (this.lotto.length < count) {
      let lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lotto.push(lotto);
    }
  }
  printLotto() {
    this.lotto.map((lottoArr) => {
      lottoArr.sort((a, b) => a - b);
    });
  }
  getWinningNumber() {
    Console.readLine(MESSAGE.INPUT_GOAL, (input) => {
      this.winningNumber = input.split(',').map((item) => {
        return parseInt(item, 10);
      });
      this.isValidWinningNumber();
    });
  }
  isValidWinningNumber() {
    const lotto = new Lotto(this.winningNumber);
    this.getBonusNumber();
  }
  getBonusNumber() {
    Console.readLine(MESSAGE.INPUT_BONUSNUMBER, (input) => {
      this.bounsNumber = input;
      this.isValidBonusNumber();
      this.getResult();
    });
  }
  isValidBonusNumber() {
    this.isInputNumber(this.bounsNumber);
    this.isBonusNumberInRange();
  }
  isBonusNumberInRange() {
    if (!(1 <= this.bounsNumber && this.bounsNumber <= 45)) {
      throw new Error('[ERROR] 1~45 사이의 숫자를 입력하세요.');
    }
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
        continue;
      }
      if (this.winningNumber[winningNumberIndex] < lotto[lottoNumberIndex]) {
        winningNumberIndex += 1;
        continue;
      }
      if (this.winningNumber[winningNumberIndex] > lotto[lottoNumberIndex]) {
        lottoNumberIndex += 1;
        continue;
      }
    }
    console.log(correctCount);
    if (correctCount < 3) return;
    if (correctCount === 3) return (this.countCorrect[0] += 1);
    if (correctCount === 4) return (this.countCorrect[1] += 1);
    if (correctCount === 6) return (this.countCorrect[4] += 1);
    if (correctCount === 5 && lotto.includes(parseInt(this.bounsNumber))) return (this.countCorrect[3] += 1);
    return (this.countCorrect[2] += 1);
  }
  getResult() {
    console.log(this.winningNumber);
    this.lotto.map((pieceOfLotto) => {
      this.checkCorrectNumber(pieceOfLotto);
    });
  }
}
let app = new App();
app.play();
module.exports = App;
