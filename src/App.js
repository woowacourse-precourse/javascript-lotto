const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const LottoIssuer = require('./LottoIssuer');
const {
  LOTTO_PRICE,
  PRIZE_MONEY,
  INPUT_MESSAGE,
  MONEY_ERROR_MESSAGE,
  RESULT_MESSAGE,
} = require('./Constants');

class App {
  play() {
    this.receiveMoney();
  }

  receiveMoney() {
    Console.readLine(INPUT_MESSAGE.money, (money) => {
      this.money = Number(money);
      this.checkMoneyValidity(this.money);
      this.issueLottoes(this.money);
      this.getLuckyNumbers();
    });
  }

  issueLottoes(money) {
    const lottoIssuer = new LottoIssuer();
    this.issuedLottoes = lottoIssuer.issue(money);
    this.printLottoes(this.issuedLottoes);
  }

  checkMoneyValidity(money) {
    if (!money) {
      throw new Error(MONEY_ERROR_MESSAGE.number);
    }
    if (money % LOTTO_PRICE !== 0) {
      throw new Error(MONEY_ERROR_MESSAGE.unit);
    }
  }

  printLottoes() {
    Console.print(`\n${this.issuedLottoes.length}개를 구매했습니다.`);
    this.issuedLottoes.forEach((issuedLotto) => {
      const issuedLottoString = issuedLotto.toString();
      Console.print(`[${issuedLottoString.replace(/,/g, ', ')}]`);
    });
  }

  getLuckyNumbers() {
    Console.readLine(INPUT_MESSAGE.lucky, (stringNumbers) => {
      const numbers = [...stringNumbers.split(',')].map(Number);
      this.lotto = new Lotto(numbers);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(INPUT_MESSAGE.bonus, (stringNumber) => {
      this.lotto.validateBonusNumber(Number(stringNumber));
      this.printResult();
    });
  }

  printResult() {
    Console.print(RESULT_MESSAGE.title);

    const prizeRecord = this.lotto.getResult(this.issuedLottoes);
    Object.entries(prizeRecord)
      .reverse()
      .forEach(([prize, number]) => {
        Console.print(`${RESULT_MESSAGE[prize]}${number}개`);
      });

    const earningRate = this.calculateEarningRate(prizeRecord);
    Console.print(`총 수익률은 ${earningRate.toFixed(1)}%입니다.`);
    Console.close();
  }

  calculateEarningRate(prizeRecord) {
    const totalPrizeMoney = Object.keys(prizeRecord).reduce(
      (sum, prize) => sum + PRIZE_MONEY[prize] * prizeRecord[prize],
      0
    );
    return (totalPrizeMoney / this.money) * 100;
  }
}

const app = new App();
app.play();

module.exports = App;
