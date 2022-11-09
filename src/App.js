const MissionUtils = require('@woowacourse/mission-utils');
const { printError, isPositiveInteger } = require('./Utils');

const LOTTO_PRICE = 1000;
const LOTTO_START = 1;
const LOTTO_END = 45;
class App {
  #lottoCount;
  #lottos;

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
    for (let count = 0; count < this.#lottoCount; count += 1) {
      let lotto = MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO_START,
        LOTTO_END,
        6,
      );
      lotto = lotto.sort(function (a, b) {
        return a - b;
      });
      this.#lottos.push(lotto);
    }
  }

  #getMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      if (this.#validate(money)) {
        this.#lottoCount = parseInt(money / LOTTO_PRICE, 10);
        this.#publishLotto();
      }
    });
  }

  play() {
    this.#getMoney();
  }
}

module.exports = App;
