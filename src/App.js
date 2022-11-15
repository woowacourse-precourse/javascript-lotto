const { Console, Random } = require('@woowacourse/mission-utils');
const { GAME, MESSAGE, PRIZE, ERROR } = require('./Message');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.printedLottos = []; // 내 로또 번호
    this.amount = 0; // 구입 금액
    this.winNumbers = []; // 당첨 로또 번호
    this.bonusNumber = 0; // 보너스 번호
    this.score = { // 등수
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    this.prize = 0; // 상금
    this.return = 0; // 수익률
  }

  play() {
    this.printLotto();
  }

  printLotto() {
    Console.readLine(MESSAGE.BUY, (amount) => { // 로또 구입 금액 입력
      this.validateAmount(amount);
      this.amount = Number(amount);

      const countingLotto = this.amount / GAME.PRICE; // 로또 갯수

      for (let i = 0; i < countingLotto; i++) {
        const lotto = new Lotto(this.makingLotto());
        this.printedLottos.push(lotto);
      }

      this.printLotto(countingLotto);
      this.getWinNumber();
    });
  }

  printLotto(countingLotto) { // 구매 갯수
    Console.print(`${MESSAGE.COUNT(countingLotto)}`);
    this.printedLottos.forEach((printedLotto) => {
      printedLotto.printLotto();
    });
  }

  makingLotto() { // 로또 번호 만들기
    const lotto = Random.pickUniqueNumbersInRange(GAME.START, GAME.END, GAME.COUNT);
    return lotto.sort((prev, next) => prev - next);
  }

  getWinNumber() { // 당첨 번호
    Console.readLine(MESSAGE.WIN_NUM, (win) => {
      this.validateWinNumbers(win);
      this.winNumbers = win.split(',').map((el) => Number(el));
      new Lotto(this.winNumbers);

      this.getBonusNumber();
    });
  }

  getBonusNumber() { // 보너스 번호
    Console.readLine(MESSAGE.BONUS_NUM, (bonus) => {
      this.bonusNumber = Number(bonus);

      const numberReg = /^[0-9]*$/;
      if (!numberReg.test(this.bonusNumber) || this.bonusNumber < GAME.START || this.bonusNumber > GAME.END) {
        throw new Error(`${ERROR.COMMON} ${ERROR.RANGE}`);
      }
      if (this.winNumbers.includes(this.bonusNumber)) {
        throw new Error(`${ERROR.COMMON} ${ERROR.BONUS}`);
      }

      this.makescore();
      this.calReturn();
    });
  }

  makescore() { // 등수
    this.printedLottos.forEach((printedLotto) => {
      const result = printedLotto.calResult(this.winNumbers, this.bonusNumber);
      if (result === undefined) return;
      this.score[result]++;
    });
  }

  calReturn() { //수익률 계산
    for (const [result, count] of Object.entries(this.score)) {
      this.prize += PRIZE[result] * count;
    }
    let percentage = (this.prize / this.amount) * 100;
    percentage = Number(percentage.toFixed(1)).toLocaleString();
    this.return = percentage;
    this.printResult();
  }


}

const app = new App();
app.play();

module.exports = App;