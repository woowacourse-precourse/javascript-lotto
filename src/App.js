const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const { LOTTO_PRICE, AWARD } = require('./constants');
const {
  sortByNumber,
  getStringArray,
  getRoundto2,
  isStringNumbers,
} = require('./utils');
const { ERROR, CONSOLE, getMsg } = require('./messages');

class App {
  price = 0;
  lottos = [];
  lottoMachine;
  bonus = 0;

  play() {
    this.purchaseLottos();
  }

  validate(price) {
    if (!isStringNumbers(price)) {
      throw new TypeError(ERROR.PRICE.VALID_TYPE);
    }
    if (+price % LOTTO_PRICE) {
      throw new RangeError(ERROR.PRICE.VALID_UNIT);
    }
  }

  purchaseLottos() {
    Console.readLine(CONSOLE.REQUEST_PRICE, (price) => {
      this.validate(price);
      this.price = +price;

      Array.from({ length: this.price / LOTTO_PRICE }).forEach(() => {
        this.lottos = [...this.lottos, Lotto.issueLotto()];
      });

      this.printLottos();
    });
  }

  printLottos() {
    Console.print(getMsg.purchased(this.price));

    this.lottos.forEach((lotto) => {
      lotto.sort(sortByNumber);
      Console.print(getStringArray(lotto));
    });

    this.setWinning();
  }

  setWinning() {
    Console.readLine(CONSOLE.REQUEST_WINNING, (numbers) => {
      this.lottoMachine = new Lotto(numbers.split(',').map(Number));

      Console.readLine(CONSOLE.REQUEST_BONUS, (number) => {
        this.lottoMachine.isValidBonusNumber(number);
        this.bonus = +number;
        this.printResult();
      });
    });
  }

  calculateResult(lottos) {
    const result = [0, 0, 0, 0, 0];

    lottos.forEach((lotto) => {
      const count = this.lottoMachine.getMatchedCount(lotto);

      if (count === 5 && lotto.includes(this.bonus)) {
        result[3] += 1;
      } else if (count > 2) {
        result[count - 3] += 1;
      }
    });

    return result;
  }

  getProfit(result) {
    return getRoundto2(
      result.reduce((profit, count, i) => profit + count * AWARD[i], 0) /
        this.price
    );
  }

  printResult() {
    const result = this.calculateResult(this.lottos);

    Console.print(CONSOLE.ENTRY_RESULT);
    Console.print(getMsg.statistic(result));
    Console.print(getMsg.profit(this.getProfit(result)));
    Console.close();
  }
}

module.exports = App;
