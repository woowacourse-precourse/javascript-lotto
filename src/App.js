const { Console, Random } = require('@woowacourse/mission-utils');
const { GAME, MESSAGE, PRIZE_BOARD, ERROR } = require('./modules/Constant');
const Lotto = require('./Lotto');
const WinLotto = require('./WinLotto');

class App {
  constructor() {
    this.publishedLottos = [];
    this.amount = 0;
    this.winNumbers = [];
    this.bonusNumber = 0;
    this.scoreBoard = {
      fifth: 0,
      fourth: 0,
      third: 0,
      second: 0,
      first: 0,
    };
    this.prize = 0;
    this.profit = 0;
  }

  play() {
    this.publishLotto();
  }

  publishLotto() {
    Console.readLine(MESSAGE.BUY, (amount) => {
      this.validateAmount(amount);
      this.amount = Number(amount);

      const countOfLotto = this.amount / GAME.PRICE; // 1000 상수처리

      for (let i = 0; i < countOfLotto; i++) {
        const lotto = new Lotto(this.makeLottoAuto());
        this.publishedLottos.push(lotto);
      }

      this.printLotto(countOfLotto);
      this.getWinNumber();
    });
  }

  printLotto(countOfLotto) {
    Console.print(`${MESSAGE.CONFIRM_BUY(countOfLotto)}`);
    this.publishedLottos.forEach((publishedLotto) => {
      publishedLotto.publishLotto();
    });
  }

  makeLottoAuto() {
    const lotto = Random.pickUniqueNumbersInRange(GAME.START, GAME.END, GAME.COUNT);
    return lotto.sort((prev, next) => prev - next);
  }

  getWinNumber() {
    Console.readLine(MESSAGE.CONFIRM_WIN, (win) => {
      this.validateWinNumbers(win);
      this.winNumbers = win.split(',').map((el) => Number(el));
      new Lotto(this.winNumbers);

      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(MESSAGE.CONFIRM_BONUS, (bonus) => {
      this.bonusNumber = Number(bonus);
      new WinLotto(this.winNumbers, this.bonusNumber);

      this.makeScoreBoard();
      this.calculateProfit();
    });
  }

  makeScoreBoard() {
    this.publishedLottos.forEach((publishedLotto) => {
      const result = publishedLotto.calculateResult(this.winNumbers, this.bonusNumber);
      if (result === undefined) return;
      this.scoreBoard[result]++;
    });
  }

  calculateProfit() {
    for (const [result, count] of Object.entries(this.scoreBoard)) {
      this.prize += PRIZE_BOARD[result] * count;
    }
    let percentage = (this.prize / this.amount) * 100;
    percentage = Number(percentage.toFixed(1)).toLocaleString();
    this.profit = percentage;
    this.printResult();
  }

  printResult() {
    Console.print(MESSAGE.NOTICE_RESULT);
    for (const [result, count] of Object.entries(this.scoreBoard)) {
      Console.print(MESSAGE[result](count));
    }
    Console.print(MESSAGE.profit(this.profit));
    Console.close();
  }

  validateAmount(amount) {
    const stringToNumber = Number(amount);
    if (isNaN(stringToNumber)) {
      throw new Error(`${ERROR.COMMON} ${ERROR.NOT_NUMBER}`);
    } else if (stringToNumber % GAME.PRICE !== 0) {
      throw new Error(`${ERROR.COMMON} ${ERROR.NOT_MULTIPLE_OF_THOUSAND}`);
    } else if (stringToNumber === 0) {
      throw new Error(`${ERROR.COMMON} ${ERROR.CANT_ZERO}`);
    }
    return stringToNumber;
  }

  validateWinNumbers(win) {
    if (win.split(',').length !== GAME.COUNT) {
      throw new Error(`${ERROR.COMMON} ${ERROR.MUST_HAVE_COMMA}`);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
