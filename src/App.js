const { Console } = require('@woowacourse/mission-utils');

const Store = require('./models/Store');
const LotteryMachine = require('./models/LotteryMachine');

const { MESSAGES } = require('./constants/index');
const { winningResult } = require('./utils/winningResult');

class App {
  constructor() {
    this.store = new Store();
    this.lotteryMachine = new LotteryMachine();
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine(MESSAGES.INPUT_MONEY, (money) => {
      this.store.setMoney(Number(money));
      const count = this.store.getBuyLottoCount(money);

      Console.print(MESSAGES.BUY_COUNT(count));
      this.lotteryMachine.createRandomLottos(count);

      this.inputLotto();
    });
  }

  inputLotto() {
    Console.readLine(MESSAGES.INPUT_LOTTO_NUMBERS, (numbers) => {
      const splittedNumbers = numbers.split(',').map(Number);
      this.lotteryMachine.setLottos(splittedNumbers);

      this.inputBonus();
    });
  }

  inputBonus() {
    Console.readLine(MESSAGES.INPUT_BONUS_NUMBER, (number) => {
      this.lotteryMachine.setBonus(Number(number));
      this.showResult();
    });
  }

  showResult() {
    const winningLotto = this.lotteryMachine.getLottos();
    const correctPoints = this.store.getCorrectCount(winningLotto);
    const winningRate = this.store.getWinningRate(correctPoints);

    Console.print(winningResult(correctPoints, winningRate));
    Console.close();
  }
}

module.exports = App;
