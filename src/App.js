const { Console } = require('@woowacourse/mission-utils');
const { PRIZE_MONEY, INPUT_MESSAGE, RESULT_MESSAGE } = require('./Constants');
const Lotto = require('./Lotto');
const LottoIssuer = require('./LottoIssuer');
const Validater = require('./Validater');

class App {
  #lotto;

  constructor() {
    this.money = 0;
    this.issuedLottoes = [];
  }

  play() {
    this.buyLottoes();
  }

  buyLottoes() {
    Console.readLine(INPUT_MESSAGE.money, (money) => {
      this.money = Number(money);
      Validater.validateMoney(this.money);
      this.issuedLottoes = LottoIssuer.issueLottoes(this.money);
      this.getLuckyNumbers();
    });
  }

  getLuckyNumbers() {
    Console.readLine(INPUT_MESSAGE.lucky, (stringNumbers) => {
      const numbers = [...stringNumbers.split(',')].map(Number);
      this.#lotto = new Lotto(numbers);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(INPUT_MESSAGE.bonus, (stringNumber) => {
      this.#lotto.validateBonusNumber(Number(stringNumber));
      this.getResult();
    });
  }

  getResult() {
    const prizeRecord = this.#lotto.getPrizeRecord(this.issuedLottoes);
    const earningRate = this.calculateEarningRate(prizeRecord);

    App.printResult(prizeRecord, earningRate);
  }

  static printResult(prizeRecord, earningRate) {
    Console.print(RESULT_MESSAGE.title);
    Object.entries(prizeRecord)
      .reverse()
      .forEach(([prize, number]) =>
        Console.print(`${RESULT_MESSAGE[prize]} - ${number}개`)
      );
    Console.print(`총 수익률은 ${earningRate.toFixed(1)}%입니다.`);
    Console.close();
  }

  calculateEarningRate(prizeRecord) {
    const totalPrizeMoney = App.addPrizeMoney(prizeRecord);
    return (totalPrizeMoney / this.money) * 100;
  }

  static addPrizeMoney(prizeRecord) {
    return Object.keys(prizeRecord).reduce(
      (sum, prize) => sum + PRIZE_MONEY[prize] * prizeRecord[prize],
      0
    );
  }
}

const app = new App();
app.play();

module.exports = App;
