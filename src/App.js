const { Console } = require('@woowacourse/mission-utils');
const Store = require('./Store');
const { MESSAGES } = require('./constants/index');
const { winningResult } = require('./utils/winningResult');

class App {
  constructor() {
    this.store = new Store();
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine(MESSAGES.INPUT_MONEY, (money) => {
      this.store.setMoney(money);
      const count = this.store.getBuyLottoCount(money);

      Console.print(MESSAGES.BUY_COUNT(count));
      this.store.createRandomLottos();

      this.inputLotto();
    });
  }

  inputLotto() {
    Console.readLine(MESSAGES.INPUT_LOTTO_NUMBERS, (numbers) => {
      const splittedNumbers = numbers.split(',').map(Number);
      this.store.setLottos(splittedNumbers);

      this.inputBonus();
    });
  }

  inputBonus() {
    Console.readLine(MESSAGES.INPUT_BONUS_NUMBER, (number) => {
      this.store.setBonus(Number(number));
      this.showResult();
    });
  }

  showResult() {
    const correctPoints = this.store.getCorrectCount();
    const winningRate = this.store.getWinningRate(correctPoints);

    Console.print(winningResult(correctPoints, winningRate));
    Console.close();
  }
}

module.exports = App;
