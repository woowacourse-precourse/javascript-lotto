const { Console, Random } = require('@woowacourse/mission-utils');
const { GAME, MESSAGE, PRIZE_BOARD } = require('./modules/Constant');
const Lotto = require('./Lotto');

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
      // TODO: 입력 금액의 유효성검사
      // 인풋은 숫자를 입력해도 문자열로 들어온다
      // 문자열 => 숫자 했는데 숫자가아니면 무효!
      // 1000의 배수가 아니면 무효
      this.amount = Number(amount);

      const countOfLotto = this.amount / GAME.PRICE; // 1000 상수처리

      for (let i = 0; i < countOfLotto; i++) {
        const lotto = new Lotto(this.makeLottoAuto());
        this.publishedLottos.push(lotto);
      }

      Console.print(`${MESSAGE.CONFIRM_BUY(countOfLotto)}`);
      this.publishedLottos.forEach((publishedLotto) => {
        publishedLotto.publishLotto();
      });

      this.getWinNumber();
    });
  }

  makeLottoAuto() {
    const lotto = Random.pickUniqueNumbersInRange(GAME.START, GAME.END, GAME.COUNT);
    return lotto.sort((prev, next) => prev - next);
  }

  getWinNumber() {
    Console.readLine(MESSAGE.CONFIRM_WIN, (win) => {
      // TODO: validate win
      // 쉼표로 구분안하는 경우
      // 길이가 6이 아닌 경우
      // 문자를 가지고 있는 경우
      // 쉼표로 끝나는 경우
      // 숫자의 범위가 맞지 않는 경우
      // 중복 숫자를 가지고 있는 경우

      this.winNumbers = win.split(',').map((el) => Number(el));
      console.log(this.winNumbers);

      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(MESSAGE.CONFIRM_BONUS, (bonus) => {
      // TODO: validate bonus
      // 숫자여야한다
      // 1 ~ 45 사이여야 한다
      // 중복이면 안된다

      this.bonusNumber = Number(bonus);
      console.log(this.bonusNumber);
      this.publishedLottos.forEach((publishedLotto) => {
        const result = publishedLotto.calculateResult(this.winNumbers, this.bonusNumber);
        if (result === undefined) return;
        this.scoreBoard[result]++;
      });
      console.log(this.scoreBoard);
      this.calculateProfit();
    });
  }

  calculateProfit() {
    for (const [result, count] of Object.entries(this.scoreBoard)) {
      this.prize += PRIZE_BOARD[result] * count;
    }
    let percentage = (this.prize / this.amount) * 100;
    percentage = percentage.toFixed(1);
    console.log(percentage);
    this.profit = percentage;
    this.printResult();
    return percentage;
  }

  printResult() {
    Console.print(MESSAGE.NOTICE_RESULT);
    for (const [result, count] of Object.entries(this.scoreBoard)) {
      Console.print(MESSAGE[result](count));
    }
    Console.print(MESSAGE.profit(this.profit));
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
