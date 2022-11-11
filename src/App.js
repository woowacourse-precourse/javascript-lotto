const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const { printError, isPositiveInteger } = require('./Utils');

const LOTTO_PRICE = 1000;
const LOTTO_START = 1;
const LOTTO_END = 45;
class App {
  #lottoCount;
  #lottos;
  #winningNumber;

  constructor() {
    this.#lottoCount = 0;
    this.#lottos = [];
  }

  #validate(money) {
    if (!isPositiveInteger(money)) {
      printError('금액을 양수로 입력해주세요.');
    }
    if (money % LOTTO_PRICE !== 0) {
      printError('1000원 단위로 입력해주세요.');
    }

    return true;
  }

  #publishLotto() {
    let lotto = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_START,
      LOTTO_END,
      6,
    );
    lotto = lotto.sort(function (a, b) {
      return a - b;
    });
    this.#lottos.push(new Lotto(lotto));
    return lotto;
  }

  #printLotto() {
    MissionUtils.Console.print(`${this.#lottoCount}개를 구매했습니다.`);
    for (let count = 0; count < this.#lottoCount; count += 1) {
      const lotto = this.#publishLotto();
      MissionUtils.Console.print(lotto);
    }
  }

  #getWinningNumber() {
    MissionUtils.Console.readLine(
      '당첨 번호를 입력해 주세요.\n',
      (winningNumber) => {
        this.#winningNumber = winningNumber;
      },
    );
  }

  #startLotto() {
    this.#printLotto();
    this.#getWinningNumber();
  }

  #getMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      if (this.#validate(money)) {
        this.#lottoCount = parseInt(money / LOTTO_PRICE, 10);
        this.#startLotto();
      }
    });
  }

  play() {
    this.#getMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
