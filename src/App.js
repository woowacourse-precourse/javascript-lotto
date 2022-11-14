const { Console, Random } = require('@woowacourse/mission-utils');
const { GAME, MESSAGE } = require('./modules/Constant');
const Lotto = require('./Lotto');

class App {
  constructor() {
    this.publishedLottos = [];
    this.amount = 0;
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
        lotto.publishLotto();
        this.publishedLottos.push(lotto);
      }

      Console.print(`${MESSAGE.CONFIRM_BUY(countOfLotto)}`);

      // TODO: 당첨번호 입력받기
    });
  }

  makeLottoAuto() {
    const lotto = Random.pickUniqueNumbersInRange(GAME.START, GAME.END, GAME.COUNT);
    return lotto.sort((prev, next) => prev - next);
  }
}

const app = new App();
app.play();

module.exports = App;
