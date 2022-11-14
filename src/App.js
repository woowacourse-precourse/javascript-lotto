const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constant');
const { UNIT } = require('./Setting');
const Lotto = require('./Lotto');
const Statistics = require('./Statistics');
const Validate = require('./Validate');

const statistics = new Statistics();
const validate = new Validate();

class App {
  myLotto = [];

  play() {
    Console.readLine(MESSAGE.INPUT_PURCHASE_AMOUNT, (input) => {
      validate.purchaseAmount(input);
      statistics.purchaseAmount = input;
      this.lottoCount = input / 1000;
      this.setMyLotto();
      this.printMyLotto();
      this.readWinningNumbers();
    });
  }

  setMyLotto() {
    const { myLotto, lottoCount } = this;

    while (myLotto.length < lottoCount) {
      myLotto.push(new Lotto());
    }
  }

  printMyLotto() {
    const { myLotto, lottoCount } = this;

    Console.print(`${lottoCount}${UNIT.LOTTO}를 구매했습니다.`);
    myLotto.forEach((lotto) => {
      lotto.print();
    });
  }

  readWinningNumbers() {
    Console.readLine(MESSAGE.INPUT_WINNING_NUMBERS, (input) => {
      const winningNumbers = input.split(',');

      validate.lotto(winningNumbers);
      this.winningNumbers = new Set(winningNumbers.map(Number));
      this.readBonusNumber();
    });
  }

  readBonusNumber() {
    const { winningNumbers } = this;

    Console.readLine(MESSAGE.INPUT_BONUS_NUMBER, (input) => {
      validate.bonus(input, winningNumbers);
      this.bonusNumber = Number(input);
      this.printStatistics();
    });
  }

  printStatistics() {
    const { myLotto, winningNumbers, bonusNumber } = this;

    statistics.set(myLotto, winningNumbers, bonusNumber);
    statistics.print();
    this.exit();
  }

  exit() {
    Console.close();
  }
}

module.exports = App;
